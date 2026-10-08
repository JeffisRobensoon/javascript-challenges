function isLoggedInAndSubscribed(loggedIn, subscription) {
  return loggedIn === 'LOGGED_IN' || subscription === 'SUBSCRIPTION' 
}
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIPTION'));