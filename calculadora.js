function clicar(n){
    
   var res =  document.getElementById('del').innerHTML
  document.getElementById('del').innerHTML = res + n

    
}
function deletar(){
    document.getElementById('del').innerHTML = ''
    
}
function mostrar(){
    var res =  document.getElementById('del').innerHTML
    if(res){
        document.getElementById('del').innerHTML = eval(res)
    }
}