window.addEventListener("load", () => {

    document.querySelector("#name").addEventListener("keyup", function(e){

        var onlyLetters = /^[A-Za-z]+$/;
        if(this.value.length < 5 || !onlyLetters.test(this.value.replaceAll(" ", "")) ){
            this.classList.remove("normal");
            this.classList.add("incorrect");
            this.classList.remove("correct");
            document.querySelector("#checkName").style.display = "none"
            document.querySelector("#checkError").style.display = "block"
            document.querySelector("#ul").innerHTML= "<li>Minimo 5 caracteres y solo letras</li>"
        }
        else{
         document.querySelector("#ul").innerHTML= ""
            this.classList.remove("incorrect");
            this.classList.add("correct")
            document.querySelector("#checkError").style.display = "none"
            document.querySelector("#checkName").style.display = "block"
        }
    })

    document.querySelector("#price").addEventListener("keyup", function(e){
        var onlyLetters = /^[0-9]+$/;
        if(!onlyLetters.test(this.value) ){
            this.classList.remove("normal");
            this.classList.add("incorrect");
            this.classList.remove("correct");
            document.querySelector("#checkPrice").style.display = "none"
            document.querySelector("#checkPriceError").style.display = "block"
            document.querySelector("#ulPrice").innerHTML= "<li>Solo numeros</li>"
        }
        else{
         document.querySelector("#ulPrice").innerHTML= ""
            this.classList.remove("incorrect");
            this.classList.add("correct")
            document.querySelector("#checkPriceError").style.display = "none"
            document.querySelector("#checkPrice").style.display = "block"
        }

    })

    document.querySelector("#accessory").addEventListener("keyup", function(e){

        var onlyLetters = /^[A-Za-z]+$/;
        if(this.value.length < 5 || !onlyLetters.test(this.value.replaceAll(" ", "")) ){
            this.classList.remove("normal");
            this.classList.add("incorrect");
            this.classList.remove("correct");
            document.querySelector("#checkAccessory").style.display = "none"
            document.querySelector("#checkAccessoryError").style.display = "block"
            document.querySelector("#ulAccessory").innerHTML= "<li>Minimo 5 caracteres y solo letras</li>"
        }
        else{
         document.querySelector("#ulAccessory").innerHTML= ""
            this.classList.remove("incorrect");
            this.classList.add("correct")
            document.querySelector("#checkAccessoryError").style.display = "none"
            document.querySelector("#checkAccessory").style.display = "block"
        }


    })
    document.querySelector("#image").addEventListener("change", function(e){
      
        let reg = /(.*?)\.(jpg|jpeg|png)$/
    
        if(!reg.test(this.value)){
            this.classList.remove("normal");
            this.classList.add("incorrect");
            this.classList.remove("correct");
            document.querySelector("#ulImage").innerHTML= "<li>Las extensiones permitidas son .jpg, .jpeg, .png</li>"
    
        }
        else{
            document.querySelector("#ulImage").innerHTML= ""
               this.classList.remove("incorrect");
               this.classList.add("correct")
           }
       })

    document.querySelector("#description").addEventListener("keyup", function(){

        if(this.value.length < 20){
            this.classList.remove("normal");
            this.classList.add("incorrect");
            this.classList.remove("correct");
            document.querySelector("#ulDescription").innerHTML= "<li>Minimo 20 caracteres</li>"
    
        }
        else{
            document.querySelector("#ulDescription").innerHTML= ""
               this.classList.remove("incorrect");
               this.classList.add("correct")
           }


    })

    
})