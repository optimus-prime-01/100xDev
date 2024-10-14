
//Arrow Function
// function sum(a,b){
//     return a+b;
// }
//OR
const sum=(a,b)=>{
    return a+b;
}
// app.get("/",(req,res)=>{

// })
// //OR
// app.get("/",function(req,res){

// })
const ans=sum(2,3);
console.log(ans);


//MAP
const input=[1,2,3,4,5];
function transform(i){
    return i*2;
}
const res=input.map(transform);
console.log(res);

//Filter
const arr=[1,2,3,4,5];
function filteringlogic(n){
    if(n%2==0) return true;
    return false;
}
const filtered=arr.filter(filteringlogic);
console.log(filtered);
