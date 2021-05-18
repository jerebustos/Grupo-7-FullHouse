window.addEventListener("load", () => {
   
    document.querySelector("#name").addEventListener("keyup", function(e){
 
     var onlyLetters = /^[A-ZÁÉÍÓÚÑa-záéíóúñ]+$/;
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

     document.querySelector("#lastName").addEventListener("keyup", function(e){
 
     var onlyLetters = /^[A-ZÁÉÍÓÚÑa-záéíóúñ]+$/;
        if(this.value.length < 3 || !onlyLetters.test(this.value.replaceAll(" ", "")) ){
            this.classList.remove("normal");
            this.classList.add("incorrect");
            this.classList.remove("correct");
            document.querySelector("#checkLastName").style.display = "none"
            document.querySelector("#checkLastError").style.display = "block"
            document.querySelector("#ulLastName").innerHTML= "<li>Minimo 3 caracteres y solo letras</li>"
        }
        else{
         document.querySelector("#ulLastName").innerHTML= ""
            this.classList.remove("incorrect");
            this.classList.add("correct")
            document.querySelector("#checkLastError").style.display = "none"
            document.querySelector("#checkLastName").style.display = "block"
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
        }
        
    }
        
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
    
    document.querySelector("#avatar").addEventListener("change", function(e){
      
     let reg = /(.*?)\.(jpg|jpeg|png)$/
 
     if(!reg.test(this.value)){
         this.classList.remove("normal");
         this.classList.add("incorrect");
         this.classList.remove("correct");
         document.querySelector("#ulAvatar").innerHTML= "<li>Las extensiones permitidas son .jpg, .jpeg, .png</li>"
 
     }
     else{
         document.querySelector("#ulAvatar").innerHTML= ""
            this.classList.remove("incorrect");
            this.classList.add("correct")
        }
    })

})