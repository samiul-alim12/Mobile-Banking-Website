document.getElementById("transfer-money-btn").addEventListener("click",function(event){
    event.preventDefault()
    const transferNumber = document.getElementById("transfer-number").value;
    const transferAmount = InputStringToNumber("transfer-amount")
    const mainBalance = textStringToNumber("balance");
    const pinNumber = document.getElementById("transfer-pinNumber").value;
    const transactionContainer = document.getElementById("transaction-container")


    if(transferNumber.length === 11){
        if(transferAmount >0){
            if(pinNumber.length ===4){
                const minus = mainBalance - transferAmount;
                innerTextChange("balance",minus);

                const p = document.createElement("p");
                p.innerHTML = `
                
                <div class="flex w-full flex-col my-4 card bg-base-100 items-center justify-center rounded-box p-2 place-items-center">transfer Money ${transferAmount} to this ${transferNumber} account</div> 
                `
                transactionContainer.appendChild(p)
            }
            else{
                alert("enter 4 digit pin number")
            }
        }   
        else{
            alert("enter valid amount")
        }
    }
    else{
        alert("plese enter 11 digit valid number")
    }
})