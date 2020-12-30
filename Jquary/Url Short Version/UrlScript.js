// function shortenUrl(url) {
//     $("#short_url").append(`<a href="${url}">${url}</a>`);
// }
//
// function main() {
//     $.ajax({
//         url: 'https://cleanuri.com/docs',
//         type: 'POST',
//         data: '{ longUrl: }',
//         success: function(response) {
//             shortenUrl()
//             $('#short_url').val(response);
//         }
//         // success: function (data){
//         //     console.log(JSON.stringify(data));
//         // },
//      });
// }
//
// main()
// =============================================================
// $('#submit').click(function () {
//     let url = $("#shorten").val();
// });
//
// $.ajax({
//     type: 'post',
//     url: "https://cleanuri.com/api/v1/shorten",
//     data: {'longUrl': url},
//     success: function (response) {
//         console.log(response)
//         var short_url = response;
//         $("#result").val(short_url);
//     }
// });
//========================================================
// $(document).ready(function () {
//
//
//
//
// });


function main(url) {
    console.log(url)
    var promise = new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            url: "https://cleanuri.com/api/v1/shorten",
            data: {url: url},
            success: function (response) {
                console.log(response)
                var short_url = response['result_url']

                resolve(response)
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                reject()
            }

        });
    })
    return promise
}

$("#submit").click(function (e) {
    e.preventDefault()
    let url = $("#input").val();
    console.log(url)

    main(url).then((response)=>{
        $("#result").html(`<a href="${response['result_url']}">${response['result_url']}</a>`);
    }).catch(()=>{
        console.log('catch error')
    })

});



