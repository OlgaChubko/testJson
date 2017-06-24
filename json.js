function loadRates() {

    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

    var xhr = new XHR();
    //xhr.open('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
   // http://api.wunderground.com/api/2a08024319044ace/conditions/q/CA/Kiev.json
    xhr.open('GET', 'http://192.168.1.5:8080/api/allFilms/', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        button.parentNode.removeChild(button);

        if (xhr.status != 200) {
            alert('ошибкa');
        } else {
            try {
                var rates = JSON.parse(xhr.responseText);
                // for privat bank
                console.log(rates);
                //console.log(typeof rates);
                //console.log("This is object 1:"+ rates[(Object.keys(rates)[1])].station_id);
                //console.log("This is object 1:"+ rates[(Object.keys(rates)[1])].local_tz_long)
                //console.log("This is object 1:"+ rates[(Object.keys(rates)[1])].relative_humidity)
                //console.log("This is object 1:"+ rates[(Object.keys(rates)[1])].feelslike_string)


            } catch (e) {
                alert("Некорректный ответ " + e.message);
            }
            //showExchangeRates(rates);
        }
    };
    xhr.send(null);
    button.innerHTML = 'Загружаю...';
}
//function showExchangeRates(rates) {
//    rates.forEach(function (rate) {
//        var li = list.appendChild(document.createElement('li'));
//        li.innerHTML = rate.buy;
//    });
//
//}
