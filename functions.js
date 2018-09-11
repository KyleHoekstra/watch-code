/*makeSandwhichWith________
  Get one slice of bread.
  Add ______.
  Put a slice of bread in top.


// function, each line ends with a semi colon
  function makeSandwhichWith(filling) { // filling is the var (parameters)
    Get one slice of bread;
    Add filling;
    Put a slice of bread in top;
  }
  // this will run the function up above
  makeSandwhichWith(ham) // (arguments)*/
// function
function sayHiTo(person) { // (in) (paramaters)
  console.log('hi', person);
}
sayHiTo('gordon') // (in) (arguments)
sayHiTo('kyle') // will log (hi persons name) hi kyle
// changing names of todos
todos[0]='item 1'
todos[1]='item 2'
todos[2]='item 3'
// logging todos
console.log(todos);
// function to display todos
function displayTodo() { // name of function is displayTodos
  console.log('My todos:', todos);
}
displayTodo()// calling the displayTodo functions
// output will be My todos: todos

// function to add todos & adding a function inside a function
function addTodo() {
  todos.push('new todo');// only going to add 'new todo'
  displayTodo();// added the display function to the push function
}
// changing the add todo function so the names of the 'new todo can be different'
function addTodo(todo) { // customizing functions using the functiions (paramaters)
  todos.push(todo); // creating a new var (tod) inside the (parameters)
  displayTodo(); // put the new var (todo) inside the argument
}
// adding a todo
addTodo('hello there')// when adding a new todo you have to give it a new name
addTodo('help me')

// function to change todos names
// todos[position (index #)] = 'new name'  // creating 2 new var parameters (position and newValue)
function changeTodo(position, newValue) { // position is the index number in the array we want to change
  //todos[] = 'new name'
  todos[position] = newValue;
  displayTodo();
}
changeTodo(3, 'item 4')//(position, newValue)
changeTodo(4, 'item 5')

// function for deleting todos
function deleteTodo(position) { // parameter is the position to delete
  todos.splice(position, 1)// put in the parameter, than how many to delete
  displayTodo();
}
deleteTodo(0)// index # of the position to delete
deleteTodo(2)

// functions and variables
let myName = 'Kyle';
function sayName() {
  console.log('my name is', myName);
}
sayName()

function sayName() {
  let secret = 'my secret';
  console.log(myName);// inside of a function you can pull var in
}
sayName();

console.log(secret); // outside of a function you can't pull var (not defined)
