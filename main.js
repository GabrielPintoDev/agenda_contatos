const form = document.getElementById('form-contato')
const contato = []
const numero = []
const ddd = []

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-nome');
    const inputDdd = document.getElementById('ddd');

    if (contato.includes(inputNomeContato.value)){
        alert (`O contato: ${inputNomeContato.value} já foi inserido!`);
    } else {
        contato.push(inputNomeContato.value);
        numero.push(inputNumero.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>+${inputDdd.value} ${inputNumero.value}</td>`
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumero.value = '';
    inputDdd.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

document.getElementById('ddd').addEventListener('input', function (e) {
    const value = e.target.value;
    if (value.length > 2) {
        e.target.value = value.slice(0, 2);
    }
});

document.getElementById('numero-nome').addEventListener('input', function (e) {
    const value = e.target.value;
    if (value.length > 9) {
        e.target.value = value.slice(0, 9);
    }
});
