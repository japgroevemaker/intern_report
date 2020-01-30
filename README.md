
## Wat is Vue.js?
Vue is ontwikkeld door Evan You en officieel gelanceerd in 2014. Vue is een JavaScript front-end framework. Dit houd in dat het gebruikt wordt om de voorkant van een website te maken, dat wat de gebruiker ziet. Vue kan gebruikt worden voor het maken van dynamische webpagina’s. Als je gebruiker bijvoorbeeld op zoek is naar de perfecte telefoon, dan wil je dat diezelfde gebruiker doormiddel van het aanvinken van enkele opties direct verschillende telefoons kan vergelijken. Met andere woorden: als de gebruiker iets doet, dan wil je dat de applicatie daar meteen op reageert, zonder laadtijd. Hier is Vue uitermate geschikt voor.

## Waarom Vue.js?
Maar waarom moet je Vue.js nou gaan gebruiken? Welke voordelen biedt het ten opzichte van bijvoorbeeld vannilla JavaScript? Daar ga ik hieronder verder op in.

* __*Single Page Applications (SPA)*__ <br>
Zoals hierboven al beschreven leent Vue.js zich uitstekend voor het maken van SPA(single page applications). Maar wat houdt dit nou precies in? Een SPA is een applicatie waarbij telkens, in plaats van de gehele pagina, bepaalde componenten of functionaliteiten van een pagina worden herladen en weergegeven. Als je dus geen SPA ontwikkeld zullen telkens alle elementen op een pagina worden herladen, ook als deze niet gewijzigd werden. Het voordeel hiervan is dat de reactietijd van de applicatie een stuk sneller is dan van een applicatie die niet als Single Page ingericht is. Ook wordt de server minder belast aangezien niet alle gegevens op de pagina telkens opnieuw geladen moeten worden. 

* __*Compact formaat*__ <br>
Het succes van een JavaScript framework wordt bepaald door zijn formaat. Hoe kleiner het formaat, hoe sneller men voor dit framework kiest. Een van de grote voordelen van Vue.js is zijn formaat, dit is namelijk maar 21KB en daarom ben je ook in no-time up and running als je Vue gaat gebruiken. 

* __*Gemakkelijk te begrijpen*__ <br>
Een van de redenen waarom dit framework zo populair is, is zijn gebruiksvriendelijkheid. Vue.js is makkelijk te begrijpen en makkelijk toe te voegen aan een web project. Of je nou een simpele informatieve website wil opzetten, of een complexe webshop, Vue.js is prachtig in zijn eenvoud en daarom dus voor veel doeleinde te gebruiken. 

* __*Gedetailleerde documentatie*__ <br>
Nog een groot voordeel van Vue.js is dat zijn documentatie enorm uitgebreid is. Mocht je tegen een probleem aanlopen waardoor je even niet verder kunt, ben je vaak snel weer op weg aan de hand van de documentatie van Vue.js


## Vue.js VS andere JavaScript frameworks
Vue.js is natuurlijk niet het enige JavaScript framework, maar wel een van de populairste. Hieronder vergelijk ik Vue.js tegenover Angular en React. Angular zijn andere populaire, veel gebruikte Javascript frameworks.

### Vue.js VS ReactJS
ReactJS is gelanceerd in 2013 door Facebook. ReactJS wordt veel gebruikt door de zogenoemde ‘high traffic’ websites, kortweg websites met enorm veel bezoekers, Facebook dus. Whatsapp, Instagram, PayPal, Glassdoor en de BBC zijn voorbeelden van bedrijven die ReactJS gebruiken.

Er is een ding genaamd DOM dat kan worden geïnterpreteerd als UI, dat is de gebruiker interface van uw applicatie. De DOM verandert wanneer u de gebruikersomgeving update. Dit vertegenwoordigt de wijzigingen die zijn aangebracht in de toepassing.

De DOM kan op twee manieren worden gebruikt, hetzij als virtuele DOM of een echte DOM. De prestaties van het framework worden er sterk door beïnvloed.
ReactJS maakt gebruik van de virtuele DOM(document object model). ReactJS heeft zijn kleine formaat mede hier aan te danken en is hierin hetzelfde als Vue.js. 

