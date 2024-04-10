// <---`Hamburger Menu` Logic Starts--->
const hamburger = document.querySelector('.hamburger')
const ul = document.querySelector('.header ul')
const peerlist = document.querySelector('.foooter-grid img')

hamburger.addEventListener('click', ()=> {
  ul.classList.toggle('ham_active')

  let ham_child = hamburger.firstElementChild
  if(ul.classList.contains('ham_active')) {
    ham_child.classList.replace('fa-bars', 'fa-xmark')
    // ham_child.src = "./xmark-solid.svg"; // Change the source to the xmark icon
  } else {
    ham_child.classList.replace('fa-xmark', 'fa-bars')
    // ham_child.src = "./bars-solid.svg"; // Change the source back to the bars icon
  }
})
// <---`Hamburger Menu` Logic ends--->

// <---`Light/Night Mode` Logic Starts--->
/*
const icon = document.querySelector('.fa-solid')

icon.addEventListener('click', ()=> {
  document.body.classList.toggle('dark-mode')
  if(document.body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun')
    peerlist.style.filter = 'invert(100%)' //Dark mode activation for Peerlist logo
  } else {
    icon.classList.replace('fa-sun', 'fa-moon')
    peerlist.style.filter = 'invert(0%)' //Light mode activation for Peerlist logo
  }
})
*/
// <---`Light/Night Mode` Logic ends--->






