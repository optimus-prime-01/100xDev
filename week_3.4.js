const jwt=require("jsonwebtoken");
const jwtpassword="secret";
const zod=require("zod");
const emailschema=zod.string().email();
const passwordschema=zod.string().min(6);
function signjwt(username,password){
    const usernameresponse=emailschema.safeParse(username);
    const passwordresponse=passwordschema.safeParse(password);
    if(!usernameresponse.success||!passwordresponse.success){
        return null;
    }
    const signature=jwt.sign({username},jwtpassword);
    return signature;
}
const token=signjwt("anmol@gmail.com","12345678");
console.log(token);
function verifyjwt(token){
    let ans=true;
    try{
        jwt.verify(token,password);
    }catch(e){
        ans=false;
    }
    return ans;
}
function decodejwt(token){
    const decoded=jwt.decode(token);
    if(decoded){
        return true;
    }else{
        return false;
    }
}
const ans1=verifyjwt(token);
const ans2=decodejwt(token);
console.log(ans1);
console.log(ans2);
