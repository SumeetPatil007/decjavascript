// let promise = new Promise((resolve, reject) => {
//     alert("hi")
//     resolve(56)
    
// })


// console.log("hello")
// setTimeout(()=>{
//     console.log("hii in 2 sec")

// },2000)
// console.log("My name is john")
// console.log(promise)

let p = new Promise((resolve,reject)=>{
    console.log("promise pending")
    setTimeout(()=>{

        // console.log("i am a promise and i am resolve")
        resolve(true)
       
    },5000)
})


let p2 = new Promise((resolve,reject)=>{
    console.log("promise pending")
    setTimeout(()=>{

        // console.log("i am a promise and i am rejected")
        reject(new Error("i am an error"))
    },5000)
})
p.then((value)=>{
    console.log(value)
})
// p2.catch((error)=>{
//     console.log("some erroe in p2")
// })
p.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})
// console.log(p,p2)
// p1.then((value)=>{
//     console.log(value)
// })
















