document.addEventListener("DOMContentLoaded", () => {
    let info = [];
    try {
        info = JSON.parse(localStorage.getItem("articulosCarrito")) || [];
    } catch (e) {
        info = [];
    }

    const infoDos = [];
    for (let i = 0; i < info.length; i++) {
        if (Array.isArray(info[i]) && info[i][0]) {
            infoDos.push(info[i][0]);
        } else if (info[i] && info[i].name) {
            infoDos.push(info[i]);
        }
    }

    const total = [];
    for (let i = 0; i < infoDos.length; i++) {
        const rawPrice = String(infoDos[i].price || 0).replace(/[^0-9]/g, '');
        total.push(Number(rawPrice || 0));
    }

    const precioFinal = total.reduce((acum, num) => acum + num, 0);

    const productoContainer = document.querySelector("#producto");
    if (productoContainer && infoDos.length > 0) {
        let itemsHTML = '';
        infoDos.forEach((producto, index) => {
            const rawPrice = String(producto.price || 0).replace(/[^0-9]/g, '');
            const formattedPrice = Number(rawPrice).toLocaleString('es-AR');

            itemsHTML += `
            <div class="productoCarrito" style="display: flex; align-items: center; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                <div style="display: flex; align-items: center; gap: 16px;">
                    <img src="/img/products/${producto.image}" alt="${producto.name}" style="width: 70px; height: 70px; object-fit: contain; border-radius: 10px; background: #f8fafc; padding: 4px; border: 1px solid #e2e8f0;" onerror="this.src='/img/FullhouseV7.png'; this.onerror=null;">
                    <div>
                        <h4 style="font-family: var(--font-heading); font-weight: 600; color: var(--text-main); font-size: 1.05rem; margin-bottom: 4px;">${producto.name}</h4>
                        <span style="color: var(--primary); font-weight: 700; font-size: 1.15rem;">$${formattedPrice}</span>
                    </div>
                </div>
                <button type="button" class="btn-eliminar-item" data-index="${index}" title="Eliminar producto" style="background: rgba(239, 68, 68, 0.1); border: none; color: #ef4444; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s ease;"><i class="fa-solid fa-trash-can"></i></button>
            </div>`;
        });

        itemsHTML += `
        <div style="margin-top: 24px; display: flex; justify-content: space-between; align-items: center;">
            <a class="vaciar" href="#" style="color: #ef4444; font-weight: 600; text-decoration: none; font-size: 0.9rem; display: flex; align-items: center; gap: 6px;"><i class="fa-solid fa-trash"></i> Vaciar Carrito</a>
        </div>`;

        productoContainer.innerHTML = itemsHTML;

        // Individual item delete listener
        document.querySelectorAll(".btn-eliminar-item").forEach(btn => {
            btn.addEventListener("click", () => {
                const idx = parseInt(btn.dataset.index);
                info.splice(idx, 1);
                localStorage.setItem("articulosCarrito", JSON.stringify(info));
                window.location.reload();
            });
        });

        // Vaciar carrito listener
        const vaciarBtn = document.querySelector(".vaciar");
        if (vaciarBtn) {
            vaciarBtn.addEventListener("click", (e) => {
                e.preventDefault();
                localStorage.removeItem("articulosCarrito");
                window.location.reload();
            });
        }
    }

    const totalEl = document.querySelector("#total");
    const subTotalEl = document.querySelector("#subTotal");
    if (totalEl) totalEl.innerHTML = `$${precioFinal.toLocaleString('es-AR')}`;
    if (subTotalEl) subTotalEl.innerHTML = `$${precioFinal.toLocaleString('es-AR')}`;
});
