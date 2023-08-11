document.addEventListener("DOMContentLoaded", function() {
    let header=document.querySelector(".header")
    const headerNav=`
    <div class="header__logo">
        <img src="./Images/Logo3.png" alt="" id="logo-head">
    </div>
    <div class="header__ul header-menu">
        <div id="nav-head">
            <li class="header__li" id="nav-head-li">
                <a class="init header__a" href="#home">Inicio</a>
            </li>
            <li class="header__li" id="nav-head-li">
                <a class="init header__a" href="#about-me">Sobre mí</a>
            </li>
            <li class="header__li" id="nav-head-li">
                <a class="init header__a" href="#contact">Contacto</a>
            </li>
            <li class="header__li" id="barra-svg-nav">
                <a href="#contact">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </a>
            </li>
        </div>
    </div>`
    header.innerHTML+=headerNav
})