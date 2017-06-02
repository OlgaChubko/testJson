function loadRates() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    //http://api.wunderground.com/api/2a08024319044ace/conditions/q/CA/Kiev.json
    //https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5
//console.log(xhr);

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        button.parentNode.removeChild(button);

        if (xhr.status != 200) {
            alert('ошибкa');
        } else {
            try {
                var rates = JSON.parse(xhr.responseText);
                console.log(rates);
                var rettes = JSON.stringify(rates);
                console.log(rettes);
                alert(rettes.ccy);

            } catch (e) {
                alert("Некорректный ответ " + e.message);
            }
            showExchangeRates(rates);
        }
    };
    xhr.send(null);

    button.innerHTML = 'Загружаю...';
}
function showExchangeRates(rates) {
    rates.forEach(function (rate) {
        var li = list.appendChild(document.createElement('li'));
        li.innerHTML = rate.buy;
    });

}
