window.addEventListener("DOMContentLoaded", init, false);

var index;

function init(){
    var zone = document.getElementById("zoneDessin");
	var gc = zone.getContext("2d");
	var suivant = document.querySelector("button")
	index = 1;
	canvaAffiche();
	suivant.addEventListener("click", canvaSuivant);
}

function canvaAffiche(){
	var zone = document.getElementById("zoneDessin");
	var gc = zone.getContext("2d");
	gc.clearRect(0,0,501,501);
	if (index==1) {
		cible();
	  } else if (index==2) {
		poulet();
	  } else if (index==3) {
		damier();
	  } else {
		illusion();
	  }
}

function canvaSuivant(){
	index++;
	if (index>4){
		index = 1;
	}
	canvaAffiche();
}

function cible(){
	var zone = document.getElementById("zoneDessin");
	var gc = zone.getContext("2d");
    gc.fillStyle = "#000000";
	gc.beginPath();
	gc.arc(250, 250, 250, 0, Math.PI*2);
	gc.fill();
	gc.closePath();	
	
	gc.fillStyle = "#FFFFFF";
	gc.beginPath();
	gc.arc(250, 250, 225, 0, Math.PI*2);
	gc.fill();
	gc.closePath();	
	
	gc.fillStyle = "#000000";
	gc.beginPath();
	gc.arc(250, 250, 200, 0, Math.PI*2);
	gc.fill();
	gc.closePath();	
	
	gc.fillStyle = "#FFFFFF";
	gc.beginPath();
	gc.arc(250, 250, 175, 0, Math.PI*2);
	gc.fill();
	gc.closePath();	
	
	gc.fillStyle = "#000000";
	gc.beginPath();
	gc.arc(250, 250, 150, 0, Math.PI*2);
	gc.fill();
	gc.closePath();	
	
	gc.fillStyle = "#FFFFFF";
	gc.beginPath();
	gc.arc(250, 250, 125, 0, Math.PI*2);
	gc.fill();
	gc.closePath();	
	
	gc.fillStyle = "#000000";
	gc.beginPath();
	gc.arc(250, 250, 100, 0, Math.PI*2);
	gc.fill();
	gc.closePath();	
	
	gc.fillStyle = "#FFFFFF";
	gc.beginPath();
	gc.arc(250, 250, 75, 0, Math.PI*2);
	gc.fill();
	gc.closePath();	
	
	gc.fillStyle = "#000000";
	gc.beginPath();
	gc.arc(250, 250, 50, 0, Math.PI*2);
	gc.fill();
	gc.closePath();	
	
	gc.fillStyle = "#ff0000";
	gc.beginPath();
	gc.arc(250, 250, 25, 0, Math.PI*2);
	gc.fill();
	gc.closePath();	
}

