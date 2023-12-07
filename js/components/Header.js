      // esta funcion comprueba si un elemento esta visible en pantalla
      function isVisible(elm) {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight
        );
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
      }

      // cuando se carga la página...
      window.addEventListener("DOMContentLoaded", (ev0) => {
        // asignamos un evento scroll...
        window.addEventListener("scroll", (ev1) => {
          // y a todos los elementos con la clase paused...
          document.querySelectorAll(".paused").forEach((elm) => {
            if (isVisible(elm))
              // que sean visibles...
              elm.classList.remove("paused"); // les quitamos la clase paused
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
				        <li><a href="./product.html">Our Products</a></li>
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
          <div class="home_content1">
            <div>
              <h2>Style and Elegance</h2>
              <h1>Arvies</h1>
              <p>
                Everything you need to look sophisticated and modern. An
                unforgettable gift. The perfect combination of memories and
                perfection
              </p>
              <a href="#" class="readMore">READ MORE</a>
            </div>
          </div>
        </section>
        `;
