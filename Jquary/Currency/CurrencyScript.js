function addCurrency() {

    var time = new Date();
    document.getElementById("time").innerHTML = time;

    main().then((result) => {
        let currency = result.Currency
        let gold = result.Gold

        $('#currency').html("")
        $('#gold').html("")

        for (let index = 0; index < currency.length; index++) {
            $('#currency').append(`<tr>
            <th>${index}</th>
            <td>${currency[index]['Code']}</td>
            <td>${currency[index]['Currency']}</td>
            <td>${currency[index]['Sell']}</td>
            <td>${currency[index]['Buy']}</td>
            </tr>`)
        }

        for (let index = 0; index < gold.length; index++) {
            $('#gold').append(`<tr>
            <th>${index}</th>
            <td>${gold[index]['Coin']}</td>
            <td>${gold[index]['Sell']}</td>
            <td>${gold[index]['Buy']}</td>
            </tr>`)
        }

    }).catch((error) => {
        console.log(error)
    })

}

function main() {

    let promise = new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: 'https://currency.jafari.li/json',
            success: function (response) {
                var result = JSON.parse(response);
                console.log(result)
                resolve(result)
            },
            error: function () {
                reject("error")
            }
        })
    })
    return promise
}

addCurrency()
setInterval(addCurrency, 500);
