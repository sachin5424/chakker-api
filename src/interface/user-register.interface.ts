interface userProfileInterface{
    userId:string,
    gender:string,
    companyName:string,
    application:string,
    status:string, mobileNumber?:Number
}


 
interface userInterface {
    username?:string;
    firstName?:string;
    lastName?:string;
    password:string;
    email:string;
}

interface userVerificationInterface {
    email:string;
    otp:String;
}



export {
    userProfileInterface, userInterface,userVerificationInterface
}