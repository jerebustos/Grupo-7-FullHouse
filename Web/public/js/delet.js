
var modal = document.getElementById('id01');


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



/*window.addEventListener("load" ,() => {

    const botonDelet = document.querySelector("#delet");

    botonDelet.addEventListener("click", (e) => {
        e.preventDefault();
    
        if(window.confirm("¿Esta seguro de eliminar la cuenta?")){
           document.querySelector("#form").submit()
    
        }
            
    })
})

*/