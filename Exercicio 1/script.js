const parser = new DOMParser();
const produtos = parser.parseFromString(`
<produtos>
  <produto>
    <titulo>Camiseta Esportiva</titulo>
    <descricao>Com tecnologia inovadora que, além de controlar o calor, ajuda a reduzir a transpiração.</descricao>
    <preco>35,50</preco>
  </produto>
  <produto>
    <titulo>Bermuda Jeans</titulo>
    <descricao>Bordada no estilo ROCK! 100% Algodão.</descricao>
    <preco>54,62</preco>
  </produto>
  <produto>
    <titulo>Calça Moletom</titulo>
    <descricao>Básica com modelagem reta, perfeita para o look confortável, com forro peludinho.</descricao>
    <preco>79,90</preco>
  </produto>
</produtos>
`, 'text/xml');

let titulos = [];
let dataItem = [];
let descricoes = [];
let precos = [];

produtos.querySelectorAll('titulo').forEach(e => {
    titulos.push(e.textContent);
    dataItem.push(e.textContent.toLocaleLowerCase().replace(' ', '-').replace('ç','c'));
});
produtos.querySelectorAll('descricao').forEach(e => {
    descricoes.push(e.textContent);
});
produtos.querySelectorAll('preco').forEach(e => {
    precos.push(e.textContent);
});

const section = document.createElement('section');
section.classList.add("produto-lista");

for(let i = 0; i < 3; i++){
    let div = document.createElement("div");
    div.classList.add("produtos-lista__produto-item");
    div.setAttribute('data-item', dataItem[i]);
    
    let h1 = document.createElement("h1");
    h1.innerText = titulos[i];

    let p = document.createElement("p");
    p.innerText = descricoes[i];

    let span = document.createElement("span");
    span.innerText = precos[i];

    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(span);

    section.appendChild(div);
}
document.getElementsByTagName('body')[0].appendChild(section);

