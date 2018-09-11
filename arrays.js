// todosList ( a list is an array )
// brackets quotation marks and commas semicolon
// place to store todos
let todos = ['item 1', 'item 2', 'item 3'];
console.log(todos[0]);
console.log(todos[1]);
console.log(todos[2]);
//logging to the console
console.log(todos);
// adding text to todos and logging to the console
console.log('list of todos:', todos); // seperate by commas
// pushing'item 4' to the array
todos.push('item 4');
// logging new array
console.log(todos);
// pushing 'item 5' to array
todos.push('item 5')
// logging new array
console.log(todos);
// changing  a item in an array
todos[0] = 'item 1 updated'
// logging new array
console.log(todos);
// deleting updated item 1
todos.splice(0, 1)
console.log(todos);
// deleting item 3
todos.splice(1, 1)
console.log(todos);
