function renderSectionBackstage() {
  const fragment = new DocumentFragment();
  const sectionBackstage = document.createElement('section');

  sectionBackstage.classList.add("block-backstage", "content-container");
  sectionBackstage.innerHTML = `
  <div class="backstage-decorate-flowers"></div>
  <div class="backstage-img"></div>
  <div class="backstage-tekst">
    <h3>The Backstage of the Wilderness World.</h3>
    <div class="first-paragraph">The site was founded on the basis of a volunteer movement to protect and care for animals.</div>
    <h2>How it works</h2>
    <div class="second-paragraph">The main goal is to help the animals, as well as the nature reserves and zoos where they are kept. We are
      currently working on video projects targeting pandas in China, eagles on an island near Los Angeles,
      alligators in Florida and gorillas in the Congo. These have a total of more than 1,500 mammals and reptiles.
    </div>
  </div>`

  fragment.appendChild(sectionBackstage);
  document.getElementById('main').appendChild(fragment);
}
renderSectionBackstage()