function poulet(){
	var zone = document.getElementById("zoneDessin");
    var gc = zone.getContext("2d");

    gc.beginPath();
    gc.fillstyle = " #D3D3D3";
    gc.moveTo(100, 100);
    gc.lineTo(100, 1000);

    gc.moveTo(150, 100);
    gc.lineTo(150, 1000);

    gc.moveTo(200, 100);
    gc.lineTo(200, 1000);

    gc.moveTo(250, 100);
    gc.lineTo(250, 1000);
  
    gc.moveTo(300, 100);
    gc.lineTo(300, 1000);

    gc.moveTo(350, 100);
    gc.lineTo(350, 1000);

    gc.moveTo(400, 100);
    gc.lineTo(400, 1000);

    gc.moveTo(450, 100);
    gc.lineTo(450, 1000);

    gc.moveTo(500, 100);
    gc.lineTo(500, 1000);

    gc.moveTo(550, 100);
    gc.lineTo(550, 1000);

    gc.moveTo(100,100)
    gc.lineTo(550,100)

    gc.moveTo(100,150)
    gc.lineTo(550,150)

    gc.moveTo(100,200)
    gc.lineTo(550,200)

    gc.moveTo(100,250)
    gc.lineTo(550,250)
    
    gc.moveTo(100,300)
    gc.lineTo(550,300)

    gc.moveTo(100,350)
    gc.lineTo(550,350)
    
    gc.moveTo(100,400)
    gc.lineTo(550,400)

    gc.moveTo(100,450)
    gc.lineTo(550,450)

    gc.moveTo(100,500)
    gc.lineTo(550,500)

    gc.moveTo(100,550)
    gc.lineTo(550,550)

    gc.moveTo(100,600)
    gc.lineTo(550,600)

    gc.stroke();
    gc.closePath();

    gc.beginPath();
    gc.fillstyle = " #000000"
    gc.moveTo(200,200)
    gc.lineTo(300,200)

    gc.moveTo(300,200)
    gc.lineTo(350,250)

    gc.moveTo(350,250)
    gc.lineTo(450,250)

    gc.moveTo(500,200)
    gc.lineTo(450,250)

    gc.moveTo(500,200)
    gc.lineTo(500,250)

    gc.moveTo(500,250)
    gc.lineTo(550,250)
    
    gc.moveTo(550,250)
    gc.lineTo(500,300)

    gc.moveTo(550,250)
    gc.lineTo(500,300)

    gc.moveTo(500,300)
    gc.lineTo(550,300)

    gc.moveTo(550,300)
    gc.lineTo(450,400)

    gc.moveTo(450,400)
    gc.lineTo(350,400)
    
    gc.moveTo(450,400)
    gc.lineTo(350,400)

    gc.moveTo(300,350)
    gc.lineTo(350,400)

    gc.moveTo(300,300)
    gc.lineTo(300,350)

    gc.moveTo(300,300)
    gc.lineTo(200,200)

    gc.moveTo(250,175)
    gc.lineTo(250,250)

    gc.moveTo(250,175)
    gc.lineTo(265,185)

    gc.moveTo(265,185)
    gc.lineTo(275,173)

    gc.moveTo(275,173)
    gc.lineTo(285,185)

    gc.moveTo(285,185)
    gc.lineTo(300,173)

    gc.moveTo(300,173)
    gc.lineTo(300,200)

    gc.moveTo(350,470)
    gc.lineTo(350,400)

    gc.moveTo(300,450)
    gc.lineTo(350,450)

    gc.moveTo(315,465)
    gc.lineTo(350,450)

    gc.moveTo(450,470)
    gc.lineTo(450,400)

    gc.moveTo(450,450)
    gc.lineTo(400,450)

    gc.moveTo(450,450)
    gc.lineTo(400,450)

    gc.moveTo(450,450)
    gc.lineTo(420,465)


    gc.lineWidth = 4;
    gc.stroke();
    gc.closePath();

    gc.beginPath();
    gc.arc(265,215,5,0, Math.PI*2);
    gc.fill();
    gc.closePath();

}

