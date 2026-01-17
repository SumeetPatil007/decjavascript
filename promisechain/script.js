// let p1 = new Promise((resolve , reject )=>{
//     setTimeout(()=>{
//         console.log("resolve afte 2 sec ")
//         resolve(56)
//     },2000)


// })


// p1.then((value)=>{
//     console.log(value)
//     let p2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//              resolve ("promise 2")
//         },2000)       
//     })
//     return p2

// }).then((value)=>{
//     console.log("we are done")
//     return 2 
// }).then((value)=>{
//     console.log("now we are pakka done ",value)
// })
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("work after 2 sec")
        resolve(56)
    },2000)
})

p1.then((value)=>{
    console.log(value)
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{ resolve("p2")},2000)
       
    })
    
}).then((value)=>{
    console.log(value,"we are done")
    return 2 
}).then((value)=>{
    console.log(value,"donbe")
})
















