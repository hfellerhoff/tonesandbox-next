import React, { useCallback, useEffect, useState } from 'react';
import { Scale, Note } from 'theory.js';
import { useInstruments } from '../store/instruments';
import { MIDIMessage, useMIDI } from '../store/midi';
import * as Tone from 'tone';

const useHandlePlayback = () => {
  const [messages, clear] = useMIDI((state) => [state.messages, state.clear]);
  const instruments = useInstruments();
  const [activeNotes, setActiveNotes] = useState<Record<string, boolean>>({});
  const [sustainedNotes, setSustainedNotes] = useState<Record<string, boolean>>(
    {}
  );
  const [isSustained, setIsSustained] = useState(false);

  useEffect(() => {
    if (!instruments.selected) {
      instruments.initialize();
    } else {
      instruments.selected.instrument.toDestination();
    }
  }, [instruments]);

  const onMessage = useCallback(
    (message: MIDIMessage) => {
      if (instruments.selected) {
        const type = message[0];
        const note = new Scale(new Note(message[1]), []).getStringArray()[0];
        const velocity = message[2] / 127;

        const instrument = instruments.selected.instrument;

        switch (type) {
          // Note On
          case 144:
            instrument.triggerAttack(note, Tone.immediate(), velocity);
            activeNotes[note] = true;
            if (isSustained) sustainedNotes[note] = true;
            break;
          // Note Off
          case 128:
            if (!sustainedNotes[note]) {
              instrument.triggerRelease(note, Tone.immediate());
            }
            activeNotes[note] = false;
            break;
          // Sustain
          case 176:
            if (message[2] === 127) {
              setIsSustained(true);
              setSustainedNotes({ ...activeNotes });
            } else {
              Object.entries(sustainedNotes).forEach(([n, isPlaying]) => {
                if (isPlaying && !activeNotes[n]) {
                  instrument.triggerRelease(n, Tone.immediate());
                }
                sustainedNotes[n] = false;
              });
              setIsSustained(false);
            }
          default:
            break;
        }
      }
    },
    [activeNotes, instruments.selected, isSustained, sustainedNotes]
  );

  useEffect(() => {
    if (messages.length > 0) {
      messages.forEach((message) => onMessage(message));
      clear();
    }
  }, [messages, onMessage, clear]);

  return { activeNotes, sustainedNotes };
};

export default useHandlePlayback;
