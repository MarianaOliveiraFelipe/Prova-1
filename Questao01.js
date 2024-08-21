//função arrow Questao01A, define uma constante 'lista', onde no return o componente Questao01B é chamado, e a lista definida anteriormente é passada para ele como uma prop. Ou seja, Questao01A está enviando os dados da lista para o componente Questao01B.
const Questao01A = () => {

    const lista = [
        {a:10, b: 3, c:7},
        {a:5, b: -3, c: 9},
        {a: 1, b: 9, c: 40}
    ]

    return(
        <div>
            <h1>Questão01A</h1>
            <Questao01B lista={lista}/>

        </div>
    )
}

//O componente Questao01B processa a lista recebida como props e exibe o maior valor de cada objeto. Ele faz isso iterando sobre a lista, calculando o maior valor de cada objeto.
function Questao01B ({lista}){

    const resultados = [];

    for (let i = 0; i < lista.length; i++) {
        const item = lista[i];
        const max = Math.max(item.a, item.b, item.c);
    
        // Adicionando o resultado ao array de resultados
        resultados.push(
          <div key={i}>
            <p>Maior valor do objeto {i + 1}: {max}</p>
          </div>
        );
    }

    return(
        <div>
            {resultados}

        </div>
    )
}

export default Questao01A;