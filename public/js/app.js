
$(document).ready(function() {
  var responseContent = $('#response-content');
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiLinkDS = 'https://api.darksky.net/forecast/581f42d72e7b097820d2c7e0a56373d2/-12.1155843,%20-77.0224692?lang=es';
  var button = $('#btn');
  button.on('click', function(data) {
    $.ajax({
      url: proxy + apiLinkDS,
      success: function(data) { 
        var temperature = data.currently.temperature;
        var description = data.currently.summary;
        var humidity = data.currently.humidity;
        console.log(data);
        // responseContent.innerHTML = temperature;
        $('#info').text(temperature);
        $('#weather-description').text(description);
        $('.hola').text(data.timezone);
      }
    }).done(addNews);
    // cogiendo la data summary/humidity
    function addNews(data) {
      const humidi = data.daily.data;          
      // console.log(humidi);
      $('.item0').text('Monday: ' + data.currently.summary);
      $('.item1').text('Tuesday:' + data.daily.data[0].summary + '*' + data.daily.data[0].humidity);
      $('.item2').text('Wednesday: ' + data.daily.data[1].summary + '*' + data.daily.data[1].humidity);
      $('.item3').text('Thursday: ' + data.daily.data[2].summary + '*' + data.daily.data[2].humidity);
      $('.item4').text('Friday: ' + data.daily.data[3].summary + '*' + data.daily.data[3].humidity);
      $('.item5').text('Saturday:' + data.daily.data[4].summary + '*' + data.daily.data[4].humidity);
      $('.item6').text('Sunday:' + data.daily.data[5].summary + '*' + data.daily.data[5].humidity);
    };    
  }); 
}); 
