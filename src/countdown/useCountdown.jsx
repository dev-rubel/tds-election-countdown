const UseCountdown = (targetDate) => {
  return getReturnValues(targetDate);
};

// convert eng => bn numbers
const toBn = (n) => {
  return n.replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d])
}

const getReturnValues = (countDown) => {
  // calculate time left
  const days = toBn(Math.floor(countDown / (1000 * 60 * 60 * 24)).toString());
  const hours = toBn(Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString());
  const minutes = toBn(Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)).toString());
  const seconds = toBn(Math.floor((countDown % (1000 * 60)) / 1000).toString());
  
  return [days, hours, minutes, seconds];
};

export { UseCountdown };
