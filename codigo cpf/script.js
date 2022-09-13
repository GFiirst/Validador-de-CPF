$('#botao').click(
    function(){
        
            let cpf = document.getElementById('inputa').value
            let total=0

            for(i=0; i<=8; i++){
                total=total+cpf[i] * (10-i)
            }

            resto = total % 11
            
            let digito1 = 11 - resto
            if(digito1>9){
                digito1=0
            }
            for(i=0; i<=9; i++){
                total=total+cpf[i] * (11-i)
            }
            resto = total % 11
            let digito2 = 11 - resto
            if(digito2>9){
                digito2=0
            }
            console.log(digito1)
            console.log(digito2)
            if((cpf[9] == digito1) && (cpf[10] == digito2)){
                alert('cpf é valido')
            }
            else{
                alert('cpf invalido')
            }
    }
)