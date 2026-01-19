// class Rail{
//     submit(){
//         alert("form submitted")
//     }
//     cancel(){
//         alert("this form is cancle")
//     }
// }
// let harry = new Rail()
// let roshan = new Rail()
// harry.submit()
// roshan.submit()
// roshan.cancel()

class form{
    constructor(name,no){
        this.name=name
        this.no=no
    }
    submit(){
        alert (this.name + "your form is sumbit train no is "+this.no)

    }
    cancle(){
        alert(this.name +"train no cancle"+this.no)
    }
}

let harryForm = new form("sumeet",909000)
let rohanform = new form("rohan",99999)
harryForm.submit()
harryForm.cancle()