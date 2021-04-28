## Web Scrapping com NODE JS & Cheerio 

![Logo from : https://www.youtube.com/watch?v=00Z8i88iFsc ](assets/logo.jpg)

[ Link do projeto original ](https://medium.com/@nicsachin007/web-scrapping-in-node-js-4a2280063aa3)

## Dependências 
* v15.14.0 - Já instalado em sua máquina
* Editor VS Code

## Pacotes utilizados 
* [ cheerio ](https://www.npmjs.com/package/cheerio)
* [request](https://www.npmjs.com/package/request)

## Como usar ?

Crie uma pasta para iniciar o projeto 

> mkdir node_scraping 

Entre na pasta do projeto

> cd node_scraping

Inicie o projeto com o comando 

> yarn init -y 


Em seguida instale as dependências com o comando

> yarn add cheerio request

Dentro do arquivo da raiz do projeto " <b style="color:red;">./</b> " crio o arquivo <b>index.js</b> e insira o código abaixo

```javascript
var request = require('request');
var cheerio = require('cheerio');

const url ="https://pt.wikipedia.org/wiki/Vegeta"

request(url, function (error, response, html) {
  if (!error && response.statusCode == 200) {
    console.log(html);
  }
});
```
Vá no seu package.json e adicione o campo <b style="color:#00FFFF;">"Scripts"</b> para executar o seu projeto 


![ package.json  : https://www.youtube.com/watch?v=00Z8i88iFsc ](assets/script.png)

Execute seu projeto com o comando abaixo 

![ yarn command ](assets/yarn_c.png)


Caso tudo corra bem, essa será a saída no seu terminal 

![ html from wikipedia  ](assets/html.png)

Mostrando que você conseguiu realizar o scrapping da página!!!

### <<< Para mais usos da ferramenta dê uma olhada na documentação >>> [Cheerion.org ](https://cheerio.js.org)

