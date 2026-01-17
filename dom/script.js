// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.childNodes)
// let b = document.body
// console.log("fisrt chile of b is ",b.firstChild)
// console.log("fisrt chile of b is ",b.firstElementChild)

// const chnagebodyRed = () => {
//     document.body.firstElementChild.style.background ="red"
// }
// chnagebodyRed()



// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// const appendAlert = (message, type) => {
//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     appendAlert('Nice, you triggered this alert message!', 'success')
//   })
// }

// let ctitle = document.getElementsByClassName("card-title")[0]
// ctitle.style.color ="red"


let ctitle=document.querySelectorAll('.card-title')
ctitle[0].style.color ="blue"
ctitle[1].style.color ="red"
ctitle[2].style.color ="green"















































