function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(arr, i);   // execute callback
    }
  }
}

function actionWhenFound(arr, i) {
  // console.log("Found him!");
   console.log(`Found ${arr[i]} at index ${i}!`)
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);