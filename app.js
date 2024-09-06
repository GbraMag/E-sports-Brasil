function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor do campo de pesquisa e converte para minúsculas para a comparação
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Verifica se o campo de pesquisa está vazio e exibe mensagem caso esteja
    if (!campoPesquisa) {
      section.innerHTML = "<p> Nada foi encontrado. Você não digitou nenhuma palavra. </p>";
      return;
    }
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      // Converte todos os campos do dado para minúsculas para comparação
      let nomecompleto = dado.nomecompleto.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
      let jogo = dado.jogo.toLowerCase();
      let timeatual = dado.timeatual.toLowerCase();
      let tags = dado.tags.toLowerCase();
  
      // Verifica se o termo de pesquisa está presente em algum dos campos do dado
      if (nomecompleto.includes(campoPesquisa) || descricao.includes(campoPesquisa) || jogo.includes(campoPesquisa) || timeatual.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Constrói o HTML para cada item da pesquisa, formatando os dados
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="${dado.linkinstagram}" target="_blank"> ${dado.nomecompleto} </a>
            </h2>
            <p class="descricao-meta"> ${dado.descricao} </p>
            <p class="descricao-meta"> ${dado.jogo} </p>
            <p class="descricao-meta"> ${dado.timeatual} </p>
            <a href="${dado.linkliquipedia}" target="_blank"> Mais informações </a>
          </div>
        `;
      }
    }
  
    // Verifica se nenhum resultado foi encontrado e exibe mensagem caso necessário
    if (!resultados) {
      resultados = "<p> Atleta não encontrado </p>";
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }