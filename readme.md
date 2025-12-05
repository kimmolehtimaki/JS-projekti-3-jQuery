# Projektin nimi ja tekijät

Projektin nimi on "Veden kulutuksen seuranta", tekijänä Kimmo Lehtimäki

## Verkkolinkit:

Pääset julkaistuun sovellukseen käsiksi osoitteessa [https://vesikulutus.netlify.app/]
Linkki projektin videoesittelyyn [ScreenPal](https://go.screenpal.com/watch/cTlhF7nYVOi)

## Työn jakautuminen

Työ tehtiin yksilötyönä

## Oma arvio työstä ja oman osaamisen kehittymisestä

Työ opetti jälleen paljon, vaikka tuntuukin että täysin tutuiksi en jQuery:n kanssa toimimiseen päässytkään. Joka tapauksessa projektissa olleet vastoinkäymiset opettivat jälleen paljon ohjelmistokehityksestä ja antoi hyödyllistä tietoa jatkoa ajatellen.

Onnistuin saamaan tehtävänannon määrittämät vaatimukset pääsääntöisesti sisällytettyä sovellukseen. Käyttämäni API ei kuitenkaan mahdollistanut API-kutsuja selaimesta, joten ulkopuolisen datan dynaaminen hakeminen jäi tällä kertaa pois, koska osaaminen ja ajankäyttö ei mahdollistanut alkaa harjoittelemaan backendistä lähteviä API-kutsuja. 

Sovelluksen alkluperäisenä tarkoituksena oli hakea vesi- ja jätepalvelun kulutustietoja HSY:n tilastorajapinnasta testitunnuksilla. HSY:n API ei kuitenkaan mahdollistanut API-kutsujen tekemistä selaimesta, vaan palautti CORS-virhettä. Päätin kuitenkin jatkaa valitsemallani tiellä ja hain Postman:n kautta muutaman testidatasetin tallennettavaksi projektikansioon.

Tekemällä oppii ja olenkin oppinut jälleen paljon JavaScript-kehittämisestä projektin aikana. Dynaamisen datan puuttumisen vuoksi antaisin itselleni pisteitä projektista: 8/10 p

## Palaute opettajalle kurssista sekä itse opetuksesta tähän saakka

Kurssi on ollut yksi hyödyllisimmistä opintojen aikana ja oppia on tullut paljon. Tosin kurssi on myös ainakin omalta osaltani vaatinut valtavasti panostusta.

## Sisällysluettelo:

- [Tietoja sovelluksesta](#tietoja-sovelluksesta)
- [Tunnetut virheet/bugit](#Tunnetut virheet/bugit)
- [Kuvakaappaukset](#kuvakaappaukset)
- [Teknologiat](#teknologiat)
- [Asennus](#asennus)
- [Lähestymistapa](#lähestymistapa)
- [Kiitokset](#kiitokset)
- [Lisenssi](#lisenssi)

## Tietoja sovelluksesta

Veden kulutuksen seuranta on sovellus, jolla oli tarkoitus mahdollistaa taloyhtiön osakkaiden seurata kiinteistön vedenkulutusta ja jätemääriä. HSY:n API myös mahdollistaa vesimittarilukemien lähettämisen rajapinnan kautta, johon sovellusta oli tarkoitusta laajentaa.

## Tunnetut virheet/bugit

Sovellus ei kutsu ulkoista rajapintaa.

## Kuvakaappaukset

Lisää tähän vähintään yksi kuvakaappaus toimivasta sovelluksesta  
`https://laureauas-my.sharepoint.com/:i:/g/personal/kil00006_laurea_fi/IQDQ-jHLx9xMTIH2_RJ26eAjAdjPBHvAOS1L1NYNz8XPxx8?e=zodHf8`

## Teknologiat

Kuvaa, mitä teknologioita käytettiin ja mikä oli niiden rooli projektissasi.  
Käytin seuraavia teknologioita: `html`, `JavaScript` ja `jQuery`käyttöliittymäkirjastoa. Lisäksi käytin tyylien muotoiluun Tailwindcss ulkoista kirjastoa. Valmiita elementtejä hain myös DataTables ja chart.js ulkoisista kirjastoista. Pääsääntöisesti käytin ulkoisia kirjastoja CDN:n kautta minkä katsoin soveltuvaksi näin pienessä projektissa. API-kutsujen validointiin ja testidatan noutamiseen käytin Postman-ohjelmistoa.

## Asennus

Kirjoita lyhyet ohjeet sovelluksen käynnistämiseen ja käyttöön. Esimerkiksi:

- lataa kaikki tiedostot ja avaa index.html selaimessasi
- sovelluksen julkinen repositorio: https://github.com/kimmolehtimaki/JS-projekti-3-jQuery.git

## Kiitokset

Käytin projektin työstämiseen netistä löytyviä tutoriaaleja, jotka listattu alla. ChatGPT:tä jouduin käyttämään  testi-JSON datan parsimiseen ja esittämiseen ratkaisun löytämiseksi. Löysin muutaman hyvän tutoriaalin ja koulutuspaketin joihin oli helppo turvautua kehittämisen aikana. 

- [Marini,Joe] - jQuery Essential Training (https://www.linkedin.com/learning/jquery-essential-training-24696205/jquery-write-less-do-more)
- [Digital Fox] - Create Dynamic Charts with JSON, JavaScript and Chart.js (https://www.youtube.com/watch?v=XPOSEf40SkQ)
- [Polston,Vince] - Chart JS Crash Course for Beginners | ChartJS Tutorial (https://www.youtube.com/watch?v=yD3kXXJTqsc)
- [ChartJS] - How to Connect DataTables With Chart.js 4 (https://www.youtube.com/watch?v=6zSgYVqGo24)
- [DataTables] - Documentation (https://datatables.net/)
-  [Tov & Tatti Code] - How to setup jQuery datatables (https://www.youtube.com/watch?v=vFzw9fnqid0)
- [jQuery] - Documentation (https://jquery.com/)


Tailwind-muotoilun apuna käytin seuraavia tutorialeja, enimmäkseen Youtubesta:
    - [Tailwindcss] - Documentation (https://tailwindcss.com/docs/installation/play-cdn)
    - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/radio
    - [Helalee,Muslim] - Tailwind CSS for Devs in Hurry (https://www.youtube.com/watch?v=0JN_Bk8QuWY)

- ChatGpt: etsin apua JSON datan parsimiseen ja esittämiseen sovelluksen taulukossa.
    

## Lisenssi

Valitse projektille lisenssi seuraamalla tätä [opasta](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository).

Esimerkki: MIT-lisenssi @ [Kimmo Lehtimäki]