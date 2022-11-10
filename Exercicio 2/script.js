const HeaderTabela = ['Nome', 'especie', 'Pais', 'Exemplares']
const ListAnimais =  [
    {
        nome : 'Onça Pintada',
        especie : 'Panthera onca',
        pais : 'Brasil',
        exemplares: 10000
    },
    {
        nome : 'Lobo Guara',
        especie : 'Chrysocyon brachyurus',
        pais : 'Brasil',
        exemplares: 23000
    },
    {
        nome : 'Panda Gigante',
        especie : 'Ailuropoda melanoleuca',
        pais : 'Japão',
        exemplares: 2500
    },
    {
        nome : 'Baleia-Fin',
        especie : 'Balaenoptera physalus',
        pais : 'Mundo',
        exemplares: 3000
    },
    {
        nome : 'Arara Azul de Lear',
        especie : 'Anodorhynchus leari',
        pais : 'Brasil',
        exemplares: 1200
    },
    {
        nome : 'Peguim Africano',
        especie : 'Spheniscus demersus',
        pais : 'Africa do Sul',
        exemplares: 50000
    },
    {
        nome : 'Peixe-Boi Marinho',
        especie : 'Trichecus manatus Linnaeus',
        pais : 'Brasil',
        exemplares: 1000
    },
    {
        nome : 'Gorila da Montanha',
        especie : 'Gorilla beringei beringei',
        pais : 'Republica Democratica do Congo',
        exemplares: 1000
    },
    {
        nome : 'Condor Californiano',
        especie : 'Gymnogyps californianus',
        pais : 'Estados Unidos / Mexico',
        exemplares: 430
    } ,
    {
        nome : 'Baleia Azul',
        especie : 'Balaenoptera musculus',
        pais : 'Oceano Pacifico, Antartico e Indico',
        exemplares: 2000
    }   
]

const div = document.createElement('div');
    div.setAttribute('id', 'table-div');

const tabela = document.createElement('table')

//Criando o Header
const thead = document.createElement('thead')
const tr = document.createElement('tr')

HeaderTabela.forEach(e => {
    const th = document.createElement('th')
    th.innerText = e;
    thead.appendChild(th);
});

thead.appendChild(tr)
tabela.appendChild(thead)

//Criando o tbody
const tbody = document.createElement('tbody');
ListAnimais.forEach(e =>{
    let trAnimais = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')
    
    td1.innerText = e.nome;
    td2.innerText = e.especie;
    td3.innerText = e.pais;
    td4.innerText = e.exemplares;

    trAnimais.appendChild(td1)
    trAnimais.appendChild(td2)
    trAnimais.appendChild(td3)
    trAnimais.appendChild(td4)
    
    tbody.appendChild(trAnimais)
});
tabela.appendChild(tbody)

//Criando o footer
const tfoot = document.createElement('tfoot');
const trFooter = document.createElement('tr');

let exemplares = 0;
ListAnimais.forEach(e =>{
    exemplares += e.exemplares
});
trFooter.innerText = `Nº de exemplares: ${exemplares}`
tfoot.appendChild(trFooter);
tabela.appendChild(tfoot);


//Colocando a tabela no HTML
div.appendChild(tabela)
document.body.appendChild(div)