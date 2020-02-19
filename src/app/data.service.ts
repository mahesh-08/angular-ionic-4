import { User } from "../classes/User";
export class DataService {
  userList: User []= [
    {
      name: "mahesh",
      password: "mahesh08"
    },
    {
      name: "komal",
      password: "koka"
    },
    {
      name: "suyog",
      password: "the_su"
    }
  ];


  getUser(loguser:User){
    for(let i=0;i<this.userList.length;i++){
      if(this.userList[i].name==loguser.name&&this.userList[i].password==loguser.password)
      return this.userList[i];
    }
    //return this.userList.filter(user=>(user.name==loguser.name))


  //arr.filter(employee => (employee.designation==="FullStack"))


  }

}
