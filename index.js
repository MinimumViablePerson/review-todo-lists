// - Create an alert that lists all users, with their ids, names and what city they're from ✅
function listUsers() {
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
}

// - Prompt the user for a user id and then: ✅
function getUserId() {
  let userId = Number(prompt('Enter your user id'))
  return userId
}

//    - to find the user with this id ✅
function findUser() {
  // find the user with this id
  let theUser = null

  for (let user of users) {
    if (user.id === userId) {
      theUser = user
      break
    }
  }

  return theUser
}

//    - to find the todos with this user id ✅
function findTodos() {
  // // find the todos with this user id
  let theTodos = []

  for (let todo of todos) {
    if (todo.userId === userId) {
      theTodos.push(todo)
    }
  }

  return theTodos
}

//   -  alert the username and the todo titles ✅
function showUserTodos() {
  // alert the username and the todo titles
  let finalMessage = ''

  finalMessage += `Hello ${user.username}:\n\n`

  for (let todo of userTodos) {
    finalMessage += `- ${todo.title}\n`
  }

  alert(finalMessage)
}

listUsers()
let userId = getUserId()
let user = findUser()
let userTodos = findTodos()
showUserTodos()
