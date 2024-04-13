# E-Shop API

Este é um projeto de API de e-commerce construída utilizando Node.js, Express e Mongoose. A API permite a gestão de produtos, categorias, autenticação de usuários e autorização de acesso baseada em funções.

## Funcionalidades

- **CRUD de Produtos**: A API permite a criação, leitura, atualização e exclusão de produtos. Cada produto possui informações como nome, descrição, preço, categoria, quantidade em estoque, entre outras.

- **CRUD de Categorias**: Além dos produtos, é possível gerenciar as categorias disponíveis na loja. Cada categoria possui um nome e pode ser associada a vários produtos.

- **Autenticação de Usuários**: A API suporta autenticação de usuários utilizando tokens JWT (JSON Web Tokens). Os usuários podem se registrar, fazer login e obter um token de acesso para acessar endpoints protegidos.

- **Autorização Baseada em Funções**: A autorização de acesso é baseada em funções de usuário, como admin e usuário normal. Determinados endpoints só podem ser acessados por usuários com a função adequada.
