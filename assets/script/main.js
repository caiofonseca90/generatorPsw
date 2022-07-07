const gerarSenha = document.querySelector('.reloadGen');
const mostraSenha = document.querySelector('.input-gen');
const copiarSenha = document.querySelector('.btn-Copy')
const caracterQuantidade = document.querySelector('.tamanho-gen');
const caracterMostra = document.querySelector('.valor-caract')
const msg = document.querySelector('.text-msg');


// Valida a quantidade de caracteres e exibe uma mensagem de alerta.
function validaQtdCaracter(){
    let contador = caracterQuantidade.value;
    if( contador < 4 || contador > 20 ){
        msg.innerHTML = " Deve conter entre 4 e 20";
        msg.style.color = "goldenrod";
        mostraSenha.value = '';
        mostraSenha.style.color = 'transparent';
        caracterQuantidade.value = '';
        copiarSenha.disabled = true;
    }else{
        msg.innerHTML = "";
        mostraSenha.style.color = 'orange';
        copiarSenha.disabled = false;
    }
}

// Cria o evento que copia a senha gerada e exibe uma mensagem de alerta.
copiarSenha.addEventListener('click',copiar);

function copiar(){
    mostraSenha.select();
    document.execCommand("copy");
    alert("Senha copiada com sucesso.")
}

// Cria o evento que gera a senha e faz a validação se a senha é fraca/media/forte.
gerarSenha.addEventListener('click',gerador); // adciona ao elemento que gera a senha, o evento de clicar e chama a funçao responsavel

function gerador() {
    let senha = '';
    let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*()_+-=[]{}|;:?,.<>/";
    let qtdCaracteresLength = caracteres.length;
    let contador = caracterQuantidade.value;
    
    for (let i = 0; i < contador; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * qtdCaracteresLength));
    }
    
    validaQtdCaracter();    

    if(senha.length >=4 && senha.length <=8){
        msg.innerHTML = "Senha FRACA";
        msg.style.color = "red";
    }if(senha.length >=9 && senha.length <=14){
        msg.innerHTML = "Senha MÈDIA";
        msg.style.color = "orange";
    }if(senha.length >=15 && senha.length <=20){
        msg.innerHTML = "Senha FORTE";
        msg.style.color = "lightgreen";
    }
    
    mostraSenha.value = senha;
     // chama a função que faz a validação da quantidade de caracteres.
     
}

// Cria efeito ao botao toda vez que gera uma nova senha.


    
   
