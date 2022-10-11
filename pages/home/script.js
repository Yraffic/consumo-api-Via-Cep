const cepInput = document.querySelector('#cep')
const cidadeInput = document.querySelector('#cidade')
const ruaInput = document.querySelector('#rua')
const texto = document.querySelector('.valor')

cepInput.addEventListener('change', function () {

    if (cepInput.value.length !== 8) {
        return texto.textContent = 'CEP ERRADO, DEVE TER  8 NUMEROS'
    }

    const promiseResposta = fetch('https://viacep.com.br/ws/' + cepInput.value + '/json/');

    promiseResposta.then(function (resposta) {
        const promisebody = resposta.json();

        promisebody.then(function (body) {
            cidadeInput.value = body.localidade
            ruaInput.value = body.logradouro
        })
    })
   texto.textContent = ''
 
})