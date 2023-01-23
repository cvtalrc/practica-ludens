
window.onload = function() {

    const datos = { //almacena los valores de los componentes recibidos 
        nombre: '',
        apellido: '',
        asignatura: '',
        email: '',
        institucion: ''
    }

    function download() { //descarga el documento pdf

        var element = document.createElement('a');
        element.setAttribute('href','../Ludens/downloads/Prueba Diagnóstica Matemática 5° Básico.pdf');
        element.setAttribute('download', 'Prueba Diagnóstica Matemática 5° Básico');
        document.body.appendChild(element);
        element.click();
    }

    let form = document.querySelector('form');
    form.addEventListener('submit', function(event){
        event.preventDefault(); //evita que se recargue la pag

        nombre = event.target[0].value;
        apellido = event.target[1].value;
        asignatura = event.target[2].value;
        email = event.target[3].value;
        institucion = event.target[4].value;

        // ********* Validación de datos ***********

        function mostrarError(mensaje){
            const error = document.createElement('p');
            error.textContent = mensaje;
            error.classList.add("error");
            
            form.appendChild(error);

            setTimeout(() => { //muestra el mensaje de error durante 5 seg y luego desaparece
                error.remove();
            }, 5000);
            
        }

        if(nombre == '' || apellido == '' || asignatura == '' || email == '' || institucion == ''){
            mostrarError("Todos los campos son obligatorios.");

        }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            mostrarError("Ingrese un correo válido.");
    
        }else{
            // ******* Descarga del archivo pdf *******
            download();
        }

        // ******** Muestra elementos capturados en consola *********

        console.log("Nombre: ", event.target[0].value);
        console.log("Apellido: ", event.target[1].value);
        console.log("Asignatura: ", event.target[2].value);
        console.log("Mail: ", event.target[3].value);
        console.log("Institucion: ", event.target[4].value);

    });

}
