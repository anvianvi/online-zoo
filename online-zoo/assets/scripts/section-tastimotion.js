function renderSectiontms() {
  const fragment = new DocumentFragment();
  const sectiontms = document.createElement('section');

  sectiontms.classList.add("block-tms", "content-container");
  sectiontms.innerHTML = `
  <div class="testimotion-headding">Testimonials</div>

  <div class="reviews-container" id="reviews-container"></div>
  
  <input type="range" class="tms-range" id="tms-range" min="0" max="7" step="1" value="0">
  
  <a href="#" class="tms-feedback-button">leave feedback</a>

  <div class="tms-designe-leaf"></div>

  <div class="popup-back" id="popup-back" onclick="toglePopupBack(event)"></div>`

  fragment.appendChild(sectiontms);
  document.getElementById('main').appendChild(fragment);


  tmsList.forEach((tms) => {
    document.getElementById('reviews-container').innerHTML += `
    <div class="tms-card" id="tms${tms.id}">
      <div class="tms-credentials">
        <div class="tms-photo"><img src=${tms.photo} alt="profile photo"></div>
        <div class="tms-info-block">
          <div class="tms-name">${tms.name}</div>
          <div class="tms-location">${tms.location}</div>
        </div>
      </div>
      <div class="tms-text">${tms.review}</div>
    </div>
  </div>`;
  })


  const tmsCcards = document.querySelectorAll('.tms-card')

  function toglepopup() {
    let el = +this.id.substring(3)

    document.getElementById('popup-back').innerHTML = `
      <div class="tms-popup-card" >
      <div class="popup-close" onclick="closePopUp"></div>
        <div class="tms-popup-credentials">
          <div class="tms-popup-photo"><img src=${tmsList[el].photo} alt="profile photo"></div>
          <div class="tms-popup-info-block">
            <div class="tms-popup-name">${tmsList[el].name}</div>
            <div class="tms-popup-location">${tmsList[el].location}</div>
          </div>
        </div>
        <div class="tms-popup-text">${tmsList[el].review}</div>
      </div>
    </div>`;
    document.getElementById('popup-back').classList.toggle('open')
    document.getElementById('body').classList.toggle('overflow')
  }

  tmsCcards.forEach(e => e.addEventListener("click", toglepopup, false));


}
renderSectiontms()


function toglePopupBack(event) {
  if (event.target.classList.contains('popup-back') || event.target.classList.contains('popup-close')) {
    document.getElementById('popup-back').classList.toggle('open')
    document.getElementById('body').classList.toggle('overflow')
  }

}


const tmsRange = document.getElementById('tms-range')

function tmsSlide() {

  console.log(tmsRange.value)
  let margin = 0
  if (screen.width > 1500) {
    margin = tmsRange.value * 289
  } else {
    margin = tmsRange.value * 319
  }

  console.log(margin)
  document.getElementById("tms0").style.marginLeft = `-${margin}px`;

}

tmsRange.addEventListener("input", tmsSlide);