export class Users{
    name: string;
    username: string;
    password: string;
    email: string;
    dob: Date;
    profilePic:string;
    constructor(name:string,username:string,password:string,email:string,dob:Date,profilePic:string){
        this.name=name;
        this.username=username;
        this.password=password;
        this.email=email;
        this.dob=dob,
        this.profilePic=profilePic
    }
}