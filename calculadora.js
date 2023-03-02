$(function (){
    var numero_um;
    var numero_dois;
    var operador;

    var visor = $("#visor");

    // Quando o usuário clicar no botão numérico, deve ser adicionado o numero clicado no visor.

    // Cria um evento para o clique no botão numérico.
    $('.btn_nro').on('click', function(){
        // O this se refere ao numero clicado.
        // Pega o conteudo do botão que foi clicado e salva na variavel numero.
        let numero = $(this).html();

        // Pega o valor do visor e guarda na variavel visor.
        let nro_tela = visor.val();

        // Adiciona no visor o valor anterior e o numero clicado.
        visor.val(nro_tela + numero);
    });

    // Quando clicar num operador, Salvar o numero que tava digitado. Apagar o visor. Salvar a operação que foi clicada. Dar erro caso não tenha um numero digitado.

    $("#btn_soma").on('click', function(){
        // Caso o valor do visor seja vazio
        if(visor.val() == ''){
            // Mostra um alerta
            alert('Digite um numero!');
            // Para a execução da função
            return;
        }

        numero_um = visor.val();
        visor.val('');
        operador = '+';
    });

    // Quando clicar no botão igual, vai fazer o calculo de acordo com o operador salvo e mostrar o resultado no visor;

    $("#btn_igual").on('click', function(){
        if (visor.val() == "") {
            // Mostra um alerta
            alert("Digite um numero!");
            // Para a execução da função
            return;
        }

        // Guarda o segundo numero no visor.
        numero_dois = visor.val();

        if(operador == '+'){
            // Transforma os numeros de string para float com a função parseFloat
            let resultado = parseFloat(numero_um) + parseFloat(numero_dois);

            // Bota o resultado no visor.
            visor.val(resultado);
        }
    });

});