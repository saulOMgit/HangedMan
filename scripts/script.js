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
        return Math.floor(Math.random() * palabras.length);
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
    
    //Lanzamos la funcion que generara la pista
    pista(palabra);

    function pista(palabra){
        //generamos un numero aleatorio que nos dara una letra de la palabra escogida
        let numPista=Math.floor(Math.random()*palabra.length);
        //la guardamos en una variable
        let mipista=palabra[numPista];
        
        let contadorPista=0;
        //Recorremos la palabra y la guardamos en el span correspondiente
        for (letra of palabra){
            if(mipista==letra){
                spans[contadorPista].textContent=mipista;
            }
            contadorPista++;
        }
    }

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
        } else{
            correccion();
        }
        pintaUsadas(mayus);
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
                let perdiste=document.createElement("p");
                perdiste.className="perdiste";
                perdiste.textContent="Perdiste!!!";
                document.body.appendChild(perdiste);                
                document.body.removeEventListener("keydown",juego);

                let spreiniciar= document.createElement("span");
                spreiniciar.className="reiniciar";
                spreiniciar.textContent="Reiniciar";
                spreiniciar.addEventListener("click",reiniciar);

                document.body.appendChild(spreiniciar);

                break;
            default:
                break;
        }

    }

    function correccion(){

        let mispan=document.querySelectorAll(".letra");
        let mipalabra="";
        for (span of mispan){
            mipalabra+=span.textContent;
        }
        console.log(mipalabra);

        if(palabras[numAleat].toUpperCase()==mipalabra){
            document.body.removeEventListener("keydown",juego);

            let spreiniciar= document.createElement("span");
            spreiniciar.className="reiniciar";
            spreiniciar.textContent="Reiniciar";
            spreiniciar.addEventListener("click",reiniciar);

            let ganaste=document.createElement("p");
            ganaste.className="ganaste";
            ganaste.textContent="Ganaste!!!";
            document.body.appendChild(ganaste);
            document.body.appendChild(spreiniciar);
        }
    }

    function reiniciar(){
        window.location.reload();
    }

    function pintaUsadas(even){
        let usada=document.querySelector(".usada");
        let usadas=document.querySelectorAll(".usadas");
        let existe=false;

        if(!usadas){
            let spanusado=document.createElement("span");
            spanusado.textContent=even;
            usada.appendChild(spanusado);
        }else{
        for (let letra of usadas){
            if(letra.textContent==even){
                existe=true;
            }
        }

        if(!existe){
            let spanusado=document.createElement("span");
            spanusado.textContent=even;
            spanusado.className="usadas";
            usada.appendChild(spanusado);
        }
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