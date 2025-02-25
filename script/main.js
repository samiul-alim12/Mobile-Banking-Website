document.getElementById("add-money-btn").addEventListener("click",function(event){
    event.preventDefault()

    const number = document.getElementById("number").value;
    const amount = InputStringToNumber("add-amount");
    const pinNumber = document.getElementById("pin-number").value;
    const balance =  textStringToNumber("balance")
    const transactionContainer = document.getElementById("transaction-container")
    const select = document.getElementById("select-bank").value;

    if(number.length === 11){
        if(amount > 0){
            if(pinNumber.length ===4){
              const  sum = amount + balance;
              innerTextChange("balance",sum)  


              const p = document.createElement("p");
              p.innerHTML = `
              
              <div class="flex w-full flex-col my-4 card bg-base-100 items-center justify-center rounded-box p-2 place-items-center">Added Money form <h2 class=" text-2xl"> ${select} </h2> amount ${amount} from this ${number} account</div> 
              `

              transactionContainer.appendChild(p)
            }
            else{
                alert("enter 4 digit pin number")
            }
        }
        else{
            alert("please enter valid amount")
        }
    }
    else{
        alert("please enter 11 digit valid number")
    }





    //     const addMoney = document.getElementById("add-amount").value;
//     const convertAddMoney = parseFloat(addMoney)
//     const pinNumber = document.getElementById("pinNumber").value
//     const balance = document.getElementById("balance").innerText;
//     const connvertBalance = parseFloat(balance)
//     const number = document.getElementById("number").value

//     if(pinNumber.length === 4){
//         if(convertAddMoney){
//            if(number && number.length === 11){
//             const sum = connvertBalance + convertAddMoney;
//             document.getElementById("balance").innerText = sum
//            }
//            else{
//             alert("enter your 11 digit account number")
//            }
//         }
//         else{
//             alert("please enter your amount")
//         }
//     }
//     else{
//         alert("enter valid 4 digit pin number")
//     }
})