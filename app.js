function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Seleciona o elemento que vai fazer a busca e pega apenas o valor
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Verifica se o campo está vazio
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo relacionado aos autores.</p>";
        return;
    };

    // Transformando o campo de pesquisa em letra minúscula
    campoPesquisa = campoPesquisa.toLowerCase();
    
    // Inicializa strings vazias para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada resultado da pesquisa
    for (let dado of dados) {
        // transforma as variáveis em letra minúscula
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        // Verifica a pesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Saiba Mais</a>
            </div>
        `;
        };
    };

    // Avisa quando não há resultados da pesquisa
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Insere os resultados gerados na seção HTML
    section.innerHTML = resultados;
}