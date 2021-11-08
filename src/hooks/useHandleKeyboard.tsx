import React, { useEffect } from 'react';
import { useKeyboard } from '../store/keyboard';

const useHandleKeyboard = () => {
  const update = useKeyboard((state) => state.update);

  useEffect(() => {
    const onMouseDown = () => update({ mousePrimary: true });
    const onMouseUp = () => update({ mousePrimary: false });

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [update]);

  return <div></div>;
};

export default useHandleKeyboard;
