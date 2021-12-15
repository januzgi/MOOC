# MOOC React, TS & muuta kertausta

https://studies.cs.helsinki.fi/stats/courses/fullstackopen/submissions

---

## 0: Yleistä webbisovelluksista, HTMLstä

- Selain hakee jokaisen <img> sisällön omalla HTTP kutsullaan
- <button> type attribuutti on oletuksena submit
- <input> voi käyttää tietty myös napin tavoin, <button> etu on että siihen voi latoa sisälle muuta hötömölöö

---

## 1: Reactin ja JavaScriptin alkeiden kertaus

- React komponenttien JSX käännetään JavaScriptiksi lopulta
- JSX on XML kaltainen, mutta jokainen tägi tarvitsee sulkea e. <br />
- Komponenttien nimet alkaa aina Isolla
- Komponenetti sisältää aina juurielementin, myös taulukollinen kompoi käy

- forEach -loopeissa muuttujan arvo pysyy loopin scopessa
- Käytä taulukoiden kanssa ennemmin concat -metodia, jotta ei muuta vanhaa vaan luo uuden tarvittavilla lisäyksillä

```javascript
const t = [1, 2, 3, 4, 5];

const [first, second, ...rest] = t;

console.log(first, second); // tulostuu 1, 2
console.log(rest); // tulostuu [3, 4 ,5]
```

- JS:ssä this -arvo määrittyy sen mukaan miten metodia on kutsuttu
- Pidä tilan määrittely kaikkien sitä tarvitsevien komponenttien suurimmassa yhteisessä vanhemmassa
- Nimeä on[Event] propseille jotka esittää eventtejä ja handle[Event] metodeille, jotka sitten händlää nuo eventit.

- lisäämällä koodiin "debugger" saa koodin suorituksen pysäytettyä k.o. kohtaan devikonsolissa
- Kutsu hookkeja ainoastaan React-komponentin määrittelevän funktion rungosta. Ei ehtolauseeesta, ei loopista, eikä muiden funktioiden kuin sen määrittelevän sisältä.

---

## 2: Reactia lissöö ja palvelinhommia

- Funktion useEffect toisella parametrilla tarkennetaan kuinka usein efekti suoritetaan. Tyhjä taulukko [] tarkoittaa, että efekti suoritetaan ainoastaan komponentin ensimmäisen renderöinnin jälkeen.

## 3: Backend Node.js, Express, MongoDB

- Suosituksena safe ja idempotence HTTP kutsuille:
- REST:iä käyttäen HTTP GETit on aina safe, eli ne eivät aiheuta palvelimella sivuvaikutuksia kuten muuta tietokannan tilaa
- HEAD sama kuin yllä, mutta se palauttaa pelkän statuskoodin ja headerit
- Jos pyynnöillä on sivuvaikutuksia (GET, HEAD, PUT, DELETE) niin ne on oltava idempotentteja eli tulos on sama riippumatta pyynnön suorituskertojen määrästä

- Chromen devikonsolilla voi debugata Nodea äppiä käynnistämällä sovellus `node --inspect index.js` komennolla
- Epäile kaikkea ja systemaattisesti sulje pois eri osia sovelluksesta, joissa vika ei ainakaan ole. Stop and fix
- Tietokannan rakennetta miettiessä "datamalli kannattaa valita siten, että se tekee yleisimpien operaatioiden suorituksen nopeaksi ja helpoksi."

https://fullstackopen.com/osa3/tietojen_tallettaminen_mongo_db_tietokantaan#tietokannan-kaytto-reittien-kasittelijoissa

8,5h
