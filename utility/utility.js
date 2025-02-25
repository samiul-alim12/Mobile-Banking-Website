function InputStringToNumber(id){
    const value = document.getElementById(id).value;
    const convertValue = parseFloat(value);
    return convertValue
}
function textStringToNumber(id){
    const value = document.getElementById(id).innerText;
    const convertValue = parseFloat(value);
    return convertValue;
}
function innerTextChange(id,value){
    const changeValue = document.getElementById(id).innerText = value
    return changeValue;
}
function handleToggle(id,status){
    const toggle = document.getElementById(id).style.display = status
    return toggle 
}