class form{
    constructor(name,no,add){
        this.name=name
        this.no=no
        this.add=add
    }
    submit(){
        alert (this.name + "your form is sumbit train no is "+this.no)

    }
    cancle(){
        alert(this.name +"train no cancle"+this.no)
        this.no = 0
    }
}

let harryForm = new form("sumeet",909000,"ttu")
let rohanform = new form("rohan",99999)
harryForm.submit()
harryForm.cancle()