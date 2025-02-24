document.getElementById("add-money-btn").addEventListener("click",function(event){
    event.preventDefault()
    const addMoney = document.getElementById("add-amount").value;
    const convertAddMoney = parseFloat(addMoney)
    const pinNumber = document.getElementById("pinNumber").value
    const balance = document.getElementById("balance").innerText;
    const connvertBalance = parseFloat(balance)

    if(pinNumber.length === 4){
        const sum = connvertBalance + convertAddMoney;
        document.getElementById("balance").innerText = sum
    }
    else{
        console.log("erree")
    }
})