const axios = require('axios');

// axios('https://jsonplaceholder.typicode.com/users/2')
// .then(response => {
//     console.log(response.data.name);
// })
// .catch(error => {
//     console.log(error.message)
// })

(async function(){
        const response = await axios('https://jsonplaceholder.typicode.com/users/2');
        console.log(response.data.name);
})();