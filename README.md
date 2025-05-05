# 📚 Podcast CRUD API

Uma API RESTful desenvolvida para gerenciar episódios de podcasts, com operações de criação, leitura, atualização e exclusão (CRUD). A API permite cadastrar episódios com nome, canal e link do YouTube.

## 🚀 Tecnologias Utilizadas
- Node.js
- Express
- JavaScript
- Nodemon (desenvolvimento)
- Postman (testes)

## 📌 Funcionalidades
- ✅ `GET /episodes` – Lista todos os episódios
- ✅ `GET /episodes/:id` – Retorna episódio por ID
- ✅ `POST /episodes` – Cria novo episódio
- ✅ `PUT /episodes/:id` – Atualiza episódio existente
- ✅ `DELETE /episodes/:id` – Remove episódio

## 📦 Exemplo de Requisição (POST)
```json
{
  "nome": "Entendendo APIs REST",
  "canal": "Tech Talks",
  "linkYoutube": "https://youtube.com/example"
}
