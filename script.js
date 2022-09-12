var ingredientes_opcion1 = ['a','b'];
var ingredientes_opcion2 = ['a','b'];
var ingredientes_opcion3 = ['a','b'];
var ingredientes_opcion4 = ['a','b'];

function cargar(opcion){
    var nombre = document.getElementById("nombre");
    var descripcion = document.getElementById("descripcion");
    var fotoPrincipal = document.getElementById("fotoPrincipal");
    var circulo = document.getElementById("circulo");
    var ingredientes = document.getElementById("ingredientes")

    if(opcion==0){
        nombre.innerHTML = "GitHub"
        descripcion.innerHTML = "Proyectos personales en lenguajes de programacion";
        fotoPrincipal.src = "Images/git.png";
        circulo.style.backgroundColor = "#f88965";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion1.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion1[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==1){
        nombre.innerHTML = "Twitter"
        descripcion.innerHTML = "Blog de contenidos";
        fotoPrincipal.src = "Images/twitter.png";
        circulo.style.backgroundColor = "#f1c072";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion2.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion2[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==2){
        nombre.innerHTML = "Youtube"
        descripcion.innerHTML = "Trabajos de la UNS";
        fotoPrincipal.src = "Images/YouTube.png";
        circulo.style.backgroundColor = "#398969";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion3.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion3[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==3){
        nombre.innerHTML = "Blogger"
        descripcion.innerHTML = "Contenido";
        fotoPrincipal.src = "Images/blogger.png";
        circulo.style.backgroundColor = "#398969";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion4.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion4[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
}