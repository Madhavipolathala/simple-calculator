const docu=document.querySelector('.display');
const value= document.getElementById('val');
function setDisplayValue(val){
    docu.value += val;

}

function clearDisplay() {
    docu.value='';
}
function Evaluate(){
    try{
        var res=eval(docu.value);
        docu.value = res;
    }
    catch(error){
        console.log('error ')
    }
    
}