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

let table = null;

$(function () {
    // alustetaan DataTable
    table = $("#dataTable").DataTable();  
    // jQuery-kuuntelija buttonille
    $("#fetchBtn").on("click", fetchData);
});


function fetchData() {
    
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

        //tyhjennetään taulukko ennen haetun datan lisäystä
        table.clear();
            // käydään "momentit" läpi
            data.moments.forEach(function (m) {

                // käydään asiakkaat läpi
                m.customers.forEach(function (c) {

                    // Etsitään kulutusrivi
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

                    // Lisätään data taulukkoon
                    table.row.add([
                    m.moment,
                    amount,
                    unit
                ]);
            });
        });
    
    //päivitetään taulukko
    table.draw();

}); // click end
}

// Määritetään muuttuja taulukko-elementille
const ctx = document.getElementById('data-chart').getContext('2d');

// jQuery kuuntelija
$("#createChart").on("click", function() {
    drawChart();
});

// Taulukon piirtämisen funktio
function drawChart() {
// Käytetään DataTable-instanssia taulukon datan hakemiseen
const tableData = table.rows({ search: 'applied' }).data().toArray();

// labels = Vuodet (sarakkeen 0 arvo)
const labels = tableData.map(r => r[0]);

// data = Kulutus (sarakkeen 1 arvo numeroksi muunnettuna)
const values = tableData.map(r => parseFloat(String(r[1]).replace(",", ".")) || 0);
  
// Määritetään uusi kaavio
new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Vedenkulutus (m³)',
        data: values,
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
    maintainAspectRatio: false //estetään kaavion responsiivisuudesta johtuva rikkoutuminen
    }
  });
}
