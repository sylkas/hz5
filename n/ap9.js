const axios = require('axios');

async function getUser(id) {
    const response = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
    const {name, address: { geo: {lat, lng}}} = response.data;
    return { name, lat, lng};
}

async function getWeather(lat, lng) {
    const response = await axios(`https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`);
    return response.data;
}


(async function(){
    try {
        const user = await getUser(2);
        console.log(user.name);
        const temp = await getWeather(user.lat, user.lng);
        console.log('temp: ' + temp.main.temp);

    } catch(error) {
        console.log(error.message);
    }
})();