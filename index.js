// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// const url = 'https://mate-api.herokuapp.com/goods'

// const options = {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json; charset=utf-8'
//   }
// };

// fetch(url, options)
//   .then(response => {
//     console.log(response.status);
//     console.log(response.headers.get('Content-type'));
//     console.log(response);

//     return response.json();
//   })
//   .then(result => {
//     console.log(result.data)
//   })




// const BASE_URL = 'https://mate-api.herokuapp.com'
// const url = `${BASE_URL}/goods`

// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       return Promise.reject(
//         `${response.status} - ${response.statusText}`
//       )
//     }

//     if (!response.headers.get('Content-type').includes('application/json')) {
//       return 'Content-type is not supported';
//     }

//     return response.json();
//   })
//   .then(result => {
//     console.log('Success', result);
//   })
//   .catch(error => {
//     console.warn('Error', error);
//   })



// const BASE_URL = 'https://jsonplaceholder.typicode.com'
// const BASE_URL1 = 'https://mate-api.herokuapp.com'
// // const url = `${BASE_URL}/goods`
// const url = `${BASE_URL}/todos`

// const getTodos = () => {
//   return fetch(`${BASE_URL}/todos`)
//     .then (response => {
//       if (!response.ok) {
//         throw `${response.status} - ${response.statusText}`
//       }

//       return response.json();
//     }) 
// }

// const getUsers = () => {
//   return fetch(`${BASE_URL1}/users`)
//     .then (response => {
//       if (!response.ok) {
//         throw `${response.status} - ${response.statusText}`
//       }

//       return response.json();
//     }) 
//     .then(result => result.data)
// }


// getTodos()
//   .then(print)
//   .catch(logError)

// getUsers()
//   .then(print)
//   .catch(logError)

// function print(value) {
//   console.log(value)
// }

// function logError(error) {
//   console.warn('Error occured: ', error)
// }




// const BASE_URL = 'https://jsonplaceholder.typicode.com'
// // const BASE_URL = 'https://mate-api.herokuapp.com'
// // const url = `${BASE_URL}/goods`
// // const url = `${BASE_URL}/todos`

// const request = (url) => {
//     return fetch(`${BASE_URL}${url}`)
//     .then (response => {
//       if (!response.ok) {
//         throw `${response.status} - ${response.statusText}`
//       }

//       return response.json();
//     }) 
//     // .then(result => result.data)
// }

// const getTodos = () => {
//   return request('/todos')
// }

// const getUsers = () => {
//   return request('/users')
// }

// const getUser = (userId) => {
//   return request(`/users/${userId}`)
// }


// getTodos()
//   .then(print)
//   .catch(logError)

// getUsers()
//   .then(print)
//   .catch(logError)

// getUser(1)
//   .then(print)
//   .catch(logError)

// function print(value) {
//   console.log(value)
// }

// function logError(error) {
//   console.warn('Error occured: ', error)
// }




// // const BASE_URL = 'https://jsonplaceholder.typicode.com'
// const BASE_URL = 'https://mate-api.herokuapp.com'
// // const url = `${BASE_URL}/goods`
// // const url = `${BASE_URL}/todos`

// const request = (url) => {
//     return fetch(`${BASE_URL}${url}`)
//     .then (response => {
//       if (!response.ok) {
//         throw `${response.status} - ${response.statusText}`
//       }

//       return response.json();
//     }) 
//     // .then(result => result.data)
// }

// const getTodos = () => {
//   return request('/todos')
// }

// const getTodo = (todoId) => {
//   return request(`/users/${todoId}`)
// }

// const createTodo = (title) => {
//   return fetch(`${BASE_URL}/todos`, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json; charset=utf-8'
//     },
//     body: JSON.stringify({
//       userId: 1,
//       completed: false,
//       title,
//     }),
//   })
//     .then(response => response.json())
//     .then(json => console.log(json))
// }

