let p1= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("value1")
    },1000);
    
})
let p2= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("value2")
        //reject(new Error("Error"))
    },2000);
    
})
let p3= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("valuye3")
    },3000);
    
});

// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })
// p3.then((value)=>{
//     console.log(value)
// })

// let Promise_all =Promise.all([p1,p2,p3]) 
// Promise_all.then((value)=>{
//     console.log(value)
// })
// let Promise_all =Promise.allSettled([p1,p2,p3]) 
// Promise_all.then((value)=>{
//     console.log(value)
// })


// let Promise_all =Promise.race([p1,p2,p3]) 
// Promise_all.then((value)=>{
//     console.log(value)
// })

let Promise_all =Promise.any([p1,p2,p3]) 
Promise_all.then((value)=>{
    console.log(value)
})







