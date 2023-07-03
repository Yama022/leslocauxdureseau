import React, { useState, useCallback } from 'react';
import { Calendar } from '@natscale/react-calendar';
  
export default function CalendarGfg() {
  const [value, setValue] = useState();
  
  const onChange = useCallback(
    (value) => {
      setValue(value);
    },
    [setValue],
  );
  
  return (
    <div>
      <h1>Calendar - GeeksforGeeks</h1>
      <Calendar value={value} onChange={onChange} />
    </div>
  );
}
