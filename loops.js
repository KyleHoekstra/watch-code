// FOR LOOP
// i = 0 // Initialization
// say "hi" if i<3 // Condition if this is true keep going. if not stop
// increase i by 1 // Final-expression happen each round. continue to run till condition is met.
// 0 'hi'
// 1 'hi'
// 2 'hi'
// 3 wouldn't run cause i<3
/*
// for loop
for ( let i = 0; i< 10; i++) {
  console.log('hey' );
}
// end loop
//for loop
for ( let i = 0; i < 3; i++) {
console.log(i); // console logging 'i' will display 'i' through each round of the loop
}
// end loop
*/

let testArray = ['item 1', 'item 2', 'item 3'];

// for loop
for (let i = 0; i < testArray.length; i++) {
  console.log(testArray[i]);
}
testArray.push('item 4')

// for loop
for (let i = 0; i < testArray.length; i++) {
  console.log('test array:', testArray[i]);
}
