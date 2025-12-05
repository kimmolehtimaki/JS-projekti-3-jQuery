// // Varmisttetaan, että DOM on valmis
// $(function() {
//     console.log("script.js: DOM ready ");

// // jQuery-kuuntelija
// $("#fetchBtn").on("click", function() {
//     console.log("fetchBtn painettu ");

// //Tehdään AJAX-kutsu HSY:n testi-rajapintaan Axioksella

// axios({
//   method: 'get',
//   url: 'https://raportit.hsy.fi:8443/report/rest/v1/reporting/water/WT-MOCK-WATER-ID/YEARLY/fi',
//   headers: {
//     "Content-Type": "application/json;charset=UTF-8",
//     "X-API-KEY": "HSYTEST51_9NOOzOv77pD4Mhx2Kgol86NFSdl9rpOPGNzlQ0A7"
//   }
// })
//   .then(function (response) {
//     // Onnistunut pyyntö
//     // Lisätään API:n vastaus diviin
//     $("#content").append(response.data);
//   })

//   //Virhe logitetaan aluksi konsoliin
//   .catch(function (error) {
//     console.error("Virhe:", error);
//   });
// });
// })

$(function () {
    // jQuery -kuuntelija buttonille
    $("#fetchBtn").on("click", function () {

        var categoryType = $("#category").val();
        var timePeriod = $('input[name="time"]:checked').val();
        
        // Kartoitus tiedostonimeen
        var catMap   = { water: "water", waste: "waste" };
        var cat   = catMap[categoryType];

        var period = timePeriod;

        //url-polku oikeaan tiedostoon
        var url = "data/" + cat + "_" + period + ".json";
        console.log(url);

    $.getJSON(url, function (data) {

             var $out = $("#content").empty();

            // käydään momentit läpi
            data.moments.forEach(function (m) {

                // käydään asiakkaat läpi
                m.customers.forEach(function (c) {

                    // Etsitään kulutusobjekti
                    var consumption = null;
                    for (let i = 0; i < c.water.length; i++) {
                        let w = c.water[i];
                        if (w.type && w.type.startsWith("Vedenkulutus vuosittain")) {
                            consumption = w;
                            break;
                        }
                    }

                    // amount ja unit kerätään, defaultit jos puuttuu
                    var amount = (consumption && consumption.amount) ? consumption.amount : "-";
                    var unit   = (consumption && consumption.amountUnit) ? consumption.amountUnit : "";

                    // tulostus
                    $out.append(
                        "<p>Vuosi <strong>" + m.moment + "</strong>: " + amount + " " + unit + "</p>"
                    );

                });
            });
      }); // getJSON end

    }); // click end
});