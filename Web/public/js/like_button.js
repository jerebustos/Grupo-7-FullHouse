
const Listado = function (){

    return (
        <div>
            <ListadoProductos></ListadoProductos>
        </div>

    )
}


const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(Listado(), domContainer);