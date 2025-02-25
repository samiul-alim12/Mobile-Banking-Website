
handleToggle("cash-out","none")
handleToggle("add-money","block")


document.getElementById("add-money-box").addEventListener("click",function(){
    handleToggle("cash-out","none")
    handleToggle("add-money","block")
})
document.getElementById("cashout-box").addEventListener("click",function(){
    handleToggle("cash-out","block")
    handleToggle("add-money","none")
})