// Simulação de uma função que representa a conexão com o banco de dados
function conectarComBancoDeDados() {
    return new Promise((resolve, reject) => {
      // Suponha que a conexão seja bem-sucedida após 1 segundo
      setTimeout(() => {
        const conexaoBemSucedida = true; // Simulando sucesso da conexão
  
        if (conexaoBemSucedida) {
          resolve("Conexão bem-sucedida com o banco de dados.");
        } else {
          reject("Erro ao conectar com o banco de dados.");
        }
      }, 1000);
    });
  }
  
  // Exemplo de uso
  conectarComBancoDeDados()
    .then((mensagem) => {
      console.log(mensagem);
    })
    .catch((erro) => {
      console.error(erro);
    });