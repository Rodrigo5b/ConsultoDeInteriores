const punto = document.getElementById('btn-menu')
const toma = document.getElementsByClassName('nav')
const cambio = document.getElementById('btn-menu')



if (cambio.style.display = "none") {
    return function ocultar(){
        document.getElementById('relative').style.display = "none";
        cambio.setAttribute("onClick", ocultar())}
    }
    

    else {
        console.log("quepasho")
        // function mostrar(){
        //     document.getElementById('relative').style.display = "block";
        // }
        // cambio.setAttribute("onClick", mostrar())
    }
