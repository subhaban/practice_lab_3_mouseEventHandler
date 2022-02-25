

const myButton = document.getElementById("growbtn");
const flexibox = document.getElementById("flexibox");

   myButton.addEventListener('click', e => {
   
    var answer = Number(prompt("Want to increase by how many pixels?"));

  
    flexibox.style.transform = `scale(${answer})`;
    
});

//function myGrow(){
  //const changeSize = document.getElementById("flexibox");
//   changeSize.style.transform =`translate()`


function mouseover(e){
      

          flexibox.innerHTML = `x:${e.pageX}, Y:${e.clientY}`;

 console.log(`x:${e.clientX}, Y:${e.clientY}`);
 console.log(`x:${e.pageX}, Y:${e.pageY}`);


}
   flexibox.addEventListener('mousedown',mouseover);


       //document.innerHTMl = e.offsetX + ', ' + e.offsetY;


//console.log(`$(flexibox.clientX")`);
 
 /*const point = document.querySelector(".point");

 //create shortcut constants
const demo  = document.querySelector('.demo');
const point = document.querySelector('#point');

//detect mousedown events and handle them.
demo.addEventListener('mousemove', (e) => {
    point.innerHTML = e.offsetX + ', ' + e.offsetY;
    
    //open the JS console to see the output
    console.log("Client: " , e.clientX , e.clientY)
    console.log("Page: " , e.pageX , e.pageY)
    console.log("Screen: " , e.screenX , e.screenY)
    console.log("Event Object: ", e);
});*/



 