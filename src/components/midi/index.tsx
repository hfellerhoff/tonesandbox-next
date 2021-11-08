import React, { useEffect, useState } from 'react';
import { MIDIMessage, useMIDI } from '../../store/midi';
import Tooltip from '../tooltip/Tooltip';
import styles from './midi.module.css';

export type MIDIInput = {
  connection: string;
  id: string;
  manufacturer: string;
  name: string;
  onmidimessage: null | ((message: MIDIMessageEvent) => void);
  onstatechange: null | (() => void);
  state: string;
  type: string;
  version: string;
};

export type MIDIMessageEvent = {
  data: [number, number, number];
};

export type MIDIStatus = 'not-connected' | 'not-supported' | 'connected';

interface Props {}

const MIDI = ({}: Props) => {
  const broadcast = useMIDI((state) => state.broadcast);
  const [isLoading, setIsLoading] = useState(true);

  const [inputs, setInputs] = useState<MIDIInput[]>([]);
  const [inputID, setInputID] = useState('0');
  const [doesSupportMIDI, setDoesSupportMIDI] = useState(true);

  useEffect(() => {
    const updateInputs = (access: any) => {
      // Get lists of available MIDI controllers
      const inputIterator = access.inputs.values();

      let input = inputIterator.next();

      const currentInputs = [];
      while (input.value) {
        currentInputs.push(input.value);
        input = inputIterator.next;
      }
      setInputs(currentInputs);

      if (currentInputs.length > 0) {
        setInputID(currentInputs[0].id);
      }
    };

    const doesSupportMIDI = (navigator as any).requestMIDIAccess;
    if (doesSupportMIDI) {
      (navigator as any).requestMIDIAccess().then(function (access: any) {
        updateInputs(access);

        access.onstatechange = function (e: any) {
          setIsLoading(true);
          updateInputs(access);
          setIsLoading(false);
        };
      });
    } else {
      setDoesSupportMIDI(false);
    }

    setIsLoading(false);
  }, [inputID]);

  useEffect(() => {
    if (inputs.length > 0) {
      if (!inputs[0].onmidimessage) {
        inputs[0].onmidimessage = (message: any) => {
          broadcast(Array.from(message.data) as MIDIMessage);
        };
        console.log('Updated onmidimessage.');
      }
    }
  }, [broadcast, inputs]);

  const status: MIDIStatus = doesSupportMIDI
    ? inputs.length === 0 || isLoading
      ? 'not-connected'
      : 'connected'
    : 'not-supported';

  return (
    <div className={styles.container}>
      {status === 'connected' ? (
        <div>
          <select className={styles.select}>
            {inputs.map((input) => (
              <option key={input.id} value={input.id}>
                {input.name}
              </option>
            ))}
          </select>
        </div>
      ) : status === 'not-supported' ? (
        <Tooltip content='To use MIDI, use Chrome, Opera, or Edge.'>
          MIDI not supported
        </Tooltip>
      ) : (
        <></>
      )}
      <div className={`${styles.status} ${styles[`status--${status}`]}`} />
    </div>
  );
};

export default MIDI;
