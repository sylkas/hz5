const {readFileSync} = require('fs');

try {
    const data = readFileSync('user.json');
    try {
        const user = JSON.parse(data);
        console.log(user);
    } catch(error){
        console.log('blad parsowania');
    }

} catch(error) {
    console.log('blad odczytu');
}