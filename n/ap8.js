const axios = require('axios');

async function getUsers(id) {
    const response = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = response.data;
    return user.name;
};

(async function(){
    try {
        const userNames = [2,3,5,7,8,10].map(id => getUsers(id));
        const users = await Promise.all(userNames);
        console.log(users);

    } catch(error) {
        console.log(error.message);
    }
})();