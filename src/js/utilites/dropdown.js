/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

const dropdowns = document.querySelectorAll('.dropbtn');
console.log(dropdowns);
for(let i=0;i<dropdowns.length;i++){
    dropdowns[i].addEventListener('click',(e)=>{
        let x = e.target;
        if(x.classList.contains('up')){
            x.classList.remove('up');
            x.classList.add('down');
        }else{
            x.classList.remove('down');
            x.classList.add('up')
        }
        x =e.target.nextSibling.nextSibling;
        x.classList.toggle("show");
    })
}
// function myFunction(e) {
    
// }
  