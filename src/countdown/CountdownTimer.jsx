import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { UseCountdown } from './useCountdown';

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="grid-x grid-margin-x grid-margin-y">
        <DateTimeDisplay value={days} type={'দিন'} isDanger={false} />        
        <DateTimeDisplay value={hours} type={'ঘন্টা'} isDanger={false} />        
        <DateTimeDisplay value={minutes} type={'মিনিট'} isDanger={false} />        
        <DateTimeDisplay value={seconds} type={'সেকেন্ড'} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = UseCountdown(targetDate);

    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  
};

export default CountdownTimer;
