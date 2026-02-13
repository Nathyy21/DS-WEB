function trocarFoto1(){
    document.getElementById("imagem1").setAttribute("src","imagem2.jpg");//coloco o atributo src e qual imagem fica no src
    document.getElementById("imagem1").style.width = "300px";
}

function trocarFoto2(){
    
    document.getElementById("imagem1").setAttribute("src","imagem1.jpg");//coloco o atributo src e qual imagem fica no src
    document.getElementById("imagem1").style.width = "300px";
}

function mostrar_src(){
    console.log(document.getElementById("imagem1").getAttribute("src")); //pego o nome que está dentro do atributo src

}