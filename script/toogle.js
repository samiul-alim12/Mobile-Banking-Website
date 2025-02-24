document.getElementById("add-money").style.display = "block"
document.getElementById("cash-out").style.display = "none"

document.getElementById("add-money-box").addEventListener("click",function(){
    document.getElementById("add-money").style.display = "block"
    document.getElementById("cash-out").style.display = "none"
    // console.log('hello')
})
document.getElementById("cashout-box").addEventListener("click",function(){
    document.getElementById("add-money").style.display = "none"
    document.getElementById("cash-out").style.display = "block"
})