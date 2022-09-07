const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest (method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if(response.ok) {
            return response.json();
        } 

        return response.json().then(error => {
            const e = new Error('smth want wrong')
            e.data =  error
            throw e
        })
    })
}


// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

const body = {
    name: 'Vlad',
    age: 22
};

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(er => console.log(er));


// let isPalindrome = function(head) {
//     let start = 0;
//     let end = head.length-1;
//     for (let i = 0; i < head.length; i++) {
//         if(head[start] === head[end]) {
//             start = start + 1;
//             end = end - 1;
//         } else {
//             return false;
//         }
//     }
//     return true;
// };

// console.log(isPalindrome([1, 2]));

// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = 1; j < nums.length; j++) {
//           if (i === j) continue;
//           if (nums[i] + nums[j] === target) {
//               return [i, j]
//           }
//       }
//     }  
//   };
