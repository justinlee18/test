function multi_array_sum(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
     if(Array.isArray(arr[i])) {
       sum += multi_array_sum(arr[i]);
     } else {
       sum += arr[i];
     }
    }
    return sum;
  }

  console.log(multi_array_sum([1,2,3,4,5]))