function renderDonationMain() {
  const fragment = new DocumentFragment();
  const backgroundImg = document.createElement('div');
  backgroundImg.classList.add("panda-background");

  const mainBlock = document.createElement('div');
  mainBlock.classList.add("main-block");

  mainBlock.innerHTML = `
   
      <div class="content-container">
        <h2 class="h2">THE ZOO HAS OFFICIALLY REOPENED BUT WE STILL NEED YOUR HELP!</h2>
        <p class="main-text">Even though the Zoo has been able to reopen, we are at a greatly reduced capacity with
          educational programs and public and private events cancelled or postponed for additional months. We need you
          now more than ever to help ensure that we overcome these challenges. We have been actively raising funds in
          the community, and we are grateful for the generosity. But much more support is still needed, and we need your
          help! Please consider a gift today – no matter what size – to help us sustain our mission.</p>
        <h3 class="h3">Donation Information</h3>
        <div class="donate-block">
          <div class="donate-heading">Pick and feed a friend</div>
          <div class="donate-subtitle">We know the animals bring you joy, and in these extraordinary times, we’re glad.
          </div>
          <div class="amount-view">
            <div class="amount-left-side">
              <div class="amount-text">
                <div class="count">4</div>
                <div class="amount-lable">Panda diet for the day.</div>
              </div>
              <div><img src="../../assets/icons/x_icon.svg" alt="x-icon" class="amoumt-cros-icon"></div>
            </div>

            <div class="amount-img" alt="perfect panda"></div>
          </div>

          <div class="picker-title">Amount</div>
          <div class="amount-picker-wrapper">
            <div class="picker-line"></div>
            <div class="amount-selector xl-amount" id="5000">
              <div class="selector-dot"></div>
              <div class="selector-lable">5000</div>
            </div>
            <div class="amount-selector x-amount" id="2000">
              <div class="selector-dot"></div>
              <div class="selector-lable">2000</div>
            </div>
            <div class="amount-selector x-amount" id="1000">
              <div class="selector-dot"></div>
              <div class="selector-lable">1000</div>
            </div>
            <div class="amount-selector" id="500">
              <div class="selector-dot"></div>
              <div class="selector-lable">500</div>
            </div>
            <div class="amount-selector" id="250">
              <div class="selector-dot"></div>
              <div class="selector-lable">250</div>
            </div>
            <div class="amount-selector  selected-dot" id="100">
              <div class="selector-dot"></div>
              <div class="selector-lable  selected-lable">100</div>
            </div>
            <div class="amount-selector" id="50">
              <div class="selector-dot"></div>
              <div class="selector-lable">50</div>
            </div>
            <div class="amount-selector" id="25">
              <div class="selector-dot"></div>
              <div class="selector-lable">25</div>
            </div>
          </div>
          <form action="" class="donation-send-form">
            <div class="amount-input-wrapper">
            
            <input
              type="number"
              name="amount-input" id="amount-input" class="amount-input" placeholder="Another amount"
              min="0" max="9999" required pattern="[0-9]"
              onpaste="return false;"
              ondrop="return false;"
              onkeyDown="test(event)"
              onkeyUp="inputPreventMoreThenFour()"

              value=100
            >
              <span class="dolar-sign"></span></div>
            <div class="period-chouse-wrapper">
              <input type="radio" name="period-chouse" id="monthly" class="amount-input-monthly stiled-radio"><label
                for="monthly">Monthly</label>
              <input type="radio" name="period-chouse" id="once" class="amount-input-once stiled-radio" checked><label
                for="once">Once</label>
            </div>

            <a class="choose-animal-button">Feed a friend now</a>
          </form>

          <div class="share-call">Share with your friends on social networks</div>
        </div>
      </div>
    `

  fragment.appendChild(backgroundImg);
  fragment.appendChild(mainBlock);
  document.getElementById('main').appendChild(fragment);

  const amountSelector = document.querySelectorAll('.amount-selector')
  const selectorLable = document.querySelectorAll('.selector-lable')

  function togleSelection() {
    amountSelector.forEach(e => e.classList.remove('selected-dot'));
    selectorLable.forEach(e => e.classList.remove('selected-lable'))
    this.classList.add('selected-dot')
    document.getElementById('amount-input').value = this.id
    console.log(this.id)
    let lable = this.querySelector('.selector-lable')
    lable.classList.add('selected-lable')
  }

  amountSelector.forEach(e => e.addEventListener("click", togleSelection, false));

}
renderDonationMain()


function test(event) {
  const pickerValue = [25, 50, 100, 250, 500, 1000, 2000, 5000];
  const amountSelector = document.querySelectorAll('.amount-selector')
  const selectorLable = document.querySelectorAll('.selector-lable')
  const amountInput = document.getElementById('amount-input')

  if (!((event.keyCode > 95 && event.keyCode < 106)
    || (event.keyCode > 47 && event.keyCode < 58)
    || event.keyCode == 8)) {
    event.preventDefault()
  }

  if (pickerValue.includes(+amountInput.value)) {
    amountSelector.forEach(e => e.classList.remove('selected-dot'));
    selectorLable.forEach(e => e.classList.remove('selected-lable'))

    document.getElementById(amountInput.value).classList.add('selected-dot')
    document.getElementById(amountInput.value).querySelector('.selector-lable').classList.add('selected-lable')
  } else {
    amountSelector.forEach(e => e.classList.remove('selected-dot'));
    selectorLable.forEach(e => e.classList.remove('selected-lable'))
  }

}

function inputPreventMoreThenFour() {
  const amountInput = document.getElementById('amount-input')

  if (amountInput.value.length > 4) {
    amountInput.value = amountInput.value.substr(0, 4);
  }
}
