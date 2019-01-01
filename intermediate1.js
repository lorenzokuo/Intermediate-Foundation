// Part 1
// Sigma - Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function sigma(num){
	let sum=0;
	for(var i=0; i<=num;i++){
		sum+=i;
	}
	return sum;
}
//given
console.log(sigma(3));
console.log(sigma(5));

// Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
function factorial(num){
	let mul=1;
	for(var i=1; i<=num;i++){
		mul*=i;
	}
	return mul;
}
//given
console.log(factorial(3));
console.log(factorial(5));

// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.
// fibonacci(0) = 0 (given), 
// fibonacci(1) = 1 (given), 
// fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), 
// fibonacci(3) = 2 (fib(1) + fib(2), or 1+1), 
// fibonacci(4) = 3 (1+2), 
// fibonacci(5) = 5 (2+3), 
// fibonacci(6) = 8 (3+5), 
// fibonacci(7) = 13 (5+8)

//recursion
// function fibonacci(num){
// 	var sum=0;
//   if(num<2){
//     sum=num;
//   }
// 	else {
//     sum=fibonacci(num-1)+fibonacci(num-2);
//   }
// 	return sum;
// }

function fibonacci(num){
	var arr=[0,1,];
	let sum=0;
	if(num<2){
		return num;
	} else {
    for(var i=2;i<=num;i++){
      sum=arr[i-1]+arr[i-2];
      arr.push(sum);
    }
  }
	return arr[num];
}

//given
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));


// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
function secToLast(arr){
	if (arr.length<2){
		return null;
	}
	return arr[arr.length-2];
}
//given
console.log(secToLast([42, true, 4, "Liam", 7]));

// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function nthToLast(arr,y){
	if(arr.length<y){
		return null;
	}
	return arr[arr.length-y];
}
//given
console.log(nthToLast([5,2,3,6,4,9,7],3));

// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
function secLar(arr){
  let firLar = 0;
  let secLar = 0;
  for(var i=0; i<arr.length;i++){
    if(firLar<arr[i]){
      secLar=firLar;
      firLar=arr[i];
    } else if (secLar<arr[i]){
      secLar=arr[i];
    }
  }
  return secLar;
}
	//given
console.log(secLar([42,1,4,3.14,7]));


// Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function douTrou(arr){
	let newArr=[];
	for(var i=0;i<arr.length;i++){
		newArr.push(arr[i]);
		newArr.push(arr[i]);
	}
	return newArr;
}

//given
console.log(douTrou([4, "Ulysses", 42, false]));


// Part 2
// Create a function Fib(n) where it returns the nth Fibonacci number.  Use recursion for this.
function Fib(n){
	if(n==0||n==1){
		return n;
	}
	return Fib(n-1)+Fib(n-2);
}



















