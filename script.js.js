document.addEventListener("DOMContentLoaded", function () {
    drawCircle();
    drawRectangle();
    drawTriangle();
    drawLinearGradient();
    drawRadialGradient();
    document.getElementById("generateCanvas").addEventListener("click", generateSpecialCanvas);
});

function drawCircle() {
    let canvas = document.getElementById("circleCanvas");
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(150, 150, 70, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();
}

function drawRectangle() {
    let canvas = document.getElementById("rectangleCanvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(50, 50, 200, 100);
    ctx.stroke();
}

function drawTriangle() {
    let canvas = document.getElementById("triangleCanvas");
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(150, 50);
    ctx.lineTo(50, 250);
    ctx.lineTo(250, 250);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
}

function drawLinearGradient() {
    let canvas = document.getElementById("linearGradientCanvas");
    let ctx = canvas.getContext("2d");
    let gradient = ctx.createLinearGradient(0, 0, 300, 0);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(1, "yellow");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 300, 300);
}

function drawRadialGradient() {
    let canvas = document.getElementById("radialGradientCanvas");
    let ctx = canvas.getContext("2d");
    let gradient = ctx.createRadialGradient(150, 150, 20, 150, 150, 100);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "white");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 300, 300);
}

function generateSpecialCanvas() {
    let container = document.getElementById("specialCanvasContainer");
    container.innerHTML = "";
    
    let flagCanvas = document.createElement("canvas");
    flagCanvas.width = 300;
    flagCanvas.height = 200;
    drawIndianFlag(flagCanvas);
    container.appendChild(flagCanvas);
    
    let marathaCanvas = document.createElement("canvas");
    marathaCanvas.width = 300;
    marathaCanvas.height = 200;
    drawMarathaEmpire(marathaCanvas);
    container.appendChild(marathaCanvas);
}

function drawIndianFlag(canvas) {
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "#FF9933";
    ctx.fillRect(0, 0, 300, 66);

    ctx.fillStyle = "white";
    ctx.fillRect(0, 66, 300, 66);

    
    ctx.fillStyle = "#138808";
    ctx.fillRect(0, 132, 300, 66);
    ctx.strokeStyle = "#000080"; // Navy blue
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(150, 99, 20, 0, Math.PI * 2);
    ctx.stroke();

 
    for (let i = 0; i < 24; i++) {
        let angle = (Math.PI / 12) * i; // 360° / 24 spokes
        let x1 = 150 + Math.cos(angle) * 20;
        let y1 = 99 + Math.sin(angle) * 20;
        let x2 = 150 + Math.cos(angle) * 10; // Inner radius
        let y2 = 99 + Math.sin(angle) * 10;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(150, 99, 2, 0, Math.PI * 2);
    ctx.fillStyle = "#000080";
    ctx.fill();
}

function drawMarathaEmpire(canvas) {
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF9933";
    ctx.fillRect(0, 0, 300, 200);
    ctx.fillStyle = "white";
    ctx.font = "bold 20px Arial";
    ctx.fillText("Maratha Empire", 70, 100);
}
