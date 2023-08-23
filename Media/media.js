function media(){
    var n1 = document.getElementById("valor1").value;
    var n2 = document.getElementById("valor2").value;
    var n3 = document.getElementById("valor3").value;
    var n4 = document.getElementById("valor4").value;
    var n5 = (parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4)) / 4;
    alert(n5)
}

function limpar(){
    document.getElementById('valor1').value = "";
    document.getElementById('valor2').value = "";
    document.getElementById('valor3').value = "";
    document.getElementById('valor4').value = "";
}