interface User{
    name:string,
    email:string,
    password:string
}
interface Admin extends User{
    isAdmin:boolean
}

function func(obj:User){
    console.log(obj);
}
func({name:"Raushan",email:"Raushan@gmail.com",password:"1234"})

function func2(obj:Admin){
    console.log(obj)
}

func2({name:"Raushan",email:"Raushan@gmail.com",password:"1234",isAdmin:true})

type Student = string | User;

type Teacher = Student | number; 

let Raushan : Student = "Raushan";

let Raj : Teacher = 14;

console.log(Raushan);