import React, { useEffect, useState } from 'react';

// Essa função vai retornar uma Promise com os dados simulados
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { capital: ["Dublin"], population: 4994724 },
        { capital: ["Nicosia"], population: 1207361 },
        { capital: ["Madrid"], population: 47351567 }
      ]);
    }, 
    1000 // aquilo de simular um delay de 1 segundo
    );
  });
};

const Questao04 = () => {
  const [capitalMaiorPopulacao, setCapitalMaiorPopulacao] = useState(null);
  const [capitalMenorPopulacao, setCapitalMenorPopulacao] = useState(null);

  useEffect(() => {
    const fetchDataAndProcess = async () => {
      try {
        const data = await fetchData();

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

    fetchDataAndProcess();
  }, []);

  return (
    <div>
      <h1>Questão 04</h1>
        <div>
          <p>Capital com a menor população: {capitalMenorPopulacao}</p>
          <p>Capital com a maior população: {capitalMaiorPopulacao}</p>
        </div>
    </div>
  );
};

export default Questao04;
