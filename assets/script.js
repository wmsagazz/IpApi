var h2 = document.querySelector('h2');
var bio = document.querySelector('.bio');
var cid = document.querySelector('#cidade')
var est = document.querySelector('#estado')
var cp = document.querySelector('#cep')
var p = document.querySelector('#pais')
var end = document.querySelector('#endereco')
var prov = document.querySelector('#provedor')
var lat  = document.querySelector('#latitude')
var long = document.querySelector('#longitude')
var botaoPesquisar = document.querySelector('[type$="submit"]')
var form = document.querySelector('form')
var query = document.querySelector('#query')

function buscarLocalização(query){
fetch(`http://ip-api.com/json/${query}`)

.then(function(response) {
    return response.json();
})
.then(function(dados) {
   console.log(dados);
   let CIDADE = JSON.stringify(dados.city)
   cidade.innerHTML = "Cidade: " + CIDADE;
   let CEP = JSON.stringify(dados.zip)
   cep.innerHTML = "CEP: " + CEP;
   let ESTADO = JSON.stringify(dados.regionName)
   let SIGLA = JSON.stringify(dados.region)
   estado.innerHTML = "Estado: " + ESTADO + "-" + SIGLA;
   let PAIS =  JSON.stringify(dados.country)
   let SIGLAPAIS =  JSON.stringify(dados.countryCode)
   pais.innerHTML = "País: " + PAIS + "-" + SIGLAPAIS;
   let ENDER = JSON.stringify(dados.query)
   endereco.innerHTML = "Endereço IP: " + ENDER;
   let PROV = JSON.stringify(dados.org)
   provedor.innerHTML = "Provedor de internet: " + PROV;
   let LATI = JSON.stringify(dados.lat)
   let LONGI = JSON.stringify(dados.lon)
   latitude.innerHTML = "Latitude: " + LATI;
   longitude.innerHTML = "Longitude: " + LONGI;
});

}

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    buscarLocalização(query.value);
});