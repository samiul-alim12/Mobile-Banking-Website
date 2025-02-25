document.getElementById("cashout-btn").addEventListener("click",function(event){
    event.preventDefault();

    const cashOutNumber = document.getElementById("cash-out-number").value;
    const cashOutAmount = InputStringToNumber("cashout-amount");
    const cashOutPin = document.getElementById("cashout-pinNumber").value;
    const mainBalance = textStringToNumber("balance");
    const transactionContainer = document.getElementById("transaction-container")



    if(cashOutNumber.length === 11){
        if(cashOutAmount < mainBalance){
            if(cashOutPin.length === 4){
                const subtract = mainBalance - cashOutAmount ;
                innerTextChange("balance",subtract);


                const p = document.createElement("p");
              p.innerHTML = `
              
              <div class="flex w-full flex-col my-4 card bg-base-100 items-center justify-center rounded-box p-2 place-items-center">Cashout Money ${cashOutAmount} from this ${cashOutNumber} account</div> 
              `

              transactionContainer.appendChild(p)
            }
            else{
                alert("enter 4 digit valid pin number")
            }
        }
        else{
            alert("Please Enter Valid Amount")
        }
    }
    else{
        alert("enter valid 11 digit number")
    }






    // const cashoutNumber = document.getElementById("cash-out-number").value;
    // const cashoutMoney = document.getElementById("cashout-amount").value;
    // convertCashoutMoney = parseFloat(cashoutMoney)
    // const pin = document.getElementById("cashout-pinNumber").value;
    // const balance = document.getElementById("balance").innerText;
    // convertBalance = parseFloat(balance)

    // if(cashoutNumber){
    //     if(pin.length === 4){
    //         const minus = convertBalance - cashoutMoney;
    //         document.getElementById("balance").innerText = minus;
    //     }
    //     else{
    //         alert("enter 4 digit valid pin number")
    //     }
    // }
    // else{
    //     alert("enter 11 digit valid number")
    // }

})