import { useEffect, useState } from 'react'
import CountdownTimer from './countdown/CountdownTimer';

function App() {
  // get time left
  const getTimeLeft = () => {
    let now = new Date().getTime();
    let futureDate = new Date('2024-01-07').getTime();
    return futureDate - now;
  }

  // set default current time remain
  const [timeleft, setTimeleft] = useState(getTimeLeft())

  // run timer every secound
  useEffect(() => {
    setInterval(() => {
      setTimeleft(getTimeLeft())
    }, 1000);
  }, [])

  return (
    <div className="grid-x countdown-section">

      <div className="cell large-12 small-12 medium-12 text-center">
        <h1 className="section-title">দ্বাদশ জাতীয় সংসদ নির্বাচন ২০২৪</h1>
        <p className="section-sub-title">ভোট গ্রহণের বাকি</p>
      </div>

      <div className="digit-wripper cell large-offset-4 medium-offset-3 large-6 medium-6 small-12">
        <CountdownTimer targetDate={timeleft} />
      </div>

    </div>
  )
}

export default App
