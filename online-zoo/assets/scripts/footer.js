function renderFooter() {
  const fragment = new DocumentFragment();
  const footer = document.createElement('div');

  footer.classList.add("footer-container", "content-container");
  footer.innerHTML = `
  <div class="footer-first-colom">
    <a href="../main/index.html">
      <div class="footer-logo-container">
      <div>PetStory online</div>
      <img src="../../assets/icons/bamboo-logo.svg" class="footer-bambook-branch" alt="text decoration by babook branch">
      </div>
    </a>

    <a href="../donate/index.html" class="footer-button">donate for volunteers</a>
  
    <ul class="nobull footer-social-list">
      <li><a href="https://www.facebook.com/" class="social fb"><span>Facebook</span></a></li>
      <li><a href="https://twitter.com/" class="social twitter"><span>Twitter</span></a></li>
      <li><a href="https://www.instagram.com/" class="social instagram"><span>Instagram</span></a></li>
      <li><a href="https://www.youtube.com/" class="social youtoube"><span>YouTube</span></a></li>
    </ul>
  
  </div>
  <div class="footer-second-colom">
    <ul class="footer-nav nobull" id="footer-nav">
      <li><a href="../main/index.html" id="footer-about">About</a></li>
      <li><a href="#map">Map</a></li>
      <li><a href="#zoos">Zoos</a></li>
      <li><a href="#contact">Contact us</a></li>
    </ul>
  </div>
  <div class="footer-third-colom">
  
    <form action="#" class="footer-form">
      <label for="subscribe-email" class="footer-form-lable">Subscribe to our news</label>
      <input type="email" id="subscribe-email" name="subscribe-email" placeholder="Enter your email"
        class="footer-form-email-input">
      <input type="submit" value="Submit" class="footer-form-submit-btn">
    </form>
    <div class="footer-signature">
      <div>Designed by Alisa Samborskaya</div>
      <div>©RSSchool & ©Yem Digital 2021</div>
    </div>
  </div>`

  fragment.appendChild(footer);
  document.getElementById('footer').appendChild(fragment);

  const about = document.getElementById('footer-about')
  const footerNav = document.getElementById('footer-nav')
  if (document.title.includes("Donate")) {
    about.classList.remove('nav-active')
    footerNav.classList.add('donate-page-footer')
  } else {
    about.classList.add('nav-active')
    footerNav.classList.remove('donate-page-footer')

  }

}
renderFooter()
