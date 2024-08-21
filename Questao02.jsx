import { useState } from "react"

const Pokemon = () => {
    //Estado pra controlar a url no estado atual, que seria frente
    const [url, setUrl] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");

    const urlFrente = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
    const urlCostas = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"

    //Função que vai alternar a imagem entre frente e costas
    const mudarPosicao = () => {
        //se a url de estado for igual a da frente, trocar para a de costas, e vice-versa. Será valido na ação do botão
        if(url === urlFrente){
            setUrl(urlCostas);
        } else {
            setUrl(urlFrente)
        }
    }
    return(
        <div>
            <h1>Questão 02</h1>

            <img 
            src={url}
            alt = "Pokemon"
            width={200}
            />
            <button onClick={mudarPosicao}>Mudar Posição</button>
        

        </div>
    )
}

export default Pokemon;