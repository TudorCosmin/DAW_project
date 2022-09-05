window.addEventListener("load",function(){
    document.getElementById("form_inreg").onsubmit=function(){
    
        if (document.getElementById("parl").value!=document.getElementById("rparl").value){
            alert("Parolele nu coincid!");
            return false;
        }
        return true;
    }
});