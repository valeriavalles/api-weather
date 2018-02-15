
$(document).ready(function() { 
    
    var responseContent = $('#response-content');
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var apiLinkDS = "https://api.darksky.net/forecast/581f42d72e7b097820d2c7e0a56373d2/-12.1155843,%20-77.0224692?lang=es";
    var button = $('#btn');

    button.on('click',function(data){
    $.ajax({
      url: proxy + apiLinkDS,
      success:function(data) { 
        var temperature = data.currently.temperature;
        var description = data.currently.summary;
        var humidity = data.currently.humidity;
        //responseContent.innerHTML = temperature;
        $('#info').text(temperature);
        $('#weather-description').text(description);
        $('.hola').text(data.timezone);
        console.log(data.currently);
      }

    }).done(addNews);
    
    
    function addNews(data){
        
        const humidi = data.daily.data;          
  
            $('.item0').text('Lunes: '+ data.currently.summary);
            $('.item1').text('Martes: '+data.daily.data[0].summary);
            $('.item2').text('Miercoles: '+ data.daily.data[1].summary);
            $('.item3').text('Jueves: ' + data.daily.data[2].summary);
            $('.item4').text('Viernes: '+data.daily.data[3].summary);
            $('.item5').text('Sabado: '+ data.daily.data[4].summary);
            $('.item6').text('Domingo: '+ data.daily.data[5].summary);
           
    };    
}); 
}); 
