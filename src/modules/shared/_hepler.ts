import cryptoRandomString from 'crypto-random-string';



let generateRandomString = (string:String,length:any) =>{
    const value  = Math.random().toString(36).substr(2,  length);
    if(value ===string){
        generateRandomString(string,length);
    }
    return value;

}


export {
    generateRandomString
}