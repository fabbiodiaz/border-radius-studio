# CSS border-radius Studio

> ## Resumo
*CSS border radius studio* é um projeto conceitual de construção de um página responsiva com o objetivo de demonstrar 
em tempo real os efeitos da alteração dos parâmetros de border-radius em um elemento.


### [Visite a página](https://fabbiodiaz.github.io/border-radius-studio)
<br>

> ## Escopo do projeto
Criar uma ferramenta de conversão de número binário pada decimal atendendo as seguintes premissas:
-   [x] O usuário deve visualizar um elemento do tipo `block` onde são aplicadas as definições de `border-radius`.
-   [x] O Usuário pode alterar individualmente cada um dos 4 parâmetros de `border-radius`, utilizando um slider ou diretamente com o valor numérico desejado.
-   [x] O usuário poderá copiar o código CSS resultante para a clipboard através de um botão.
-   [x] A página deve ser responsiva, e funcionar bem em todas as proporções de tela, e em ambas as orientações.


> ## Ferramentas utilizadas
Neste projeto, nenhum framework foi utilizado, sendo toda a página (texto, estilos e Scripts) escritos diretamente no editor de código, e dispostos em arquivos individuais,
priorizando a manutenibilidade do código e a organização do projeto.
* *Javascript*

Para viabilizar o projeto, foi necessário utilizar Javascript para a aplicação das propriedades de `border-radius`em tempo real no 
elemento de amostra, assim como garantir o funcionamento de todos os componentes. A funcionalidade de copiar o conteúdo de um componente
foi especialmente delicada, pois não existe recurso nativo multiplataforma com esta finalidade. Para viabilizar o recurso, uma solução tangencial foi utilizada.

* *CSS*

O CSS foi utilizado para dar forma aos componentes. Para garantir a responsividade da página, foi utilizada a ferramenta de media query, que troca a maneira como os componentes são renderizados de acordo com a orientação da tela e a proporção utilizada.

* *HTML*

A pagina foi dividida em um cabeçalho (header) onde aparece o título da página, duas áreas de conteúdo, uma destinada ao visualizador e outra destinada aos controles, e o footer, onde aparece o link para o repositório do projeto no GitHub.
