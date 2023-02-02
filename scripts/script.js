window.onload = function(){
    //Creamos el contexto del canvas
    // con ello podremos dibujar sobre el
    const ctx = document.querySelector("canvas").getContext("2d");

    //Creamos un array fijo para el juego
    const palabras= ["Lucha","Libertad","Titan","Mtusa","Albersou","Espada","Violeta","Zombie","Java","Lugia","Hueco","Bosque","Demonio","Merengue","Antonio","Caraculo","Matrix","Korea","Japon","Gorrion"];
    
    const abcdario = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    //Generamos un numero aleatorio que escogera automaticamente una palabra
    let numAleat= GeneraAleatorio();
  
    function GeneraAleatorio() {
        return Math.floor(Math.random() * (palabras.length - 0) + 0);
    }

    console.log(numAleat);

    let palabra=palabras[numAleat].toUpperCase().split("");

    for (letra of palabra){
        let mispan=document.createElement("span");

        mispan.className="letra";
        
        document.querySelector(".palabra").appendChild(mispan);
         console.log(letra);
    }
   
    //Añadimos una funcion al body para cada vez que pulsemos una tecla
    document.body.addEventListener("keydown",juego);
    //Y codificamos la funcion     
    let spans=document.querySelectorAll(".letra");
    
    function juego(even){
        let mip=document.createElement("p");
        
          let contador=0;
          let existe=false;
        
            let mayus=even.key.toUpperCase();
            //para cada letra de nuestra palabra comprobamos si coincide con la pulsada
            for (letra of palabra){
                if (mayus==letra){
                    //si coincide, pintamos la letra donde corresponda (con el contador)
                    spans[contador].textContent=mayus;
                    mip.textContent=`${even.code}`;
            document.body.appendChild(mip);
                    //y marcamos existe como true, para que no cuente como un intento fallido
                    existe=true;
                }
                contador++;
            }

        //Si no existe, llamamos a la funcion fallo
        if(!existe){
            fallo();
        }
    }

    let cuentaFallos=0;

    //En esta funcion veremos el funcionamiento por si no acertamos la letra de una palabra
    function fallo(){
        //aumentamos el contador
        cuentaFallos++;
        //y dependiendo de ese numero, vamos llamando a las funciones que pintan cada parte del ahorcado
        switch(cuentaFallos){
            case 1:
                pintaBase();
                break;
            case 2:
                pintaPalo();
                break;
            case 3:
                pintaViga();
                break;
            case 4:
                pintaCuerda();
                break;
            case 5:
                pintaCabeza();
                break;
            case 6:
                pintaCuerpo();
                break;
            case 7:
                pintaExtremidades();
                document.body.removeEventListener("keydown",juego)
                break;
            default:
                break;
        }

    }

    function pintaBase(){
        //base
       ctx.beginPath();
       ctx.lineWidth=2;
       
       ctx.strokeStyle="red";
       ctx.moveTo(20,120);
       ctx.lineTo(110,120);
       ctx.stroke();
       ctx.closePath();
    }

    function pintaPalo(){
       //palo vertical
       ctx.beginPath();
       ctx.strokeStyle="brown";
       ctx.moveTo(50,120);
       ctx.lineTo(50,30);
       ctx.stroke();
       ctx.closePath();
    }

    function pintaViga(){
       //palo horizontal
       ctx.beginPath();
       ctx.strokeStyle="yellow";
       ctx.moveTo(50,30);
       ctx.lineTo(100,30);
       ctx.stroke();
       ctx.closePath();
    }

    function pintaCuerda(){
        //cuerda
       ctx.beginPath();
       ctx.strokeStyle="limegreen";
       ctx.moveTo(100,30);
       ctx.lineTo(100,50);
       ctx.stroke();
       ctx.closePath();
    }

    function pintaCabeza(){
       //cabesa illo
       ctx.beginPath();
       ctx.strokeStyle="blue";
       //(centerX,CenterY,radius,2*Math.pi, false)
       ctx.arc(100,55,10,2*Math.PI,false);
       ctx.fillStyle="green";
       ctx.fill();
       ctx.lineWidth=2;
       ctx.stroke();
       ctx.closePath();
    }
    function pintaCuerpo(){
       //cuerpaso
       ctx.beginPath();
       ctx.strokeStyle="pink";
       ctx.moveTo(100,66);
       ctx.lineTo(100,100);
       ctx.stroke();
       ctx.closePath();
    }

    function pintaExtremidades(){
       //extremidades

        //pierna izquierda
       ctx.beginPath();
       ctx.strokeStyle="black";
       ctx.moveTo(100,100);
       ctx.lineTo(90,110);
       ctx.stroke();
       ctx.closePath();

       //pierna derecha
       ctx.beginPath();
       ctx.strokeStyle="black";
       ctx.moveTo(100,100);
       ctx.lineTo(110,110);
       ctx.stroke();
       ctx.closePath();

       //brazo izquierdo

       ctx.beginPath();
       ctx.strokeStyle="black";
       ctx.moveTo(100,80);
       ctx.lineTo(90,90);
       ctx.stroke();
       ctx.closePath();

       //brazo derecho
       ctx.beginPath();
       ctx.strokeStyle="black";
       ctx.moveTo(100,80);
       ctx.lineTo(110,90);
       ctx.stroke();
       ctx.closePath();
    }

}