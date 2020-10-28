function isFirstRun () {
  return window.localStorage.getItem('countdownTimerTime') === null
}

export {
  isFirstRun
}
