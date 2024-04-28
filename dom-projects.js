const projects = [
  {
    title: 'Digital Clock',
    discription: 'A simple Digital Clock made by HTML, CSS, JavaScript.',
    liveLink: 'https://kumarshivesh.github.io/js-basic-projects/digital-clock-2/index.html',
    codeLink: 'https://github.com/kumarshivesh/js-basic-projects/tree/master/digital-clock-2',
    image: 'https://raw.githubusercontent.com/kumarshivesh/js-basic-projects/master/digital-clock-2/digital-clock.png',
  },
  {
    title: 'Analog Clock',
    discription: 'A simple Analog Clock made by HTML, CSS, JavaScript.',
    liveLink: 'https://kumarshivesh.github.io/js-basic-projects/analog-clock/index.html',
    codeLink: 'https://github.com/kumarshivesh/js-basic-projects/tree/master/analog-clock',
    image: 'https://raw.githubusercontent.com/kumarshivesh/js-basic-projects/master/analog-clock/analog-clock.png',
  },
  {
    title: 'Stopwatch',
    discription:
      'A Stopwatch with functionality of Stop, Start, and Reset.',
    liveLink: 'https://kumarshivesh.github.io/js-basic-projects/stopwatch/index.html',
    codeLink: 'https://github.com/kumarshivesh/js-basic-projects/tree/master/stopwatch',
    image: 'https://raw.githubusercontent.com/kumarshivesh/js-basic-projects/master/stopwatch/stopwatch.png',
  },
  {
    title: 'Table Practitioner',
    discription:
      'A web app that let kids pratice multiplication table.',
    liveLink: 'https://kumarshivesh.github.io/js-basic-projects/table-practitioner/index.html',
    codeLink: 'https://github.com/kumarshivesh/js-basic-projects/tree/master/table-practitioner',
    image: 'https://raw.githubusercontent.com/kumarshivesh/js-basic-projects/master/table-practitioner/table-practitioner.jpg',
  },
  {
    title: 'Birthday Message Generator',
    discription:
      'A web app that display birthday message.',
    liveLink: 'https://kumarshivesh.github.io/js-basic-projects/wish-hbd/index.html',
    codeLink: 'https://github.com/kumarshivesh/js-basic-projects/tree/master/wish-hbd',
    image: 'https://raw.githubusercontent.com/kumarshivesh/js-basic-projects/master/wish-hbd/wish-hbd.png',
  },
  {
    title: 'Calculator',
    discription: 'A standard Calculator which can perform five basic mathematical operations namely addition, subtraction, multiplication, division, and modulo.',
    liveLink: 'https://kumarshivesh.github.io/js-basic-projects/calculator/index.html',
    codeLink: 'https://github.com/kumarshivesh/js-basic-projects/tree/master/calculator',
    image: 'https://raw.githubusercontent.com/kumarshivesh/js-basic-projects/master/calculator/calculator.png',
  },
  {
    title: 'Temperature Converter',
    discription:
      'A simple Temperature Converter which converts the temperature from Farenheit to Celcius and vice-versa.',
    liveLink: 'https://kumarshivesh.github.io/js-basic-projects/temperature-converter/index.html',
    codeLink: 'https://github.com/kumarshivesh/js-basic-projects/tree/master/temperature-converter',
    image: 'https://raw.githubusercontent.com/kumarshivesh/js-basic-projects/master/temperature-converter/temperature-converter.png',
  },
  {
    title: 'BMI Calculator',
    discription:
      'A standard BMI Calculator which calculates Body Mass Index (BMI) and tells under which category the computed BMI falls by taking height (in cm) and weight (in kg) as input.',
    liveLink: 'https://kumarshivesh.github.io/js-basic-projects/bmi-calculator/index.html',
    codeLink: 'https://github.com/kumarshivesh/js-basic-projects/tree/master/bmi-calculator',
    image: 'https://raw.githubusercontent.com/kumarshivesh/js-basic-projects/master/bmi-calculator/bmi-calculator.png',
  },
  {
    title: 'Guess my Number',
    discription:
      'Welcome to the Guess the Number Game! This simple and fun game allows you to guess a number between 0 and 100. Your objective is to guess the correct number. You can also reset the game by pressing the "Start new Game" button to start over.',
    liveLink: 'https://kumarshivesh.github.io/js-basic-projects/guess-the-number/index.html',
    codeLink: 'https://github.com/kumarshivesh/js-basic-projects/tree/master/guess-the-number',
    image: 'https://raw.githubusercontent.com/kumarshivesh/js-basic-projects/master/guess-the-number/guess-the-number.png',
  },
  {
    title: 'Password Generator',
    discription:
      'This is a random password generator project made using HTML, CSS, and JavaScript.',
    liveLink: 'https://kumarshivesh.github.io/js-basic-projects/password-generator/index.html',
    codeLink: 'https://github.com/kumarshivesh/js-basic-projects/tree/master/password-generator',
    image: 'https://raw.githubusercontent.com/kumarshivesh/js-basic-projects/master/password-generator/password-generator.png',
  },
  {
    title: 'QR Code Generator',
    discription: 'This generates QR code for entered text in different sizes and you can download it.',
    liveLink: 'https://kumarshivesh.github.io/js-basic-projects/qr-code-generator/index.html',
    codeLink: 'https://github.com/kumarshivesh/js-basic-projects/tree/master/qr-code-generator',
    image: 'https://raw.githubusercontent.com/kumarshivesh/js-basic-projects/master/qr-code-generator/qr-code-generator.png',
  },
  {
    title: 'Simple Counter',
    discription: 'A simple counter application website using HTML, CSS, and JavaScript.',
    liveLink: 'https://kumarshivesh.github.io/js-basic-projects/simple-counter/index.html',
    codeLink: 'https://github.com/kumarshivesh/js-basic-projects/tree/master/simple-counter',
    image: 'https://raw.githubusercontent.com/kumarshivesh/js-basic-projects/master/simple-counter/simple-counter.png',
  },
  {
    title: 'Simple Filter',
    discription: 'A simple filter application website using HTML, CSS, and JavaScript.',
    liveLink: 'https://kumarshivesh.github.io/js-basic-projects/simple-filter/index.html',
    codeLink: 'https://github.com/kumarshivesh/js-basic-projects/tree/master/simple-filter',
    image: 'https://raw.githubusercontent.com/kumarshivesh/js-basic-projects/master/simple-filter/simple-filter.png',
  },
  {
    title: 'Color the Rainbow',
    discription: 'A simple website made with HTML, CSS and JS to change the default color of the rainbow on clicking on the rainbow semicircles.',
    liveLink: 'https://kumarshivesh.github.io/js-basic-projects/simple-filter/index.html',
    codeLink: 'https://github.com/kumarshivesh/js-basic-projects/tree/master/color-the-rainbow',
    image: 'https://raw.githubusercontent.com/kumarshivesh/js-basic-projects/master/color-the-rainbow/color-the-rainbow.png',
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
