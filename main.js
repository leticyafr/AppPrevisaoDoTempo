//criar constante com a chave da API 
const key = 'e0283766cee7e7e70be7e75409ae8042'

//função para capturar o valor do input
function Pesquisar() {
    let cidade = document.querySelector(".input-cidade").value
    Dados(cidade)
}

//consumindo dados da API OpenWeather
 async function Dados(cidade){
    let dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response=>Response.json())
    console.log(dados)
    ExibirDados(dados)
}

//função trocar dados da tela 
function ExibirDados(dados){
    document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name
    document.querySelector('.graus').innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector('.previsao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = `Umidade: ${dados.main.humidity}%`;
    document.querySelector('.img_previsao').scr = 'https://openweathermap.org/img/wn/${d}.png'
    document.querySelector('.velocidade').innerHTML= dados
}





























10 km/h