In tegenstelling tot Vue.js is ReactJS door een groot concern ontwikkeld en kan er daarom veel geld in de ontwikkeling van het framework gestoken worden. Als het gaat om het daadwerkelijk gebruiken van ReactJS ten opzichte van Vue.js dan leert de praktijk dat je meer regels code met ReactJS nodig hebt om hetzelfde te bereiken dan als je dat in Vue.js doet. 

De syntax van ReactJS vertoond veel vergelijkingen met die van Vue.js

![voorbeeld](https://github.com/japgroevemaker/intern_report/raw/master/image/Hello-World-React.png )

ReactJS word net als Vue.js met een vrij simpele en basic library geleverd. Dit heeft als voordeel dat je vrij bent om verschillende packages in je ReactJS app te injecteren zodat je je ReactJS app naar je eigen voorwaarden kan kneden. Hierdoor is ReactJS, net als Vue.js, ook klein van formaat.

### Vue.js VS Angular
Angular is in 2010 ontwikkeld en gelanceerd door Google. Het is een framework gebaseerd op TypeScript. Angular wordt gebruikt door bijvoorbeeld The Guardian en Weather.com.

In tegenstelling tot Vue en ReactJS gebruikt Angular de ‘real’ DOM. Deze DOM is moeilijk te beheersen. Als je bijvoorbeeld de flow kwijt raakt, moet je diep in de code duiken om het probleem te traceren. Daarbij resulteert het in de trage prestatie van dit framework.

De syntax van Angular word, in tegen stelling tot ReactJS en Vue.js, ervaren als complex en soms iet wat verwarrend. 

Omdat Angular door google gecreëerd is, is er voor de ontwikkeling van Angular ook veel geld beschikbaar. In tegenstelling tot Vue.js en ReactJS word Angular geleverd met een enorme library. Van templating tot routing, je hebt geen externe packages nodig. Dit heeft als voordeel dat je meteen kan beginnen met het maken van je Angular app, maar als nadeel dat het formaat van Angular aanzienlijk is ten opzichte van ReactJS en Vue.js.

## Hoe werkt Vue?
Vue werkt redelijk simpel. Als aller eerste installeer je de [Vue CLI](https://cli.vuejs.org/). Vue CLI is een tool die alle benodigdheden bevat om een Vue app te maken. Als je de CLI hebt geïnstalleerd, ga je een nieuw Vue project creëren. Dit doe je door simpelweg ‘vue create’ plus een naam in je command line te typen. Je doorloopt wat stappen, en je hebt een vue project gecreëerd. Vervolgens navigeer je in je command line naar de directory waar het project zich bevind en typ je `npm install` in om de dependencies te installeren.

Je hebt dan een basic Vue app met ‘Hello World’ erin gecreëerd. Je kan dan ook al de bestandsstructuur inzien. Zo wordt een Vue component namelijk aangeduid met het bestandstype .vue. Alles wat een component behelst, HTML, CSS en Javascript wordt allemaal in 1 file geschreven.
Dit houd het overzichtelijk en vergroot het gebruiksgemak. Ook heeft Vue een aantal handigheidjes om bijvoorbeeld een if statement of for loop te schrijven. Stel je hebt een array met data waarin zich bijvoorbeeld afbeeldingen bevinden. Dat is met Vue een fluitje van een cent. Je maakt een img tag aan en voegt daar v-for aan toe. Vervolgens schrijf je de for loop, dit doe je op zo: 
`v-for=”(picture, index) in pictures”` je zegt hiermee in feite: voor elke foto in foto’s. Vervolgens definieer je de src van de afbeelding doormiddel van de src te binden aan de tag, of te wel je bind de data aan het element. Heel makkelijk. Dit ziet er uiteindelijk zo uit: 

```html 
<img v-for=”(picture, index) in pictures” :src="'/path/to/image/' + picture "/> 
```

Met een regel code kan je dus verschillende data elementen ophalen en aan de view overdragen.

## Wat heb ik gemaakt?
Omdat ik voor mijn stage bij Immense een verslag moest inleveren, kwam ik op het idee om de vormgeving hiervan in de vorm van een website te gieten. Dit omdat het leren van een JavaScript framework een van mijn leerdoelen was tijdens de stage en ik gekozen heb voor Vue. Als allereerst, om de basis onder de knie te krijgen, heb ik een cursus op Udemy gevolgd. Toen ik de basis onder de knie had, heb ik een ontwerp gemaakt en zo bepaald hoe mijn applicatie er uit moet gaan zien.

Omdat ik nog nooit een single page application ontwikkeld had, wilde ik mijn applicatie simpel houden om zo beter kennis te maken met Vue.js en er achter te komen wat nou de kracht van een single page application is. Ik kwam er al snel achter dat het dynamisch laden van een pagina als een rode draad door een single page application loopt. Dynamisch wil zeggen dat je site just-in-time word samengesteld (gegenereerd), exact op het moment dat de gebruiker de pagina opvraagt. De content wordt opgehaald uit een database. 

Ik wilde graag een Vue.js frontend in combinatie met een NodeJS en express backend bouwen. De frontend moest zorgen voor de look and feel van mijn applicatie, en de backend moest de data voor mij ophalen uit de database en doorgeven naar de frontend. Als database heb ik gekozen voor MongoDB, dit omdat ik hier al eerder mee gewerkt had. Node en Express waren niet vreemd voor mij omdat ik hier al in eerdere projecten mee gewerkt had. Toen ik deze API had opgezet, was het tijd om de data aan de frontend over te brengen. 

Dit ging ik doen met Axios. Axios is een JavaScript library om HTTP request naar nodejs te maken. Axios maakt voor mij een call naar mijn API en haalt data op. Vervolgens maak ik in mijn Vue component een functie aan die als het ware praat met het bestand waar m’n Axios zijn werk doet en haalt deze call binnen. In deze functie pass ik een parameter die gelijk staat aan de naam van de request in de URL zodat Axios precies weet welke data hij moet ophalen. Vue heeft verschillende lifecycles, zo ook de created lifecycle. In de created lifecycle is de view gecreeerd en klaar om gemount (bevestigd) te worden. In de created lifecycle roep ik vervolgens de functie aan die met Axios praat. Tijdens het aanroepen van deze functie definieer ik de eerder gepasste parameter om zo de juiste data op te halen. De parameter definieer ik aan de hand van de naam van de query (vraag) van de pagina. 

Daarna ben ik vervolgens in alle componenten de data gaan ophalen. Dit doe je door de data functie een object terug te laten geven met key: value pairs waarin je data op kan slaan. Omdat het allemaal local scope betreft, definieer je de data door ‘this’ voor de key te zetten. Vervolgens kan je de data in de view oproepen door de key van het object tussen 4  ` { ` tekens te zetten. De data functie:
```javascript
export default {
    data() {
        return {
            name: 'Joep'
        }
    }
}
```

Toen ik dit had opgezet, was het zaak om door te site te kunnen navigeren. Hiervoor heb ik Vue router gebruikt. Vue router is super makkelijk te gebruiken en vervangt de HTML ` </a> ` (link) tag. De router voorkomt dat je browser zich opnieuw laad als je naar een andere pagina navigeert en zorgt er voor dat de applicatie erg snel aanvoelt. 

Vue-router zit niet standaard in de Vue CLI, dus deze moet je als aparte package installeren. Daarna moet je hem in de main.js importen en aanroepen. Dit ziet er als volgt uit.

```javascript
import VueRouter from 'vue-router'

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes : [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/home.vue'),
    }
  ]
})
```
Vervolgens roep je de `const` aan in het gedeelte waar de app gerenderd word.

```javascript
new Vue({ 
  el: '#app', 
  router, 
  render: h => h(App) 
})
```
En je router werkt. Toen dit opgezet was, kon ik verder met het inrichten en bouwen van mijn stageverslag.

Ik heb tijdens het bouwen gebruik gemaakt van Bootstrap, dit omdat dit een hoop code schrijven scheelt. Daarnaast heb ik gebruik gemaakt van SASS. SASS heb ik gebruikt omdat ik het fijn vind dat je kan nesten, dit houd het lekker overzichtelijk. In mijn stage verslag onder het kopje functie ga ik dieper in op deze frameworks.  

## Op server zetten
En dan? Hoe gaat het verder als je klaar bent met ontwikkelen? Hieronder leg ik stapsgewijs uit hoe ik mij app op mijn eigen server gezet heb.

* __Vue app builden__ <br>
Als je dan eenmaal klaar bent met ontwikkelen, moet je je Vue app nog omzetten in voor de browser leesbare code. Dit doe je door `npm run build` in de commandline in te voeren. De app wordt dan omgezet naar `html`, `CSS` en `Javascript` en komt in een `dist` folder terrecht. Vervolgens moet je de `dist` hernoemen naar `public` en de map verplaatsen naar de map waar de server draait. 

* __View aangeven in `index.js`__ <br>
Vervolgens moet je de server aangeven waar hij zijn `view` vandaan moet halen. Je geeft aan waar de static folder zich bevind en zegt welk bestand hij naar de browser moet sturen. Dit doe je op deze manier:
```javascript
    //handle production
if(process.env.NODE_ENV ===  'production') {
    //static folder
    app.use(express.static(__dirname + '/public/index.html'));

    //handle SPA
    app.get(/.*/, function(req, res){
        res.sendFile(__dirname + '/public/index.html');
    })
}
```
### Server

* __Plesk__ <br>
Vervolgens is het tijd om de server te gaan configureren. Om mijn server beheer te vergemakkelijken gebruik ik plesk. Een graphical user interface om je server te configureren.

* __Domein aanmaken__ <br>
Als eerst is het zaak dat je een domein op je server aanmaakt. Het aanmaken van een domein creert als het waren een eigen afgeschermd stukje op je server waar de bestanden opgeslagen staan. Hier creer je ook een acount waarmee je via FTP toegang tot de bestanden kan krijgen.
![voorbeeld](https://github.com/japgroevemaker/intern_report/raw/master/image/domain.png)

* __SSL certificaat toevoegen__ <br>
Een SSL certificaat is een bestand dat zorgt voor een betere beveiliging van gegevens tussen de server (van jouw website) en een internet browser (zoals Chrome of Internet Explorer). SSL staat letterlijk voor Secure Sockets Layer wat betekent dat er een beveiligde laag geplaatst wordt tussen een server en een internet browser waardoor de gegevens beveiligd worden. Dit doe ik met Let's encrypt, een extentie die ik in Plesk geinstalleerd heb.

* __Koppelen met GitHub repo__ <br>
Je kan je bestanden natuurlijk handmatig via FTP aan je server toevoegen, maar dat is iedere keer veel werk. In plesk kan je ook een Git extentie installeren die een koppeling maakt met een GitHub repo vanwaar uit je de bestanden kan binnenhalen.
![voorbeeld](https://github.com/japgroevemaker/intern_report/raw/master/image/github.png)

* __Nodejs toepassing aanzetten voor domein__ <br>
Plesk heeft een Nodejs extentie die ervoor zorgt dat je Nodejs applicaties op je server kan draaien. Dit is een makkelijk te gebruiken extentie, je moet hem nog wel even configureren. Als je dat gedaan hebt, heb je binnen no-time een Nodejs app draaien op je server.
![voorbeeld](https://github.com/japgroevemaker/intern_report/raw/master/image/nodejs.png)

* __MongoDB via Docker installeren__ <br>
Omdat Plesk niet standaard MongoDB ondersteunt, moet je deze via Docker installeren. Docker is kort gezegd een open-source framework waarmee het mogelijk wordt een applicatie in een lichtgewicht, verplaatsbare container te verpakken. Deze containers worden ook wel een image genoemd. Zo wordt het installeren van een applicatie op een server even eenvoudig als het installeren van een mobiele app op je tablet of smartphone.

* __Docker image MongoDB configureren__ <br>
Daarna, als je de image geinstalleerd heb, moet je hem nog even configureren en ervoor zorgen dat hij ook daadwerkelijk met de juiste Database praat.
![voorbeeld](https://github.com/japgroevemaker/intern_report/raw/master/image/docker.png)

* __Proxy regel toevoegen__ <br>
Als allerlaatst is het zaak een proxy regel toe te voegen voor je domein. Een proxyserver is een server die zich bevindt tussen de computer van een gebruiker en de computer waarop de door de gebruiker gewenste informatie staat. Wil iemand op een computer waarop een proxyserver is ingesteld een andere computer bereiken, dan gebeurt dit niet rechtstreeks, maar via deze proxyserver.
![voorbeeld](https://github.com/japgroevemaker/intern_report/raw/master/image/proxy.png)