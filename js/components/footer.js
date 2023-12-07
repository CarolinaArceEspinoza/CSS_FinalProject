const footer = document.getElementById("footer");

footer.innerHTML = `
<h2>Be part of our community</h2>
<section id="s4">
  <div class="formText">
    <p><span>Let's join our newsletter.</span></p>
    <p>
      Stay ahead of the fashion curve and elevate your every moment with
      our exclusive designs, the epitome of elegance and style in our
      latest newsletter.
    </p>
  </div>

  <form id="contact_info">
  <div>
            <div class="text"> Sign up now to be the first to explore the latest trends and receive exclusive offers.</div>
      <input type="text" name="email" id="email" required size="25" maxlength="50" placeholder="E-Mail" />
      <button class="readMore" style="background: #2b2a2a" onclick="return alert('Form submitted successfully!'); return false;" >Join us!</button>
    </div>
  </form>
</section>

<nav id="social">
  <ul>
    <li><a href="#" target="_blank"><img src="images/instagram.svg" alt="instagram"/></a></li>
    <li><a href="#" target="_blank"><img src="images/whatsapp.svg" alt="whatsapp"/></a></li>
    <li><a href="#" target="_blank"><img src="images/facebook.svg" alt="facebook"/></a></li>
    <li><a href="#" target="_blank"><img src="images/tik-tok.svg" alt="tik-tok"/></a></li>
  </ul>
</nav>

<nav id="links">
  <ul>
    <li style="color: #a5834c; border: 0px">References:</li>
    <li><a href="https://pixabay.com/" target="_blank">Images Pixabay</a></li>
    <li><a href="https://www.freepik.com/" target="_blank">Images Freepik</a></li>
    <li><a href="https://www.michaelkors.com/ca/en/men/watches/" target="_blank">Watches Examples</a></li>
  </ul>
</nav>`;
