const projects = [
  {
    title: 'Digital Clock Default Screen',
    discription: 'A simple Digital Clock Default Screen Chrome Extension made by HTML, CSS, JavaScript.',
    liveLink: 'https://chromewebstore.google.com/detail/digital-clock-screen/cclnngjodnddloggkbfajcicacgfdnmj',
    codeLink: 'https://github.com/kumarshivesh/chrome-extension/tree/master/digital-clock',
    image: 'https://raw.githubusercontent.com/kumarshivesh/chrome-extension/master/digital-clock/digital-clock-default-screen.jpeg',
  },
];

const cards = document.querySelector('.cards');

function createCard(title, description, liveLink, codeLink, image) {
  const li = document.createElement('li');
  li.classList.add('cards-item');
  const div1 = document.createElement('div');
  div1.classList.add('card');

  const img = document.createElement('img');
  img.classList.add('card-image');
  img.src = image;

  const div0 = document.createElement('div');
  div0.classList.add('card-content');

  const div = document.createElement('div');
  div.classList.add('card-title');
  div.innerHTML = title;
  div0.appendChild(div);

  const p = document.createElement('p');
  p.classList.add('card-text');
  p.innerHTML = description;
  div0.appendChild(p);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('card-buttons-container');

  const aLive = document.createElement('a');
  // a.classList.add('card__btn');
  // a.classList.add('btn--block');
  // a.classList.add('btn');
  aLive.classList.add('card-btn', 'btn-block', 'btn'); // Add classes in one line
  // a.href = link;
  // a.target = '_blank';
  // a.innerHTML = 'LIVE';
  Object.assign(aLive, { href: liveLink, target: '_blank', innerHTML: 'LIVE' }); // Set attributes in one line
  // div0.appendChild(aLive);
  buttonsContainer.appendChild(aLive);

  const aCode = document.createElement('a');
  // a.classList.add('card__btn');
  // a.classList.add('btn--block');
  // a.classList.add('btn');
  aCode.classList.add('card-btn', 'btn-block', 'btn'); // Add classes in one line
  // a.href = link;
  // a.target = '_blank';
  // a.innerHTML = 'CODE';
  Object.assign(aCode, { href: codeLink, target: '_blank', innerHTML: 'CODE' }); // Set attributes in one line
  // div0.appendChild(aCode);
  buttonsContainer.appendChild(aCode);

  div0.appendChild(buttonsContainer);

  div1.appendChild(img);
  div1.appendChild(div0);
  li.appendChild(div1);
  cards.appendChild(li);
}

// Function to filter and display projects based on search input
function searchGames() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();

  // Clear existing cards
  cards.innerHTML = '';

  // Filter and display cards based on search input
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchInput) || 
    project.discription.toLowerCase().includes(searchInput)
  );

  filteredProjects.map(project => {
    createCard(project.title, project.discription, project.liveLink, project.codeLink, project.image);
  });
}
projects.map(e => {
  createCard(e.title, e.discription, e.liveLink, e.codeLink, e.image);
});
/*
// <---------- Scroll to top button --------->
document.addEventListener('DOMContentLoaded', function () {
  var scrollButton = document.getElementById('top');

  // Show or hide the scroll button based on the scroll position
  window.onscroll = function () {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  };

  // Scroll to the top when the button is clicked
  scrollButton.addEventListener('click', function () {
    var projectsSection = document.getElementById('Bottom');
    projectsSection.scrollIntoView({behavior: 'smooth'});
  });
});
*/

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
const icon = document.querySelector('.fa-solid')

icon.addEventListener('click', ()=> {
  document.body.classList.toggle('dark-mode')
  if(document.body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun')
    // peerlist.style.filter = 'invert(100%)' //Dark mode activation for Peerlist logo
  } else {
    icon.classList.replace('fa-sun', 'fa-moon')
    // peerlist.style.filter = 'invert(0%)' //Light mode activation for Peerlist logo
  }
})
// <---`Light/Night Mode` Logic ends--->
