function renderSectionHero() {
  const fragment = new DocumentFragment();
  const sectionHero = document.createElement('section');

  sectionHero.classList.add("hero-img");
  sectionHero.innerHTML = `
  <div class="slogan-container">
  <div class="orange-circle">  <div class="slogan-text">Watch your <span>favorite</span> animal online</div>
  </div>
  <a class="slogan-button">watсh online</a>
</div>`

  fragment.appendChild(sectionHero);
  document.getElementById('main').appendChild(fragment);
}
renderSectionHero()
