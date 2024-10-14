//Callback functions:- passing a function as an argument in another function.
function square(n){
    let val=n*n;
    return val;
}
function find(a,b,fn){
    let val1=fn(a);
    let val2=fn(b);
    return val1+val2;
}

console.log(find(1,2,square));