document.getElementById("login-btn" ).addEventListener("click",function(event){
    event.preventDefault()
    const accountNumber = document.getElementById("account-number").value;
    const pinNumber = document.getElementById("pin-number" ).value;
    if(accountNumber.length === 11){
        if(pinNumber.length === 6){
            window.location.href = "main.html"
        }
        else{
            alert("incorrect pin number")
        }
    }
    else{
        alert("Incorrect Number")
    }
})