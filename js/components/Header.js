function isVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

window.addEventListener("DOMContentLoaded", (ev0) => {
  window.addEventListener("scroll", (ev1) => {
    document.querySelectorAll(".paused").forEach((elm) => {
      if (isVisible(elm)) elm.classList.remove("paused");
    });
  });
});

const header = document.getElementById("header");

header.innerHTML = `
        <section class="parallax-bg">
          <div class="contenedor">
            <nav class="menu">
              <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about-us.html">About us</a></li>
                <li><a href="./index.html"><img src="./images/logoArvies.svg" alt="Logo Arvies"/></a></li>
                <li><a href="./contact-us.html">Contact Us</a></li>
				        <li><a href="./catalog.html">Our Products</a></li>
              </ul>
            </nav>
			      <nav class="menu_mobile" role="navigation">
				      <img src="./images/logoArvies.svg">
				      <div id="menuToggle">
				        <input type="checkbox" />
					      <span></span>
					      <span></span>
					      <span></span>
				        <ul id="menu">
                  <li><a href="./index.html">Home</a></li>
                  <li><a href="./about-us.html">About us</a></li>
                  <li><a href="./contact-us.html">Contact Us</a></li>
                  <li><a href="./product.html">Our Products</a></li>
				        </ul>
			        </div>
			      </nav>
          </div>
          
        </section>
        `;
