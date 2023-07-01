document.addEventListener("DOMContentLoaded", function() {
    let header=document.querySelector(".header")

    let navMobile=`
    <nav class="navbar navbar-dark p-0 fixed-top" id="header-mov">
      <div class="container-fluid" id="header-mov">
        <img src="./Images/Logo3.png" alt="" id="logo-head">
        <button class="header__navbar-icon navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark rounded-4" style="width: 60vw;" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Mi portafolio Digital</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div>
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about-me">About me</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div class="">
              <a id="correo-bar" href="mailto:ilanangelesrodriguez@gmail.com?Subject=Interesado%20en%20contactarte">ilanangelesrodriguez@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    `

    header.innerHTML+=navMobile

})