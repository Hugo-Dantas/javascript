function clicou(){
    n1=parseInt(prompt("Digite o primeiro número"))
    n2=parseInt(prompt("Digite o segundo número"))

    soma=n1+n2
    sub=n1-n2
    mul=n1*n2
    div=n1/n2

    document.getElementById('#somar').innerHTML=`<p> sua soma sera ${soma}<br>sua subtração sera ${sub}<br>sua multiplicação sera ${mul}<br>e sua divisao sera ${div}`

}