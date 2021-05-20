window.addEventListener("load", () =>{

const info = JSON.parse(localStorage.getItem("articulosCarrito"));
const infoDos = [];
for (let i = 0; i < info.length; i++){    
    infoDos.push((info[i][0]))};


infoDos.forEach(producto => { 

    document.querySelector("#producto").innerHTML += `
    <div class="productoCarrito"><img src="img/products/${producto.image}" alt=${producto.image} class="Batidora">
         <h3 class="descripcion">${producto.name}</h3>
         <h3 class="precio" id="precio">$${producto.price}</h3></div>


    
    
    `
    
});






})