export function debounce(func, duration) {
  let timeoutID = null; //process ID which can be used to stop the process (see below)
  return (...args) => {
    clearTimeout(timeoutID);
    // set timeout when function should be executed
    timeoutID = setTimeout(() => {
      func(...args);
    }, duration); // duration until 300ms is good practice
  };
}
