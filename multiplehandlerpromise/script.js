// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(56)
//     }, 3000);
// })
// p1.then((value)=>{
//     console.log(value,"congo")
// })
// p1.then(()=>{
//     console.log("uhdk")
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(5)
//         },1000)
//     })
// }).then((valeu)=>{
//     console.log(valeu)
// })