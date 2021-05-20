window.addEventListener("load", () =>{
    
const info = JSON.parse(localStorage.getItem("articulosCarrito"));
const infoDos = [];
const total = [];


for (let i = 0; i < info.length; i++){    
    infoDos.push((info[i][0]))};

 for (let i = 0; i < infoDos.length; i++) {
     total.push(Number(infoDos[i].price))
     ;
     
 }

 const precioFinal = total.reduce(function (acum, num) {
    return acum + num;
  }, 0);

  
   
infoDos.forEach(producto => { 

    document.querySelector("#producto").innerHTML += `
    <div class="productoCarrito"><img src="img/products/${producto.image}" alt=${producto.image} class="Batidora">
         <h3 class="descripcion">${producto.name}</h3>
         <h3 class="precio" id="precio">$${producto.price}</h3></div>`
    
}


);

document.querySelector("#total").innerHTML=`$${precioFinal}`
document.querySelector("#subTotal").innerHTML=`$${precioFinal}`

document.querySelector(".vaciar").addEventListener("click", ()=> {
    localStorage.removeItem("articulosCarrito")
    })

})




