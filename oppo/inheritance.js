class Employee{
    constructor(){
        

    }
    login(){
        console.log("employee has login")
    }
    logout(){
        console.log("logout")
    }
    requestleave(leave){
        console.log(`employee has request ${leave}`)
    }
}
class programer extends Employee{
    reuestcofee(x){
        console.lof(`employe resqst ${x} coffeee`)
    }
    requestleave(leave){
        super.requestleave(4)
        console.log(`employee has request ${leave + 1}`)
    }
}
let e = new programer()
e.login()
e.logout()
e.requestleave(3)
