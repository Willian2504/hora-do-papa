const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configurar o motor de template EJS
app.set('view engine', 'ejs');

// Usar o body-parser para analisar o corpo das requisições
app.use(bodyParser.urlencoded({ extended: false }));

// Rota para a página de login
app.get('/', (req, res) => {
  res.render('login');
});

// Rota para processar o login
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Aqui você implementaria a lógica de autenticação
  // Comparando com um banco de dados, por exemplo

  if (username === 'admin' && password === 'password') {
    res.send('Login bem-sucedido!');
  } else {
    res.send('Credenciais inválidas');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});