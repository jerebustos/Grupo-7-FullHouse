window.addEventListener("load", () => {
   
   document.querySelector("#name").addEventListener("keyup", function(e){

    var onlyLetters = /^[A-Za-z]+$/;
       if(this.value.length < 3 || !onlyLetters.test(this.value.replaceAll(" ", "")) ){
           this.classList.remove("normal");
           this.classList.add("incorrect");
           this.classList.remove("correct");
           document.querySelector("#checkName").style.display = "none"
           document.querySelector("#checkError").style.display = "block"
           document.querySelector("#ul").innerHTML= "<li>Minimo 3 caracteres y solo letras</li>"
       }
       else{
        document.querySelector("#ul").innerHTML= ""
           this.classList.remove("incorrect");
           this.classList.add("correct")
           document.querySelector("#checkError").style.display = "none"
           document.querySelector("#checkName").style.display = "block"
       }
   })
   

   document.querySelector("#email").addEventListener("keyup", async function(e){
      
    let {data} = await axios.get("http://localhost:3000/usuario/api/list")
    
   
    let resultado = data.email.filter( email => email == this.value)
    
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
   
    
    if(!re.test(this.value)){
        this.classList.remove("normal");
        this.classList.add("incorrect");
        this.classList.remove("correct");
        document.querySelector("#checkEmail").style.display = "none"
        document.querySelector("#checkEmailError").style.display = "block"
        document.querySelector("#ulEmail").innerHTML= "<li>tiene que ser un mail valido</li>"

    }


    else if(resultado.length > 0){
        this.classList.remove("normal");
        this.classList.add("incorrect");
        this.classList.remove("correct");
        document.querySelector("#checkEmail").style.display = "none"
        document.querySelector("#checkEmailError").style.display = "block"
        document.querySelector("#ulEmail").innerHTML= "<li>El email ya esta registrado</li>"
    }
    else{
        document.querySelector("#ulEmail").innerHTML= ""
           this.classList.remove("incorrect");
           this.classList.add("correct")
           document.querySelector("#checkEmailError").style.display = "none"
           document.querySelector("#checkEmail").style.display = "block"
       }

   })
   
   document.querySelector("#pass").addEventListener("keyup", function(e){
    let decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/ 
    if(!decimal.test(this.value)){
    this.classList.remove("normal");
           this.classList.add("incorrect");
           this.classList.remove("correct");
           document.querySelector("#checkPass").style.display = "none"
           document.querySelector("#checkPasslError").style.display = "block"
           document.querySelector("#ulPass").innerHTML= "<li>'Minimo 8 caracteres, 1 mayuscula, 1 numero y 1 caracter special'</li>"
       }
       else{
        document.querySelector("#ulPass").innerHTML= ""
           this.classList.remove("incorrect");
           this.classList.add("correct")
           document.querySelector("#checkPasslError").style.display = "none"
           document.querySelector("#checkPass").style.display = "block"
       }}
   )
   
   document.querySelector("#passConfirm").addEventListener("keyup", function(e){
       if(this.value != document.querySelector("#pass").value){
       this.classList.remove("normal");
       this.classList.add("incorrect");
       this.classList.remove("correct");
       document.querySelector("#checkPassConfirm").style.display = "none"
       document.querySelector("#checkPassConfirmError").style.display = "block"
       document.querySelector("#ulPassConfirm").innerHTML= "<li>'No coinciden las contraseñas'</li>"
   }
   else{
    document.querySelector("#ulPassConfirm").innerHTML= ""
       this.classList.remove("incorrect");
       this.classList.add("correct")
       document.querySelector("#checkPassConfirmError").style.display = "none"
       document.querySelector("#checkPassConfirm").style.display = "block"
   }

       
   })
   
    
})
  



document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

   const moveContent= document.getElementById("move-content");
   if (moveContent) {
    moveContent.classList.toggle('move-container-all')
   }
    document.getElementById("show-menu").classList.toggle('show-lateral');
}

