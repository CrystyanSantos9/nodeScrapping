// require('dotenv/config');

const request = require("request")

const cheerio = require('cheerio')
// const options = require('./config')

// //apikey from service 
// const key = process.env.SECRET_API
// const url = 'https://www.terabyteshop.com.br/produto/12915/water-cooler-gamdias-chione-e2-120r-controlador-rgb-120mm-intel-amd'

// request(options(key, url), (error, response, body)=>{
//     if(error){
//         console.log('error ocurred during scrapestack api call');
//         return;
//     }
//     if(body){
//         const $ = cheerio.load(body);
//         let scrap = $('#valVista').toArray();
//         const value = scrap[0].children
//         var map = Array.prototype.map;
//         var newValue = [].map.call(value, function(obj){
//             console.log("Valor extraído", obj.data)
//         })
//     }
// })

const url = "https://en.wikipedia.org/wiki/Sachin"

request(url, function(error, response, html){
    if(!error && response.statusCode == 200){
        console.log(html)
    }
})




// // console.log(process.env.SECRET_API)



