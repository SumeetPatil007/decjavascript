async function harry(){
    let delhiweather = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("27 cel")
        },2000);
    })
    let benglore = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("7 cel")
        },3000);
    })
    // delhiweather.then(alert)
    // benglore.then(alert)
    console.log("fetch delhi ")
    let delhi = await delhiweather
    console.log("fetch delhi "+delhi)
    console.log("fetch bang")
    let bang  = await benglore
    console.log("fetch delhi "+ bang)
    return[delhi, bang]
}

let a =harry()
a.then((vale)=>{
    console.log(vale)
})















// async function harry(){
//     return 5
// }
// harry().then((x)=>{
//     alert(x)
// })