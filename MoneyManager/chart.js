// SELECT CHART ELEMENT
const chart = document.querySelector(".chart");

// CREATE CANVAS ELEMMENT
const canvas = document.createElement("canvas");
canvas.width = 250;
canvas.height = 250;

// APPEND CANVAS TO CHART ELEMENT
chart.appendChild(canvas);

// TO DRAW ON CANVAS, WE NEED TO GET CONTEXT OF CANVAS
const ctx = canvas.getContext("2d");

// CHANGE THE LINE WIDTH
ctx.lineWidth = 40;

// CIRCLE RADIUS
const R = 50;

function drawCircle(color, ratio, anticlockwise){

    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc( canvas.width/2, canvas.height/2, R, 0, ratio * 2 * Math.PI, anticlockwise);
    ctx.stroke();
}

function updateChart( income, outcome){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let ratio = income / (income+outcome);

    drawCircle("#AFD275", - ratio, true);
    drawCircle("#E7717D", 1 - ratio, false);
}