function damier(){
	var zone = document.getElementById("zoneDessin");
	var gc = zone.getContext("2d");
    gc.strokeStyle = "#D9D9D9";
	
	gc.beginPath();
	
	//contenant
	
	gc.strokeRect(0,0,500,500);
	
	//lignes verticales
	gc.moveTo(50,0);
	gc.lineTo(50,500);
	
	gc.moveTo(100,0);
	gc.lineTo(100,500);
	
	gc.moveTo(150,0);
	gc.lineTo(150,500);
	
	gc.moveTo(200,0);
	gc.lineTo(200,500);
	
	gc.moveTo(250,0);
	gc.lineTo(250,500);
	
	gc.moveTo(300,0);
	gc.lineTo(300,500);
	
	gc.moveTo(350,0);
	gc.lineTo(350,500);
	
	gc.moveTo(400,0);
	gc.lineTo(400,500);
	
	gc.moveTo(450,0);
	gc.lineTo(450,500);
	
	//lignes horizontales
	
	gc.moveTo(0,50);
	gc.lineTo(500,50);
	
	gc.moveTo(0,100);
	gc.lineTo(500,100);
	
	gc.moveTo(0,150);
	gc.lineTo(500,150);
	
	gc.moveTo(0,200);
	gc.lineTo(500,200);
	
	gc.moveTo(0,250);
	gc.lineTo(500,250);
	
	gc.moveTo(0,300);
	gc.lineTo(500,300);
	
	gc.moveTo(0,350);
	gc.lineTo(500,350);
	
	gc.moveTo(0,400);
	gc.lineTo(500,400);
	
	gc.moveTo(0,450);
	gc.lineTo(500,450);
	
	gc.stroke();
	
	gc.closePath();
	
	gc.beginPath();
	
	gc.fillStyle = "#000000";
	gc.fillRect(0,0,50,50);
	gc.fillRect(100,0,50,50);
	gc.fillRect(200,0,50,50);
	gc.fillRect(300,0,50,50);
	gc.fillRect(400,0,50,50);
	
	gc.fillRect(50,50,50,50);
	gc.fillRect(150,50,50,50);
	gc.fillRect(250,50,50,50);
	gc.fillRect(350,50,50,50);
	gc.fillRect(450,50,50,50);
	
	gc.fillRect(0,100,50,50);
	gc.fillRect(100,100,50,50);
	gc.fillRect(200,100,50,50);
	gc.fillRect(300,100,50,50);
	gc.fillRect(400,100,50,50);
	gc.fillRect(200,100,50,50);
	
	gc.fillRect(50,50,50,50);
	gc.fillRect(150,50,50,50);
	gc.fillRect(250,50,50,50);
	gc.fillRect(350,50,50,50);
	gc.fillRect(450,50,50,50);
	
	gc.fillRect(0,100,50,50);
	gc.fillRect(100,100,50,50);
	gc.fillRect(200,100,50,50);
	gc.fillRect(300,100,50,50);
	gc.fillRect(400,100,50,50);
	gc.fillRect(200,100,50,50);
	
	gc.fillRect(50,150,50,50);
	gc.fillRect(150,150,50,50);
	gc.fillRect(250,150,50,50);
	gc.fillRect(350,150,50,50);
	gc.fillRect(450,150,50,50);
	
	gc.fillRect(0,200,50,50);
	gc.fillRect(100,200,50,50);
	gc.fillRect(200,200,50,50);
	gc.fillRect(300,200,50,50);
	gc.fillRect(400,200,50,50);
	gc.fillRect(200,200,50,50);
	
	gc.fillRect(50,250,50,50);
	gc.fillRect(150,250,50,50);
	gc.fillRect(250,250,50,50);
	gc.fillRect(350,250,50,50);
	gc.fillRect(450,250,50,50);
	
	gc.fillRect(0,300,50,50);
	gc.fillRect(100,300,50,50);
	gc.fillRect(200,300,50,50);
	gc.fillRect(300,300,50,50);
	gc.fillRect(400,300,50,50);
	gc.fillRect(200,300,50,50);
	
	gc.fillRect(50,350,50,50);
	gc.fillRect(150,350,50,50);
	gc.fillRect(250,350,50,50);
	gc.fillRect(350,350,50,50);
	gc.fillRect(450,350,50,50);
	
	gc.fillRect(0,400,50,50);
	gc.fillRect(100,400,50,50);
	gc.fillRect(200,400,50,50);
	gc.fillRect(300,400,50,50);
	gc.fillRect(400,400,50,50);
	gc.fillRect(200,400,50,50);
	
	gc.fillRect(50,450,50,50);
	gc.fillRect(150,450,50,50);
	gc.fillRect(250,450,50,50);
	gc.fillRect(350,450,50,50);
	gc.fillRect(450,450,50,50);
	gc.fill();
	
	gc.closePath();
}

