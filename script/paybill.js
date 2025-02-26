document.getElementById("pay-btn").addEventListener("click",function(event){
    event.preventDefault();
    
    const number = document.getElementById("pay-number").value;
    const  payAmount = InputStringToNumber("pay-amount");
    const mainBalance =textStringToNumber("balance");
    const pin =  document.getElementById("pay-pin-number").value;
    const transactionContainer = document.getElementById("transaction-container");
    const bank = document.getElementById("select-banks").value;
    if(number.length === 11){
            if(payAmount < mainBalance){
                if(pin.length === 4){
                const sum = mainBalance - payAmount;
                innerTextChange("balance",sum);


                const p = document.createElement("p");
                p.innerHTML = `
                
                <div class="flex w-full flex-col my-4 card bg-base-100 items-center justify-center rounded-box p-2 place-items-center">pay Money form <h2 class=" text-2xl"> ${bank} </h2> amount ${payAmount} from this ${number} account</div> 
                `
                transactionContainer.appendChild(p)
                }
                else{
                    alert("enter 4 digit valid pin number")
                }
            
        }
        else{
            alert("enter amount to pay")
        }
    }
    else{
        alert("enter 11 digit valid number")
    }
})