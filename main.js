var mouseEvent = "empty";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var colo = "empty";
var widt = "emtpy";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown()
{
    colo = document.getElementById("col").value;
    widt = document.getElementById("num").value;
    mouseEvent = "mousedown"
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup()
{
    mouseEvent = "mouseup"
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave()
{
    mouseEvent = "mouseleave"
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e)
{
    cpx = e.clientX - canvas.offsetLeft;
    cpy = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = colo;
        ctx.lineWidth = widt;
        ctx.moveTo(lpx,lpy);
        ctx.lineTo(cpx,cpy);
        ctx.stroke();
    }
    lpx = cpx;
    lpy = cpy;
}
canvas.addEventListener("touchstart",my_touchstart)
function my_touchstart(e)
{
    lptx = cptx;
        lpty = cpty;
}
canvas.addEventListener("touchmove",my_touchmove)
function my_touchmove(e)
{
    cptx = e.touches[0].clientX - canvas.offsetLeft;
    cpty = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = colo;
        ctx.lineWidth = widt;
        ctx.moveTo(lptx,lpty);
        ctx.lineTo(cptx,cpty);
        ctx.stroke();
        lptx = cptx;
        lpty = cpty;
}

