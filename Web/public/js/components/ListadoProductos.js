

const ListadoProductos = () => {

    
    const fetchProductos = function (limit, skip) {
 
        axios.get(`http://localhost:3000/producto/api/list/limit?limitProduct=${limit}&offset=${skip}`) 
        .then(function(response) {
            const data = response.data.data
            console.log(data)
    
            return data
        })
    }

   


    return (<div> 
         
        
         
    </div>)
}



