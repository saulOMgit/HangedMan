window.onload = function(){
    //Creamos el contexto del canvas
    // con ello podremos dibujar sobre el
    const ctx = document.querySelector("canvas").getContext("2d");

    //Creamos un array fijo para el juego
    const palabras= ["Lucha","Libertad","Titan","Mtusa","Albersou","Espada","Violeta","Zombie","Java","Lugia","Hueco","Bosque","Demonio","Merengue","Antonio","Caraculo","Matrix","Korea","Japon","Gorrion"];
    
    //Generamos un numero aleatorio que escogera automaticamente una palabra
    let numAleat= GeneraAleatorio();
  
    function GeneraAleatorio() {
        return Math.floor(Math.random() * (palabras.length - 1) + 1);
    }

    console.log(numAleat);

    let palabra=palabras[numAleat].split("");

    for (letra of palabra){
        let mispan=document.createElement("span");
        
        document.querySelector(".palabra").appendChild(mispan);
         console.log(letra);
    }
   
    //Añadimos una funcion al body para cada vez que pulsemos una tecla
    document.body.addEventListener("keydown",juego);
    //Y codificamos la funcion
    function juego(even){
        let mip=document.createElement("p");

        mip.textContent=`${even.key}`;
        document.body.appendChild(mip);
    }


        //base
       ctx.beginPath();
       ctx.lineWidth=2;
       
       ctx.strokeStyle="red";
       ctx.moveTo(20,120);
       ctx.lineTo(110,120);
       ctx.stroke();
       ctx.closePath();

       //palo vertical
       ctx.beginPath();
       ctx.strokeStyle="brown";
       ctx.moveTo(50,120);
       ctx.lineTo(50,30);
       ctx.stroke();
       ctx.closePath();

       //palo horizontal
       ctx.beginPath();
       ctx.strokeStyle="yellow";
       ctx.moveTo(50,30);
       ctx.lineTo(100,30);
       ctx.stroke();
       ctx.closePath();
        
        //cuerda
       ctx.beginPath();
       ctx.strokeStyle="limegreen";
       ctx.moveTo(100,30);
       ctx.lineTo(100,50);
       ctx.stroke();
       ctx.closePath();

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


       //cuerpaso
       ctx.beginPath();
       ctx.strokeStyle="pink";
       ctx.moveTo(100,66);
       ctx.lineTo(100,100);
       ctx.stroke();
       ctx.closePath();

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