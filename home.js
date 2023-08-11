document.addEventListener("DOMContentLoaded", function() {
    let header=document.querySelector(".home")
    let modal=`
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal__dialog modal-dialog">
            <div class="modal__content modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-dark" id="staticBackdropLabel">Información</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex justify-content-center">
                    <button disabled type="button" class="btn btn-success d-flex flex-row align-items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="pe-2 bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                            </svg>
                        </div>
                        <div>
                            <a href="./assets/fut_uns.pdf" download="fut_uns.pdf" id="download-CV">Descargar CV</a>
                        </div>
                    </button>
                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary">Contactar</button>
                </div>
            </div>
        </div>
    </div>
    `
    header.innerHTML+=modal
})
