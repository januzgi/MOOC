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

  10.5h
