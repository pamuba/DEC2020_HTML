var canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext("2d");

//Rect
// c.fillStyle = 'rgba(255,0,0,.3)'
// c.fillRect(100,100,100,100)

// c.fillStyle = 'rgba(0,255,0,.3)'
// c.fillRect(200,200,100,100)

// c.fillStyle = 'rgba(0,0,255,.3)'
// c.fillRect(300,300,100,100)

//Lines
// c.beginPath()
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.lineTo(1,1);
// c.strokeStyle="red";
// c.stroke();


// c.beginPath()
// c.moveTo(150,400);
// c.lineTo(350,100);
// c.strokeStyle="blue";
// c.stroke();


//arc
for (let i = 0; i < 2000; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath()
    c.arc(x,y,30,0,Math.PI*2,true);
    c.strokeStyle="#"+i*3;
    c.stroke();
}
