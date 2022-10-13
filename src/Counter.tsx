import React, { useState, useRef, useEffect } from 'react';

const Counter: React.FC<{}> = () => {
  const [value, setValue] = useState<number>(0);
  const incliment = () => {
    setValue((prevState) => prevState + 1);
  };
  const decliment = () => {
    setValue((prevState) => prevState - 1);
  };

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  const ref = useRef<HTMLInputElement>(null!);
  const focusInput = () => {
    ref.current.focus();
  };
  return (
    <div>
      <div>value:{value}</div>
      <button onClick={incliment}>+1</button>
      <button onClick={decliment}>-1</button>
      <div>This compinent was re-rendered {renderTimes.current} times!</div>
      <input ref={ref} type='text'></input>
      <button onClick={focusInput}>Click me!</button>
    </div>
  );
};

export default Counter;
