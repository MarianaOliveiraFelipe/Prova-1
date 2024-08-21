import React, { useEffect, useState } from 'react';

const Questao03 = () => {
  const [capitalMaiorPopulacao, setCapitalMaiorPopulacao] = useState(null);
  const [capitalMenorPopulacao, setCapitalMenorPopulacao] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
            const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
            const data = await response.json();

        // Vai ordenar os países pela população do menor pro maior
        const sortedData = data.sort((a, b) => a.population - b.population);

        // Vai pegar o país com a menor população e o com maior 
        const menorPopulacao = sortedData[0];
        const maiorPopulacao = sortedData[sortedData.length - 1];

        // Atualiza os estados com as capitais que vão corresponder a ser menor ou maior
        setCapitalMenorPopulacao(menorPopulacao.capital[0]);
        setCapitalMaiorPopulacao(maiorPopulacao.capital[0]);

      } catch (error) {
        console.error("Erro: ", error);
      }
    };

    fetchData();
    }
    , 
    []
    );

  return (
    <div>
      <h1>Questão 03</h1>
          <p>Capital com a menor população: {capitalMenorPopulacao}</p>
          <p>Capital com a maior população: {capitalMaiorPopulacao}</p>
    </div>
  )
}

export default Questao03;
