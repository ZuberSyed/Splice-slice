function frankenSplice(arr1, arr2, n) {
  var copiedItems= arr2.slice();
   copiedItems.splice(n,0,...arr1);
  return copiedItems;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
