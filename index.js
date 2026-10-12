async function firstSixIncomplete(userId) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos")

  const result = await promise.json()

 const incompleteTasks = result.filter(element => !element.completed).slice(0, 6);

 console.log(incompleteTasks)
}

firstSixIncomplete(6);


// function sortHightoLow(numbers) {
//   return numbers.sort((a, b) => {
//     return b.price - a.price
// });
// }

// console.log(sortHightoLow([
//   {id: 1, price: 50},
//   {id: 2, price: 10},
//   {id: 3, price: 500},
//   {id: 4, price: 30}
// ])
// );

// function showRating(rating) {
//  let ratings = "";
//   for (let i = 0; i < Math.floor(rating); ++i) {
//     ratings = ratings + "*";
//    if (i !== Math.floor(rating) - 1) {
//     ratings = ratings + " "
//     }
//    }
//    if (!Number.isInteger(rating)){
//     ratings = ratings + " ."
//    }
//   return ratings
// }
// console.log(showRating(4.5))



// function convertToBoolean(arr) {
//   return arr.map(elem => !!elem)
// }

// console.log(convertToBoolean([500, 0, "Jeffro", "", []]))

// function getMax(arr) {
//   let max = arr[0]
//   for (let i = 1; i < arr.length; ++i){
//     if (arr[i] > max) {
//       max = arr[i]
//     }
//   }
//   return max;
// }
// console.log(getMax([400, 500, 300]));


// function isLoggedInAndSubscribed(loggedIn, subscription) {
//   return loggedIn === 'LOGGED_IN' || subscription === 'SUBSCRIPTION' 
// }
// console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIPTION'));