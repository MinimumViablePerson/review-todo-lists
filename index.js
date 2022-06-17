// - Create an alert that lists all users, with their ids, names and what city they're from ✅
// - Prompt the user for a user id and then: ✅
// - Display an alert with the username and all the todos titles that belong to that user
//    - to find the user with this id ✅
//    - to find the todos with this user id ✅
//   -  alert the username and the todo titles

let greeting = ''

for (let user of users) {
  // getting the name
  let name = user.name
  // getting the id
  let id = user.id
  // getting the city
  let city = user.address.city

  greeting += `Id: ${id} Name: ${name} City: ${city}\n\n`
}

alert(greeting)

let userId = Number(prompt('Enter your user id'))

// find the user with this id
let theUser = null

for (let user of users) {
  if (user.id === userId) {
    theUser = user
    break
  }
}

// // find the todos with this user id
let theTodos = []

for (let todo of todos) {
  if (todo.userId === userId) {
    theTodos.push(todo)
  }
}

// alert the username and the todo titles
let finalMessage = ''

finalMessage += `Hello ${theUser.username}:\n\n`

for (let todo of theTodos) {
  finalMessage += `- ${todo.title}\n`
}

alert(finalMessage)
