# Podcast Manager

### Descrição

App parecido com netflix, que possa centralizar diferentes episódios podcasts separados por categoria!

### Domínio

Podcasts feitos em vídeo

### Features

- Listar os episódios podcasts em sessões por categorias
  - [saúde, finess, mentalidade, humor]
- Filtrar episódios por nome de podcasts

## Como

#### Feature

Listar os episódios podcasts em sessões por categorias

#### Implementação:

GET: retorna lista de episodios

response:

```js
[
  {
    podcastName: "Flow Games",
    episode: "PS PLUS MAIS CARA e THE LAST OF US LANÇADO DE NOVO - #FGN #170",
    videoId: "n39Fx04r1Jc",
    cover: "https://i.ytimg.com/vi/n39Fx04r1Jc/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=n39Fx04r1Jc",
    category: ["games", "noticias"],
  },
  {
    podcastName: "Flow Games",
    episode: "GAMEPLAY SOUTH OF MIDNIGHT, NOVO LANÇAMENTO - #flowgames",
    videoId: "MS9Z8otTams",
    cover: "https://i.ytimg.com/vi/MS9Z8otTams/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=MS9Z8otTams",
    category: ["games"],
  },
];
```

GET: retorna lista de episodios baseados em um parametro enviado pelo cliente
