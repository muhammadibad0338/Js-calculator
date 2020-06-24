function getnumber(num){
    //console.log(num)
    var result = document.getElementById("result");
    result.value += num;
}
function clearresult(){
    var result = document.getElementById("result");
    result.value=""
}
function backslash(){
    var result = document.getElementById("result");
    result.value = result.value.slice(0,length-1)
}
function equalfun(){
    var result = document.getElementById("result");
    result.value =eval(result.value)
}