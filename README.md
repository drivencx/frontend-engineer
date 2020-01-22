# Driven: Teste prático para Frontend Developer


## Instruções

Crie um `fork` deste projeto, e desenvolva em cima do seu fork. Use o *README.md* principal do seu repositório para nos contar como foi sua experiência em realizar o teste, esperamos que você nos conte: as decisões que você tomou, como você organizou seu código, as funcionalidades e instruções de como rodar seu projeto e até as dificuldades e desafios que você teve.


## Briefing

Você deve desenvolver uma aplicação e interface de busca de produtos para um grande ecommerce de uma multinacional no Brasil.

A interface deve ter um input text onde os resultados vão aparecendo conforme o usuário digita o termo de busca. Em parte do resultado, você deve exibir os resultados de uma das API's (autocomplete), e em outra parte você deve efetuar outro request por Full Text em outro endpoint trazendo os 3 primeiros produtos do response.

`Link para o layout:`
http://bit.ly/driven-dev

`Endpoint da API de autocomplete:` 
http://agenciabluefoot.vtexcommercestable.com.br/buscaautocomplete/?productNameContains={{termo}}


`Endpoint da API de search full text:`
http://agenciabluefoot.vtexcommercestable.com.br/api/catalog_system/pub/products/search/{{termo}}?map=ft

`Documentação completa da API de busca:` [https://documenter.getpostman.com/view/845/search-103/Hs43]

`Alguns termos que irão retornar resultados pra você:` fone de ouvido, smartphone, smart tv, iphone

---

Para cada um dos produtos, devemos exibir dados como titulo, thumbnail, preço e outros dados que você considerar importante para a taxa de conversão (esperamos suas considerações no Readme.md lembra?)

Quando clicarmos no produto, você pode optar por dois caminhos:

- Levar o usuário para o link do produto
- Exibir os dados completos do produto em outra interface elaborada por você

Com o submit do formulário, deve ser exibida uma lista com todos os produtos encontrados no response, exibindo dados como título, thumbnail, preço, link e outros dados importantes para a taxa de conversão da loja.


### O que nós esperamos do seu teste

* Ver na solução a utilização de um framework / biblioteca da sua escolha e que você nos conte sobre essa escolha. Aqui na Driven nós utilizamos o React.
* Queremos ver a utilização de dependency managers (npm, yarn, bower etc)
* Automação de tasks com gulp, grunt ou outra ferramenta de sua escolha
* HTML5 escrito da maneira mais semântica possível
* CSS3 com um pre processador de sua escolha, aqui na Driven utilizamos SCSS mas a escolha aqui é sua, nos conte no Readme.md
* Layout responsivo

### O que nós ficaríamos felizes de ver em seu teste

* Testes end2end
* Alguma metodologia para definição e organização do seu código CSS

### O que nos impressionaria

* Testes unitários
* [BEM naming convention](http://getbem.com/naming/)
* Ver o código rodando live com deploy automatizado

### O que nós não gostaríamos

* Descobrir que não foi você quem fez seu teste
* Ver que você nem se esforçou para tentar terminar
* Ver commits gigantes, com mensagens sem pé nem cabeça ou vazios


## O que avaliaremos de seu teste

* Histórico de commits do git
* As instruções de como rodar o projeto (seu readme.md)
* Organização, semântica, estrutura, legibilidade, manutenibilidade, escalabilidade do seu código e suas tomadas de decisões
* Alcance dos objetivos propostos
* Componentização e extensibilidade dos componentes Javascript

## Como entrego meu teste?

Nos envie um email com o título "Desafio frontend Engineer" contendo o link do seu fork para o email dev@driven.cx
