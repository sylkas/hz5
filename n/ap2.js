

function div(a,b){
    if(b === 0){
        throw new Error('divide by zero');
    }
    return a / b;
};



try {
    const result = div(3,0);
    console.log(result);
    
} catch(error){
    console.log(error);
}