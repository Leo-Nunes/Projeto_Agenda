const form = document.getElementById('form-agenda');
const img = '<img src="images/Telephone.png" alt="icone de telefone" ></img>';

let adds = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputInsereNome = document.getElementById('insira-seu-nome');
    const inputDigiteTel = document.getElementById('digite-seu-telefone');  

    let add = '<tr>';
    add += `<td>${inputInsereNome.value}</td>`;
    add += `<td>${inputDigiteTel.value}</td>`;
    add += `<td>${inputDigiteTel.value  >= [16,11,13,12,19,48,71,47,15,41,22,17,95,85,61,62,65,34,31,66,92,14,27,51,54,21,67,64,37,18,24,63,45,81,44,
        68,96,69,43,53,94,79,35,83,28,86,84,32,42,38,46,91,98,49,82,55,87,75,73,93,77,89,88,33,99,74,97]
         ? img : `Não cadastrado`}</td>`; //Somente DDDs Nacionais
    add += `</tr>`;

    adds += add;

    const tabela = document.querySelector('tbody');
    tabela.innerHTML = adds;


    inputInsereNome.value = '';
    inputDigiteTel.value = '';
});

