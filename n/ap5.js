async function add(a,b){
    const result = a + b;
    if (result % 2 === 0){
        throw new Error('liczba parzysta');
    }
    return result;
} 


(async function(){

    try {
        const result = await add(4,5);
        console.log(result);
    } catch(error) {
        console.log(error.message);
    }

    try {
        const result = await add(4,4);
        console.log(result);
    } catch(error) {
        console.log(error.message);
    }
})();
