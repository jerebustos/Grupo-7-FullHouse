
const info = JSON.parse(localStorage.getItem("articulosCarrito"))

window.addEventListener("load", async () => {

    const {data}= await axios.get("http://localhost:3000/producto/api/list");

    
    
document.querySelector("#agregar").addEventListener("click", function(e){

    document.querySelector(".icono_carrito").style.transform = "rotate(360deg)";
    document.querySelector(".icono_carrito").style.color= "#00C0FF"
   const nameProduct = (document.querySelector("#name").innerHTML);

   const paraElCarrito2 = info ? [...info] : [];
   
   const paraElCarrito = data.data.filter(producto => ((producto.name).replaceAll(" ", "")) == ((nameProduct).replaceAll(" ", "")))
   
   paraElCarrito2.push(paraElCarrito)

   localStorage.setItem("articulosCarrito", JSON.stringify(paraElCarrito2))

  

   
   
   
   });


})


