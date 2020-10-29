function isFirstRun () {
  return window.localStorage.getItem('countdownTimerTarget') === null
}

export {
  isFirstRun
}
