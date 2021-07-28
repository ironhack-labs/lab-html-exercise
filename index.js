
function divisibleBy(arr) {
    for (let i = 0 ; i < arr.length; i++) {
        var num = arr[i];
        if (num === 0) {
          continue;
        }
        if (num % 15 === 0) {
            console.log('fizzbuzz', num);
        } else if (num % 5 === 0){
            console.log('buzz', num);
        } else if (num % 3 === 0) {
            console.log('fizz', num);
        }
    }
}

let numbers = [2, 21, 0, 77, 30, 20];

divisibleBy(numbers);



//si le num est divible par 3 = console.log fizz, si num / 5 = console.log buzz, et si num / 15 console.log fizzbuzz