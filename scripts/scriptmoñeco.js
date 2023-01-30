window.onload = function(){
    const ctx = document.querySelector("canvas").getContext("2d");

  

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