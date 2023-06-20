const elements = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'}
];

 const resultado = document.querySelector('.container');
 const dvi = document.createElement('div');

 for (let i = 0; i < elements.length; i++) {
    //console.log(elements[i].tag); // uso o ponto depois p pegar a 'varialevel' do objeto
    //fazer a desestruturação 
    let{tag, texto} = elements[i];
    let tagCriada = document.createElement(tag);
    //tagCriada.innerHTML = texto;
    //outra forma de inserir o texto
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado)
    //adcionar na div criada la em cim a tag criada e com o texto novo
    dvi.appendChild(tagCriada);
}
resultado.appendChild(dvi);

 