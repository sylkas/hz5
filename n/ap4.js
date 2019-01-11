async function add(a,b){
    const result = a + b;
    if (result % 2 === 0){
        throw new Error('liczba parzysta');
    }
    return result;
} 



add(4,4)
.then(result => {
    console.log(result)
})
.catch(error => {
    console.log(error.message)
})