const firstViewButton=document.getElementById("rootFirstView");
const secondtViewAppear=document.getElementById("rootSecondView");
const pressButton= document.getElementById("buttonOne");

function displayView(){
   firstViewButton.style.display= "none";
   secondtViewAppear.style.display= "block";
}
export {firstViewButton, secondtViewAppear, pressButton, displayView}
