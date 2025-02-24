document.getElementById("cashout-btn").addEventListener("click",function(event){
    event.preventDefault();
    const cashoutNumber = document.getElementById("cash-out-number").value;
    const cashoutMoney = document.getElementById("cashout-amount").value;
    convertCashoutMoney = parseFloat(cashoutMoney)
    const pin = document.getElementById("cashout-pinNumber").value;
    const balance = document.getElementById("balance").innerText;
    convertBalance = parseFloat(balance)

    if(cashoutNumber){
        if(pin.length === 4){
            const minus = convertBalance - cashoutMoney;
            document.getElementById("balance").innerText = minus;
        }
        else{
            alert("enter 4 digit valid pin number")
        }
    }
    else{
        alert("enter 11 digit valid number")
    }

})