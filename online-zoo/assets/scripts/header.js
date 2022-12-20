function renderHeader() {
  const fragment = new DocumentFragment();
  const headerBlock = document.createElement('div');

  headerBlock.classList.add("header-container", "content-container");
  headerBlock.innerHTML = `
    <a href="../main/index.html">
      <div class="logo-container" id="logo-container">
        <h1 class="h1">PetStory online</h1>
        <img src="../../assets/icons/bamboo-logo.svg" class="bambook-branch" alt="text decoration by bambook branch" id="branch">
      </div>
    </a>

    <div id="burger-menu" class="burger-menu" onclick="toggleBurger()"><span></span></div>

    <nav class="menu" id="menu" onclick="backgroundCloseBurger(event)">
      <ul class="header-nav nobull">
        <li><a href="../main/index.html" class="nav-el" id="about">About</a></li>
        <li><a href="#" class="nav-el" onclick="toggleBurger()">Map</a></li>
        <li><a href="#" class="nav-el" onclick="toggleBurger()">Zoos</a></li>
        <li><a href="../donate/index.html" class="nav-el" id="donate">Donate</a></li>
        <li><a href="#" class="nav-el" onclick="toggleBurger()">Contact us</a></li>
        <li><a href="https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online" target="_blank" class="nav-el design-by" onclick="toggleBurger()">Designed by ©</a></li>
      </ul>
    </nav>

<a href="https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online" target="_blank"
  class="move-to-right">Designed by ©</a>`

  fragment.appendChild(headerBlock);
  document.getElementById('header').appendChild(fragment);

  const about = document.getElementById('about')
  const donate = document.getElementById('donate')

  if (document.title.includes("Donate")) {
    about.classList.remove('nav-active')
    donate.classList.add('nav-active')
  } else {
    about.classList.add('nav-active')
    donate.classList.remove('nav-active')
  }
}
renderHeader()

const burgerMenu = document.getElementById('burger-menu');
const menu = document.getElementById('menu');
const header = document.getElementById('header')
const logoContainer = document.getElementById('logo-container')
const branch = document.getElementById('branch')

function toggleBurger() {
  if (screen.width < 990) {
    burgerMenu.classList.toggle('burger');
    header.classList.toggle('burger')
    logoContainer.classList.toggle('burger')
    branch.classList.toggle('burger')
    menu.classList.toggle('burger');
  }
}

function backgroundCloseBurger(event) {
  if (event.target.classList.contains('menu')) {
    toggleBurger()
  }
}

