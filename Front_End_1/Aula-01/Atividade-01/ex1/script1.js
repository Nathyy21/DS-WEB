let nome = prompt("Digite seu nome:");
let sobrenome = prompt("Digite seu sobrenome:");

if(nome && sobrenome == null){
    alert("Preencha os campos!");
}
else{
    alert("Olá "+ nome + " " + sobrenome + "!");
}