// createTodo('werwerwer')
//   .then(print)
//   .catch(logError)

// getTodo(2795)
//   .then(print)
//   .catch(logError)

// function print(value) {
//   console.log(value)
// }

// function logError(error) {
//   console.warn('Error occured: ', error)
// }



// // const BASE_URL = 'https://jsonplaceholder.typicode.com'
// const BASE_URL = 'https://mate-api.herokuapp.com'

// const request = (url) => {
//     return fetch(`${BASE_URL}${url}`)
//     .then (response => {
//       if (!response.ok) {
//         throw `${response.status} - ${response.statusText}`
//       }

//       return response.json();
//     }) 
//     .then(result => result.data)
// }

// const createTodo = (title) => {
//   return fetch(`${BASE_URL}/todos`, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json; charset=utf-8'
//     },
//     body: JSON.stringify({
//       userId: 1,
//       completed: false,
//       title,
//     }),
//   })
//     .then(response => response.json())
// }

// const getTodos = () => request('/todos');
// const getTodo = (todoId) => request(`/todos/${todoId}`);

// createTodo('werwernbjkbwer')
//   .then(print)
//   .catch(logError)

// getTodo(2795)
//   .then(print)
//   .catch(logError)

// function print(value) {
//   console.log(value)
// }

// function logError(error) {
//   console.warn('Error occured: ', error)
// }


// // const BASE_URL = 'https://jsonplaceholder.typicode.com'
// const BASE_URL = 'https://mate-api.herokuapp.com'

// const request = (url, options) => {
//     return fetch(`${BASE_URL}${url}`, options )
//     .then (response => {
//       if (!response.ok) {
//         throw `${response.status} - ${response.statusText}`
//       }

//       return response.json();
//     }) 
//     .then(result => result.data)
// }

// const post = (url, data) => {
//   return request(url, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json; charset=utf-8'
//     },
//     body: JSON.stringify(data),
//   })
// }

// const createTodo = (title) => {
//   return post('/todos', {
//       userId: 1,
//       completed: false,
//       title,
//     })
// }

// const getTodos = () => request('/todos');
// const getTodo = (todoId) => request(`/todos/${todoId}`);

// // createTodo('werwernbjkbwer')
// //   .then(print)
// //   .catch(logError)

// getTodo(2795)
//   .then(print)
//   .catch(logError)

// function print(value) {
//   console.log(value)
// }

// function logError(error) {
//   console.warn('Error occured: ', error)
// }



// const BASE_URL = 'https://jsonplaceholder.typicode.com'
const BASE_URL = 'https://mate-api.herokuapp.com'

const request = (url, options) => {
    return fetch(`${BASE_URL}${url}`, options )
    .then (response => {
      if (!response.ok) {
        throw `${response.status} - ${response.statusText}`
      }

      return response.json();
    }) 
    .then(result => result.data)
}

const post = (url, data) => {
  return request(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data),
  })
}

const patch = (url, data) => {
  return request(url, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data),
  })
}

const remove = (url) => {
  return request(url, {method: 'DELETE'})
}

const createTodo = (title) => {
  return post('/todos', {
      userId: 1,
      completed: false,
      title,
    })
}

const getTodos = () => request('/todos');
const getTodo = (todoId) => request(`/todos/${todoId}`);
const updateTodo = (todoId, title) => {
  return patch(`/todos/${todoId}`, {title});
}  
const deleteTodo = (todoId) => {
  return remove(`/todos/${todoId}`);
}  

// createTodo('werwernbjkbwer')
//   .then(print)
//   .catch(logError)

// getTodo(2795)
//   .then(print)
//   .catch(logError)

// updateTodo(2833, 'ewrwerwerwerwer')
//   .then(print)
//   .catch(logError)

// deleteTodo(2833)
//   .then(print)
//   .catch(logError)

function print(value) {
  console.log(value)
}

function logError(error) {
  console.warn('Error occured: ', error)
}