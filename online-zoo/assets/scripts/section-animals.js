function renderSectionAnimals() {
  const fragment = new DocumentFragment();
  const sectionAnimals = document.createElement('section');

  sectionAnimals.classList.add("animals-block", "content-container");
  sectionAnimals.innerHTML = `
  <div class="animals-block-decoration-left"></div>
  <div class="animals-block-decoration-right"></div>
  <a class="slider-left slider-button" onclick=(crateSlide())>←</a>
  <a class="slider-right slider-button" onclick=(crateSlide())>→</a>

  <div class="animals-slider-wrapper" id="animals-cards-container"></div>

  <a href="#" class="choose-animal-button">choose your favorite</a>`

  fragment.appendChild(sectionAnimals);
  document.getElementById('main').appendChild(fragment);
  crateSlide()
}
renderSectionAnimals()

function getRandomAnimals(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

function crateSlide() {
  let outputAnimalsArr = []
  if (screen.width > 990) {
    outputAnimalsArr = getRandomAnimals(animals, 6)
  } else {
    outputAnimalsArr = getRandomAnimals(animals, 4)
  }
  document.getElementById('animals-cards-container').innerHTML = ''
  let box = document.createElement('div');
  outputAnimalsArr.forEach((animal) => {
    box.innerHTML += `
    <div class="animal-card">
    <div class="showup"></div>
      <div class="animal-card-img"><img src=${animal.img} class="animal-card-img"
          alt="animals picture"></div>
      <div class="animal-card-agenda">
        <div class="animal-card-text">
          <div class="title">${animal.name}</div>
          <div class="subtitle">${animal.description}</div>
        </div>
        <div class="animal-card-food-logo"><img src=${animal.food}
            alt="food for animal logo's oicture"></div>
      </div>
    </div>`;
  })
  box.classList.add('animals-cards-container', 'new-box');
  document.getElementById('animals-cards-container').appendChild(box);
}
