function renderSectionPickFriend() {
  const fragment = new DocumentFragment();
  const sectionPickFriend = document.createElement('section');

  sectionPickFriend.classList.add("pick-friend");
  sectionPickFriend.innerHTML = `
  <div class="pick-friend-container content-container">
  <div class="pick-friend-heading">Pick and feed a friend</div>
  <div class="pick-friend-title">We know the animals bring you joy, and in these extraordinary times, we’re
    glad.</div>
  <div class="pick-friend-subtitle">During a time when the COVID-19 epidemic is touching all of our lives, we’re
    proud and glad that people around the world find joy in PetStory.</div>
  <div class="pick-friend-text">Even though the zoo has reopened, we need you now more than ever to help us deal
    with these problems. Please consider a gift to our <a class="pick-friend-text-fake-link"
      href="../donate/index.html">Emergency
      Support Fund</a> .</div>
  <div class="pick-friend-flow-title">How it works</div>

  <div class="flow-container">
    <div class="flow-card flow-card-first">
      <div class="flow-card-img-container">
        <img src="../../assets/icons/flow-step-one.svg" alt="pay by card picture">
      </div>
      <div class="flow-card-text">Pay with card</div>
      <div class="arrow arrow-first"></div>
    </div>

    <div class="flow-arrow">
      <img src="../../assets/icons/flow-arrow.svg" alt="arrow to next setep">
    </div>

    <div class="flow-card flow-card-second">
      <div class="flow-card-img-container">
        <img src="../../assets/icons/flow-step-two.svg" alt="foundig visualisation picture">
      </div>
      <div class="flow-card-text">Payment goes to the zoo</div>
      <div class="arrow arrow-second"></div>
    </div>

    <div class="flow-arrow">
      <img src="../../assets/icons/flow-arrow.svg" alt="arrow to next setep">
    </div>

    <div class="flow-card">
      <div class="flow-card-img-container">
        <img src="../../assets/icons/flow-step-three-monkey.svg" alt="monkey">
      </div>
      <div class="flow-card-text">Your favourite animal gets delicious dish</div>
    </div>

  </div>

  <a href="#" class="choose-animal-button pf-button">Feed a friend now</a>`

  fragment.appendChild(sectionPickFriend);
  document.getElementById('main').appendChild(fragment);
}
renderSectionPickFriend()
