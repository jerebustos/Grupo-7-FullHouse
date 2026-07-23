document.addEventListener("DOMContentLoaded", () => {
    const btnAgregar = document.querySelector("#agregar") || document.querySelector(".btn-buy-now");
    
    if (btnAgregar) {
        btnAgregar.addEventListener("click", (e) => {
            e.preventDefault();

            const product = {
                id: btnAgregar.dataset.id || "1",
                name: btnAgregar.dataset.name || (document.querySelector(".product-detail-title") ? document.querySelector(".product-detail-title").innerText.trim() : "Producto"),
                price: btnAgregar.dataset.price || (document.querySelector(".product-detail-price") ? document.querySelector(".product-detail-price").innerText.replace(/[^0-9]/g, '') : "0"),
                image: btnAgregar.dataset.image || (document.querySelector(".product-detail-gallery img") ? document.querySelector(".product-detail-gallery img").getAttribute("src").replace("/img/products/", "") : "FullhouseV7.png")
            };

            const articulosCarrito = JSON.parse(localStorage.getItem("articulosCarrito")) || [];
            articulosCarrito.push([product]);
            localStorage.setItem("articulosCarrito", JSON.stringify(articulosCarrito));

            const iconoCarrito = document.querySelector(".icono_carrito");
            if (iconoCarrito) {
                iconoCarrito.style.transform = "rotate(360deg)";
                iconoCarrito.style.color = "#00C0FF";
            }

            window.location.href = "/carrito";
        });
    }
});
