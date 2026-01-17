// let a = document.getElementsByClassName("container")[0]
// a.onclick=()=>{
//     let b = document.getElementsByClassName("container")[0]
//     b.innerHTML = "hello world"

// }

// let x = ((e)=>{
//     alert("hello1")
//     console.log(e)
// })
// let y = (()=>{
//     alert("hello2")
// })
// btn.addEventListener('click',x)
// btn.addEventListener('click',y)


// let a = prompt("what is your fav no ");
// if(a == "2" ){
//     btn.removeEventListener('click',y)
// }



// // pratice qu 8
// const fetchContent = async(url)=>{
//     con = await fetch(url);
//     let a = await con.json()
//     return a ;
// }
// setInterval(async()=>{
//     let url = "https://jsonplaceholder.typicode.com/todos/1"
//     console.log(await fetchContent(url) )
// },3000)
setInterval(() => {
   document.querySelector("#bulb").classList.toggle("bulb")
}, 1000);