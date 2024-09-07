function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada resultado da pesquisa
    for (let dado of dados) {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Saiba Mais</a>
            </div>
        `;
    }

    // Insere os resultados gerados na seção HTML
    section.innerHTML = resultados;
}