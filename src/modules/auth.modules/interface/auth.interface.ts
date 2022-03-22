interface  ResgisterUserInterFace {
   username?:string;
   firstName?:string;
   lastName?:string;
   password:string;
   email:string;
}


interface AdminLogininterFace {
    email:string;
    password:string;
}


interface JwtTokenInterFace {
   _id:string;
   email?:string;
   phone?:string;
   username?:string;
}



export {
    ResgisterUserInterFace,
    AdminLogininterFace,
    JwtTokenInterFace
}