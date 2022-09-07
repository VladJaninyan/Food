const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest (method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response);
            }
        };
        
        xhr.onerror = () => {
            reject(xhr.response);
        };
        xhr.send(JSON.stringify(body));
    });
}


// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(er => console.log(er));

const body = {
    name: 'Vlad',
    age: 26
};

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(er => console.log(er));


//************************async function****************************/

function func() {
    return new Promise(function(resolve, reject) {
        // reject(new Error('error'));
        resolve(10);
    });
}

async function func2() {
    try {
        const r = await func();
        return r + 4;
    } catch(error) {
        return 99;
    }

    return r + 4;
}

func2().then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
}); 

const delay = ms => {
    return new Promise(r => setTimeout(() => r(),ms))
}

// delay(2000).then(() => console.log('2 sec'));


const url = 'https://jsonplaceholder.typicode.com/todos';

// function fetchToDos() {
//     console.log('fetchToDo started');
//     return delay(2000)
//         .then(() => {
//           return fetch(url)
//     })
//     .then(response => response.json())
// }

// fetchToDos()
//     .then(data => {
//         console.log('data ' + data);
//     })
//     .catch(e =>console.error(e));

async function fetchAsyncTodos () {
    console.log('start');
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('data', data);
    } catch (e) {
        console.error(e);
    } finally() {
        console.log('end');
    }

}

fetchAsyncTodos().then()    