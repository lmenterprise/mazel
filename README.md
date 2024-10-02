# Mazel
Projeto do semestre 2024.2.
## Premissa
Duas pessoas se perdem em uma caverna densa e precisam se reencontrar enquanto enfrentam dificuldades que habitam o labirinto natural. O labirinto está em constante mudança, com paredes que se reconfiguram, tornando a navegação ainda mais desafiadora. No caminho, eles encontram  baús misteriosos que pode conter itens úteis ou armadilhas traiçoeiras, complicando ainda mais sua jornada. Os jogadores devem se comunicar e colaborar para superar desafios, decidir como lidar com os baús e encontrar maneiras de se adaptar às mudanças do labirinto. A experiência explora a amizade e a resiliência, enquanto tentam escapar da mata antes que ela os consuma. 

### Referências do jogo

Filmes:

- [Dungeons & Dragons: Honra Entre Rebeldes](https://www.google.com/search?q=Dungeons+%26+Dragons%3A+Honra+Entre+Rebeldes&oq=Dungeons+%26+Dragons%3A+Honra+Entre+Rebeldes&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzk5N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8);
- [Maze Runner: Correr ou Morrer](https://www.google.com/search?q=Maze+Runner%3A+Correr+ou+Morrer&sca_esv=95f18603daa625a6&ei=dJj9Zqq9G7PM1sQPn9floQM&ved=0ahUKEwiqx5v8sPCIAxUzppUCHZ9rOTQQ4dUDCA8&uact=5&oq=Maze+Runner%3A+Correr+ou+Morrer&gs_lp=Egxnd3Mtd2l6LXNlcnAiHU1hemUgUnVubmVyOiBDb3JyZXIgb3UgTW9ycmVyMggQLhiABBixAzIFEC4YgAQyCxAAGIAEGLEDGIMBMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIXEC4YgAQYsQMYlwUY3AQY3gQY4ATYAQJI98sCUKXFAlilxQJwAngBkAEAmAF5oAF5qgEDMC4xuAEDyAEA-AEB-AECmAIDoAKoAagCFMICChAAGLADGNYEGEfCAh0QABiABBi0AhjUAxjlAhi3AxiKBRjqAhiKA9gBAcICHRAuGIAEGLQCGNQDGOUCGLcDGIoFGOoCGIoD2AEBwgIWEAAYAxi0AhjlAhjqAhiMAxiPAdgBApgDDYgGAZAGCLoGBAgBGAe6BgYIAhABGAqSBwMyLjGgB7cL&sclient=gws-wiz-serp);
- [Harry Potter e o Cálice de Fogo](https://www.google.com/search?q=Harry+Potter+e+o+C%C3%A1lice+de+Fogo&sca_esv=95f18603daa625a6&ei=oJj9ZpndK8ve1sQPhrO04Ak&ved=0ahUKEwiZramRsfCIAxVLr5UCHYYZDZwQ4dUDCA8&uact=5&oq=Harry+Potter+e+o+C%C3%A1lice+de+Fogo&gs_lp=Egxnd3Mtd2l6LXNlcnAiIEhhcnJ5IFBvdHRlciBlIG8gQ8OhbGljZSBkZSBGb2dvMggQLhiABBixAzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIXEC4YgAQYsQMYlwUY3AQY3gQY4ATYAQJItyBQpwJYpwJwAXgBkAEAmAF1oAF1qgEDMC4xuAEDyAEA-AEB-AECmAICoAKrAagCFMICIBAuGIAEGNQCGLQCGNQDGOUCGLcDGIoFGOoCGIoD2AEBwgIdEAAYgAQYtAIY1AMY5QIYtwMYigUY6gIYigPYAQHCAh0QLhiABBi0AhjUAxjlAhi3AxiKBRjqAhiKA9gBAcICFhAAGAMYtAIY5QIY6gIYjAMYjwHYAQKYAxy6BgQIARgHugYGCAIQARgKkgcDMS4xoAe_CQ&sclient=gws-wiz-serp).

Literatura:

- [Jogos vorazes a cantiga dos pássaros e das serpentes](https://www.google.com/search?q=livro+jogos+vorazes+a+cantiga+dos+p%C3%A1ssaros+e+das+serpentes&sca_esv=95f18603daa625a6&ei=Dpn9ZqKUHK3Z1sQPxrmBuA0&ved=0ahUKEwii09PFsfCIAxWtrJUCHcZcANcQ4dUDCA8&uact=5&oq=livro+jogos+vorazes+a+cantiga+dos+p%C3%A1ssaros+e+das+serpentes&gs_lp=Egxnd3Mtd2l6LXNlcnAiO2xpdnJvIGpvZ29zIHZvcmF6ZXMgYSBjYW50aWdhIGRvcyBww6Fzc2Fyb3MgZSBkYXMgc2VycGVudGVzMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIIEAAYogQYiQUyCBAAGIAEGKIEMggQABiABBiiBEj_L1DcBVj3KnABeAGQAQCYAYwBoAHiB6oBAzAuOLgBA8gBAPgBAZgCCaACtAjCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDhAAGLADGOQCGNYE2AEBwgITEC4YgAQYsAMYQxjIAxiKBdgBAcICChAAGBYYChgeGA-YAwCIBgGQBhO6BgYIARABGAmSBwMxLjigB4I3&sclient=gws-wiz-serp);
- [Percy Jackson e os Olimpianos](https://www.google.com/search?q=Percy+Jackson+e+os+Olimpianos&sca_esv=95f18603daa625a6&ei=Fpn9ZvXBEJ7L1sQPpNGNsQE&ved=0ahUKEwj1pLDJsfCIAxWepZUCHaRoIxYQ4dUDCA8&uact=5&oq=Percy+Jackson+e+os+Olimpianos&gs_lp=Egxnd3Mtd2l6LXNlcnAiHVBlcmN5IEphY2tzb24gZSBvcyBPbGltcGlhbm9zMgsQLhiABBixAxjUAjIFEAAYgAQyCxAuGIAEGLEDGNQCMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIaEC4YgAQYsQMY1AIYlwUY3AQY3gQY4ATYAQJIm3RQoghYoghwAXgBkAEAmAF4oAF4qgEDMC4xuAEDyAEA-AEB-AECmAICoAKsAagCFMICHRAAGIAEGLQCGNQDGOUCGLcDGIoFGOoCGIoD2AEBwgIdEC4YgAQYtAIY1AMY5QIYtwMYigUY6gIYigPYAQHCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AECmAMaugYECAEYB7oGBggCEAEYCpIHAzEuMaAHyQs&sclient=gws-wiz-serp)

### Jogo ideal

Em um cenário com recursos infinitos, "Mazel" seria um jogo de realidade virtual hiper-realista, onde os jogadores se sentiriam imersos em uma caverna viva e mutável. O labirinto seria dinâmico, podendo ser rotacionado pela vontade dos jogadores em momentos estratégicos. A comunicação entre eles seria crucial, com a distância e os obstáculos afetando a clareza do som. Os baús teriam desafios adaptados a cada jogador, além de fenômenos naturais e criaturas místicas, tornando a experiência única e desafiadora.

### Universo

### Personagens 

### Regras

1. Limitações Físicas: Os jogadores não podem atravessar as paredes do labirinto. Eles devem encontrar passagens ou resolver caminho certo do labirinto.
2. Manipulação do Labirinto: O labirinto pode ser rotacionado ou reconfigurado conforme a vontade dos jogadores, forçando os jogadores a pensarem estrategicamente sobre como usar essa habilidade.
3. Colaboração é Essencial: Para que ambos os jogadores se reencontrem, a comunicação e cooperação são fundamentais. Muitas vezes, será necessário que um jogador resolva algo para ajudar o outro.

### Objetivo

O objetivo do jogo é simples: os dois jogadores devem se reencontrar em meio ao labirinto em constante transformação. A cada obstáculo superado, eles se aproximam mais um do outro, mas, ao mesmo tempo, o ambiente continua tentando separá-los. Apenas trabalhando juntos e utilizando seus recursos com sabedoria, eles conseguirão escapar.

### Fontes de receitas
