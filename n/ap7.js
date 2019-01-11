const axios = require('axios');

(async function(){
    try {
        const response = await axios('https://jsonplaceholder.typicode.com/users/2');
        console.log(response.data.name);
    } catch(error) {
        console.log(error.message);
    }
})();