function illusion(){
	var zone = document.getElementById("zoneDessin");
	var gc = zone.getContext("2d");
	gc.strokeStyle = "#181818";
    gc.strokeRect(0,0,500,500);
    
    //Lignes verticales
    gc.moveTo(0,0);
    gc.lineTo(10,500);
    
    gc.moveTo(0,10);
    gc.lineTo(20,500);
    
    gc.moveTo(0,20);
    gc.lineTo(30,500);
    
    gc.moveTo(0,30);
    gc.lineTo(40,500);
    
    gc.moveTo(0,40);
    gc.lineTo(50,500);
    
    gc.moveTo(0,50);
    gc.lineTo(60,500);
    
    gc.moveTo(0,60);
    gc.lineTo(70,500);
    
    gc.moveTo(0,70);
    gc.lineTo(80,500);
    
    gc.moveTo(0,80);
    gc.lineTo(90,500);
    
    gc.moveTo(0,90);
    gc.lineTo(100,500);
    
    gc.moveTo(0,100);
    gc.lineTo(110,500);
    
    gc.moveTo(0,110);
    gc.lineTo(120,500);
    
    gc.moveTo(0,120);
    gc.lineTo(130,500);
    
    gc.moveTo(0,130);
    gc.lineTo(140,500);
    
    gc.moveTo(0,140);
    gc.lineTo(150,500);
    
    gc.moveTo(0,150);
    gc.lineTo(160,500);
    
    gc.moveTo(0,160);
    gc.lineTo(170,500);
    
    gc.moveTo(0,170);
    gc.lineTo(180,500);
    
    gc.moveTo(0,180);
    gc.lineTo(190,500);
    
    gc.moveTo(0,190);
    gc.lineTo(200,500);
    
    gc.moveTo(0,200);
    gc.lineTo(210,500);
    
    gc.moveTo(0,210);
    gc.lineTo(220,500);
    
    gc.moveTo(0,220);
    gc.lineTo(230,500);
    
    gc.moveTo(0,230);
    gc.lineTo(240,500);
    
    gc.moveTo(0,240);
    gc.lineTo(250,500);
    
    gc.moveTo(0,250);
    gc.lineTo(260,500);
    
    gc.moveTo(0,260);
    gc.lineTo(270,500);
    
    gc.moveTo(0,270);
    gc.lineTo(280,500);
    
    gc.moveTo(0,280);
    gc.lineTo(290,500);
    
    gc.moveTo(0,290);
    gc.lineTo(300,500);
    
    gc.moveTo(0,300);
    gc.lineTo(310,500);
    
    gc.moveTo(0,310);
    gc.lineTo(320,500);
    
    gc.moveTo(0,320);
    gc.lineTo(330,500);
    
    gc.moveTo(0,330);
    gc.lineTo(340,500);
    
    gc.moveTo(0,340);
    gc.lineTo(350,500);
    
    gc.moveTo(0,350);
    gc.lineTo(360,500);
    
    gc.moveTo(0,360);
    gc.lineTo(370,500);
    
    gc.moveTo(0,370);
    gc.lineTo(380,500);
    
    gc.moveTo(0,380);
    gc.lineTo(390,500);
    
    gc.moveTo(0,390);
    gc.lineTo(400,500);
    
    gc.moveTo(0,400);
    gc.lineTo(410,500);
    
    gc.moveTo(0,410);
    gc.lineTo(420,500);
    
    gc.moveTo(0,420);
    gc.lineTo(430,500);
    
    gc.moveTo(0,430);
    gc.lineTo(440,500);
    
    gc.moveTo(0,440);
    gc.lineTo(450,500);
    
    gc.moveTo(0,450);
    gc.lineTo(460,500);
    
    gc.moveTo(0,460);
    gc.lineTo(470,500);
    
    gc.moveTo(0,470);
    gc.lineTo(480,500);
    
    gc.moveTo(0,480);
    gc.lineTo(490,500);
    
    gc.moveTo(0,490);
    gc.lineTo(500,500);
    gc.stroke();

    // Lignes horizontales 
    gc.moveTo(500,0);
    gc.lineTo(0,0);

    gc.moveTo(500,10);
    gc.lineTo(10,0);

    gc.moveTo(500,20);
    gc.lineTo(20,0);

    gc.moveTo(500,30);
    gc.lineTo(30,0);

    gc.moveTo(500,40);
    gc.lineTo(40,0);

    gc.moveTo(500,50);
    gc.lineTo(50,0);

    gc.moveTo(500,60);
    gc.lineTo(60,0);

    gc.moveTo(500,70);
    gc.lineTo(70,0);

    gc.moveTo(500,80);
    gc.lineTo(80,0);

    gc.moveTo(500,90);
    gc.lineTo(90,0);

    gc.moveTo(500,100);
    gc.lineTo(100,0);

    gc.moveTo(500,110);
    gc.lineTo(110,0);

    gc.moveTo(500,120);
    gc.lineTo(120,0);

    gc.moveTo(500,130);
    gc.lineTo(130,0);

    gc.moveTo(500,140);
    gc.lineTo(140,0);

    gc.moveTo(500,150);
    gc.lineTo(150,0);

    gc.moveTo(500,160);
    gc.lineTo(160,0);

    gc.moveTo(500,170);
    gc.lineTo(170,0);

    gc.moveTo(500,180);
    gc.lineTo(180,0);

    gc.moveTo(500,190);
    gc.lineTo(190,0);

    gc.moveTo(500,200);
    gc.lineTo(200,0);

    gc.moveTo(500,210);
    gc.lineTo(210,0);

    gc.moveTo(500,220);
    gc.lineTo(220,0);

    gc.moveTo(500,230);
    gc.lineTo(230,0);

    gc.moveTo(500,240);
    gc.lineTo(240,0);

    gc.moveTo(500,250);
    gc.lineTo(250,0);

    gc.moveTo(500,260);
    gc.lineTo(260,0);

    gc.moveTo(500,270);
    gc.lineTo(270,0);

    gc.moveTo(500,280);
    gc.lineTo(280,0);

    gc.moveTo(500,290);
    gc.lineTo(290,0);

    gc.moveTo(500,300);
    gc.lineTo(300,0);

    gc.moveTo(500,310);
    gc.lineTo(310,0);

    gc.moveTo(500,320);
    gc.lineTo(320,0);

    gc.moveTo(500,330);
    gc.lineTo(330,0);

    gc.moveTo(500,340);
    gc.lineTo(340,0);

    gc.moveTo(500,350);
    gc.lineTo(350,0);

    gc.moveTo(500,360);
    gc.lineTo(360,0);

    gc.moveTo(500,370);
    gc.lineTo(370,0);

    gc.moveTo(500,380);
    gc.lineTo(380,0);

    gc.moveTo(500,390);
    gc.lineTo(390,0);

    gc.moveTo(500,400);
    gc.lineTo(400,0);

    gc.moveTo(500,410);
    gc.lineTo(410,0);

    gc.moveTo(500,420);
    gc.lineTo(420,0);

    gc.moveTo(500,430);
    gc.lineTo(430,0);

    gc.moveTo(500,440);
    gc.lineTo(440,0);

    gc.moveTo(500,450);
    gc.lineTo(450,0);

    gc.moveTo(500,460);
    gc.lineTo(460,0);

    gc.moveTo(500,470);
    gc.lineTo(470,0);

    gc.moveTo(500,480);
    gc.lineTo(480,0);

    gc.moveTo(500,490);
    gc.lineTo(490,0);

    gc.moveTo(500,500);
    gc.lineTo(500,0);

    gc.stroke();
}