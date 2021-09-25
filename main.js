
var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 2;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    var width = screen.width;  
new_width = screen.width - 70;
new_height = screen.height - 300;

        
    }
if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_hight;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    console.log("my_touchstart");

    last_position_of_x = e.touches[0].clentX - canvas.offsetleft
    last_position_of_y = e.touches[0].clentY - canvas.offsettop
}
canavs.addEventListene ("touchmove" , my_touchmove);
function my_touchmove(e)
{


    console.log("my_touchmove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetleft;
    current_position_of_touch_y =  e.touches[0].clientX - canvas.offsettop;

    ctx.beginpath();
    ctx.strokstyle = color;
    ctx.linewidth = width_of_line;

    console.log("lastposition of x and y coordinates = ")
    console.log("x =" + last_position_of_x + " y =" + last_position_of_x)
ctx.movemoveto(current_position_of_touch_x, current_position_of_touch_y)
ctx.stroke();


last_position_of_x  = current_position_of_touch_x;
last_position_of_y = current_position_of_touch_y;
}