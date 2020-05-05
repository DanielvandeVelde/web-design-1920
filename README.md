# Web Design @cmda-minor-web 1920

## Inleiding

Dit is een ontwerpopdracht gericht op 1 persoon; Marijn Meijles.
Gedurende deze opdracht zal ik een _exclusive design_ voor hem maken die we meerdere malen zullen gaan testen.
Wie Marijn is en waarom ik exclusief voor hem design zal ik later dieper op in gaan.

## De opdracht

Het zorgen dat 'mijn' enige gebruiker goed om kan gaan met mijn demo's en prototypes door middel van vele testen en iteraties.
Door dit testen met een echt mens iedere keer mijn ontwerp voor deze persoon te verbeteren.  
Deze persoon is Marijn Meijles en ik zal voor hem een NS-reisplanner maken volledig aangepast aan hem!

## Exclusive design

Ik maak gebruik van verschillende [_Exclusive Design Principles_](https://exclusive-design.vasilis.nl).
Deze zal ik meerdere malen aanhalen in de verschillende prototype uitwerkingen.
Ook heb ik voor mijn uiteindelijke uitwerking hier een overzicht van gemaakt.
Deze principes zijn:

#### Study Situation

Het bestuderen van de situatie.  
Niet alleen op het gebied van het web, en hoe 'mijn' persoon het web navigeert (geen muis, screenreader)
maar ook het maken van (verkeerde!) aannames en designs voor de specifieke situatie waarin mijn persoon zich in bevind.  
Dit kan op het web zelf, maar ook de context er om heen (enkele hand, alleen op dinsdag)

#### Ignore Conventions

Het web is vooral door designers gemaakt voor niet designers.  
Voor mensen met een beperking of die op een andere manier gebruik maken van het web is dit niet altijd handig.  
Vaak zijn de standaard waardes niet ideaal, te druk, te veel of onnodig.
Er mag kritischer om worden gegaan met design principles en web conventies, helemaal als je maar hoeft te ontwerpen voor 1 iemand.

#### Prioritise Identity

Het web is gemaakt door designers en er is dus een zeker bias.  
De identiteit van de ontwerper is aanwezig (misschien te veel) en die van de gebruiker waarschijnlijk te weinig.  
Er kan dus veel meer worden veranderd en bedacht voor mensen die buiten deze 'digitale designer'-groep vallen.  
Deze groepen als top-prioriteit behandelen in plaats van een doelgroep waarvoor je later je site optimaliseert.

#### Add Nonsense

Wanneer je ontwerpt voor mensen met bijvoorbeeld een beperking zijn er verschillende manieren waarop dat kan.  
Deze manieren kunnen ook gebruikt worden voor nonsense.
En nonsense is meer dan alleen iets geinigs of leuks, maar kan ook in het extreme worden doorgevoerd.

## Marijn Meijles

Marijn heeft een motorische stoornis en gebruikt de computer dus net even iets anders dan de meeste mensen.  
Zo gebruikt hij zo min mogelijk zijn trackpad en zo veel mogelijk zijn toetsenbord om door websites te navigeren.
Hij gaat 2 maal per week naar zijn werk en gebruikt hiervoor de trein.  
De NS-applicatie is hier met de kleine knoppen, veel typen en muis gefocuste onderdelen (bv. datum selector) niet ideaal voor Marijn.

Gedurende de verschillende ontmoetingen en testen van de uitwerkingen heb ik Marijn steeds beter kunnen leren kennen.
Mijn user needs zijn dus naarmate de verschillende iteraties volgde steeds iets aangepast.  
Ik begon met het idee dat Marijn aardig goed kon typen en verder geen muis gebruikte en door pagina's heen ging door tab te gebruiken.  
Dit is direct bij mijn eerste uitwerking getest en deze aanname is direct vernietigd.  
Bij de volgende kopjes over uitwerkingen pas ik iedere keer mijn aannames en verwachtingen aan.
Bij het kopje 'De applicatie' heb ik een stuk over wat er uiteindelijk allemaal in zit.

### Eerste ontmoeting

Aan de hand van een gesprek en een eerste test werd duidelijk dat Marijn:

- Sticky keys aan heeft staan
- Macbook OSX gebruikt met Chrome als browser
- Een enorme fan is van rock & metal muziek
- Een programmeur is
- Analystisch, opgewekt en gedreven is
- Het liefst de rechterkant van zijn toetsenbord gebruikt

Voor het product is het belangrijk dat er:

- Grote velden zijn zodat Marijn minder precies hoeft te zijn met klikken
- Uitleg en/of Error-messages bij zitten
- Labels zijn die gelinkt zijn aan inputs
- Werkt in Chrome & Safari

## Uitwerking 1

<details>
<summary>Alles uit week 1</summary>

### Wat ik heb gedaan

Ik ga voor Marijn een product ontwerpen wat hem gaat helpen zijn treinreizen te plannen.  
Dit betekent dat ik waarschijnlijk aan de slag moet gaan met iets wat de datum voor hem moet selecteren, maar misschien kan ik dit op meerdere manieren oplossen.
En natuurlijk wil ik dat dit een variant word die Marijn echt kan gebruiken.

Ik heb een toffe achtergrond gemaakt van een soort metal logo met Marijns naam zowel als een monospace terminal achtige omgeving verder.
De hoop is dat Marijn het leuk vind om twee van zijn passies terug te zien in mijn werk.
Tot slot vul ik ook alvast vaste waarden in, zoals Eindhoven en Amsterdam.  
Aangezien dit is wat Marijn zelf het meeste zal gaan gebruiken.
Een klein beetje leuke nonsense natuurlijk, maar vooral om zijn identiteit terug te laten komen.

Verder heb ik gezorgd voor een grote duidelijk groene knop in de kleur 'terminal' groen, zoals je die misschien wel herkent van de groene tekst op de bekende zwarte achtergrond.
Dit is de hoofdinteractie dus vandaar duidelijk en goed gekleurd.
Onderin is een menu te vinden met daarin het overzicht van wat Marijn allemaal besloten heeft.  
Dit is tevens een klikbaar menu waar hij ten allen tijden terug kan gaan om dingen te veranderen.

Natuurlijk gaat een aantal van deze dingen volledig fout en ben ik aan het testen met aannames die ik eerder heb gedaan vanuit onze eerste ontmoeting.  
Zo heb ik alles klaar gemaakt zodat je er makkelijk door heen kan gaan met tab en enter.  
Ook heb ik functionaliteit toegevoegd met de pijltjes.
Momenteel is het alleen mogelijk 1 van deze twee te gebruiken, niet allebei tegelijk.

### Vragen bij het maken

Terwijl ik bezig was met mijn eerste testplan had ik een aantal ideeen en aannames.  
Een aantal hiervan heb ik verwerkt, sommige er van heb ik niet verwerkt en juist tijdens het testen gevraagd.
Of uit de testen van mijn medestudenten gehaald natuurlijk.

- Is Marijn zo geweldig dat hij weet in welke provincie de stad bevind die hij wilt bezoeken? Dan kan ik namelijk station selectie op provincie -> stad mogelijk maken.
- Welke manier van typen gebruikt Marijn of welke prefereert hij? Gebruikt hij iets zoals T9, een QWERTY-toetsenbord lay-out of het alfabet beginnend bij de A?
- Wil Marijn enkel de datum invullen of is de dag van de week ook relevant voor hem?
- Eindhoven als vast vertrek station en Amsterdam als vast aankomst?
- Er wordt bij de NS een keuze aangeboden voor 'toegankelijk reizen' zowel als extra overstaptijd. Maakt Marijn hier gebruik van?
- Wilt Marijn via bepaalde stations reizen of wilt hij enkel een start en aankomststation aangeven?
- Zijn er vaste waardes die Marijn makkelijker vind voor de dagen of uren?

### Testplan

Kan Marijn een reis plannen van Eindhoven naar Amsterdam.
Hieronder de vragen met antwoorden, overige feedback staat onder het kopje van volgende week.

##### Hoe werkt het invullen van de treinstations voor Marijn?

Kan hij dit goed met invul velden?

- Dit kan, maar typen is niet het allermakkelijkst voor Marijn
  Moet ik hier iets anders op verzinnen?
- Waarom niet :-)

##### Hoe werkt het invullen van de nummer velden?

Is omhoog/naar beneden te vervelend voor bijvoorbeeld 31 dagen van het jaar?

- Nee, dat is het niet
  Is het nodig dat hij weet welke dag van de week het is?
- Niet noodzakelijk

##### Kan hij het volledige prototype succesvol doorlopen?

Waar gaat het fout, zie ik hier makkelijke oplossingen voor?

- Meerdere dingen die 'fout' gaan. Opgeschreven als feedback

##### Hoe werken de pijltjes toetsen/enter toets als besturing?

Zijn er andere knoppen die Marijn prettiger vind/beter werken?

- H,J,K & L als besturing werkt het best.
- Tab functionaliteiten is niet belangrijk/wordt niet gebruikt

</details>

## Uitwerking 2

<details>
<summary> Hier alles over uitwerking 2 </summary>

### Feedback uitwerking 2

Uit de eerste test haalde ik enorm veel feedback:

- De toetsen; HJKL om te besturen
- Links/rechts moet ook bepalen dat hij links en rechts gaat door de datumpicker
- Uitleg tekst bij de velden zetten en niet enkel aan het begin. Dit is te veel instuderen.
- Placeholder tekst ipv values (logisch maar goed om te weten)
- Feedback bij verplaatsen over scherm verbeteren
- Nonsense: Cursor veranderen wanneer muis in beeld is.
- De knop 'Next' is overbodig bij het accepteren van het inputveld (veranderen naar naam volgend veld)
- hover & focus andere vormgeving geven
- Aangeven in menu onderin wat ingevuld is
- Interface veranderen, is iets te groot, kan kleiner en eenvoudiger
- Gebruik maken van de lege ruimte (misschien met meer nonsense?!)
- feedback in tekst geven op het bevestigings/'klopt dit?'-scherm.
- Hij plant standaard 1 uur voor werk zijn reizen.
- En anders is dit 1 dag van te voren

### Wat ik heb gedaan

Ik heb de hele UI omgegooid en ben voor iets gegaan wat meer 'normaal' is, geinspireerd op de oudere NS UI van de ticketautomaten.
Hopelijk maakt dat het gebruik van de applicatie iets makkelijker.  
Ik heb alles pijltjestoetsen en muis besturing weggehaald.  
Momenteel kan je alleen met HJKL en Enter de applicatie besturen.  
Ik heb alle vreemde inputs weggehaald en gezorgd dat er enkel kan worden ingevuld met behulp van de besturing.  
Hierdoor heb ik zowel als de gebruiker meer zeggeschap over wat er precies gebeurd.  
Alle overbodige 'volgende' en 'next' knoppen zijn verwijderd.  
Ik maak nu gebruik van de lege ruimte door wat nonsense toe te voegen.  
Tevens heb ik ook rekening gehouden met Marijn zijn presets en mijn eerdere onderzoek van demo 1 meegenomen als solide basis.
Ik heb een beetje meer nonsense toegevoegd en wat duidelijkheid gegeven op welk onderdeel je je bevind.

### Testplan

Kan Marijn een reis plannen van Eindhoven naar Amsterdam.
Hieronder de vragen met antwoorden, overige feedback staat onder het kopje van volgende week.

##### Werkt het invullen van treinstations op deze manier?

Is het invullen van de eerste twee letters duidelijk?

- Is duidelijk, maar tooltip was niet te lezen
- Toch wel invullen met toetsenbord toevoegen

##### Hoe werkt het invullen van de nummer velden?

Marijn was niet in staat er veel kapot aan te maken.
Invullen van de velden was dus prettig.
Feedback; dagen kunnen in de min, jaartal kan te hoog, uren/minuten moeten terug naar 0 als ze de top hebben bereikt.

##### Kan hij het volledige prototype succesvol doorlopen?

Marijn was goed in staat het prototype door te lopen.
Niets hield hem hierbij tegen en hij was door niets verward

##### Hoe werkt H,J,K,L + Enter als besturing?

Marijn geeft aan dat hoewel hij dit beter vind dat de pijltjes-toetsen en tab hij toch ook de muis had willen gebruiken.
Ook geeft hij aan dat hij toch de eerste twee letters van het treinstation wel kan typen.

</details>

## Uitwerking 3

<details>
<summary> Hier alles over uitwerking 3 </summary>

Feedback van test 3:

- Niet alle maanden hebben 31 dagen (duh!)
- Start en eind locatie kunnen niet hetzelfde zijn. Hier kan ik iets voor maken.
- Meer ruimte maken voor stations als het een lange lijst is.
- Tooltip is niet altijd zichtbaar door locatie rechtsbovenin.
- Eerste letters typen is makkelijker dan letters selecteren met HJKL. Dit laat echter weer een moeilijke besturing/design beslissingen over met verkeerde inputs.
- Dagen kunnen blijkbaar in de min?
- Naar links om terug te gaan naar hoofdmenu
- Muis als besturing toevoegen
- Wrap-around voor de tijd
- Selectie bevestigen stuurt je naar volgende menu item in de lijst
- Pijltjes mogelijk ook toevoegen

### Wat ik heb gedaan

Pijltjes zijn ook toegevoegd als manier om te navigeren door de applicatie.  
Op elke locatie kan je dus zowel pijltjes als H,K,K,L gebruiken zelfs door elkaar heen.  
Het bevestigen van een optie zet de cursor nu op het volgende menu onderdeel, niet de ene waar je was.  
Het is nu ook mogelijk om terug te gaan naar het hoofdmenu.  
Dit plaatst je wel weer op het menu onderdeel waar je was.  
Dagen kunnen nu niet meer in de min gaan.  
Het jaartal kan alleen omhoog/naar beneden als het december is.  
De tijd heeft nu een wrap-around gekregen zodat je van de top weer onderaan begint en vice versa.  
Als de lijst van treinstations te lang is dan komen deze in twee kolommen te staan.

</details>

## Toegepast Exclusive design

Dit is een klein stukje over welke stukken Exclusive Design ik heb toegepast.  
Hierboven staat een kleine samenvatting van wat _Excluve Design_ inhoud.  
Ook staan bij de uitwerkingen ongeveer dezelfde dingen in een meer natuurlijk proces beschreven.

#### Study Situation

Dankzij het fantastische idee om meerdere camera's te hebben bij het testen heb ik goed de gebruiks context kunnen zien.  
Ook aan de hand van het velen testen van mijn -vaak net verkeerde- aannames heb ik veel geleerd.  
Uiteindelijk was de tab-toets niet wat Marijn gebruikte, zelden de pijltjes toetsen en vrijwel altijd de H,J,K,L toetsen.  
Soms navigeerde hij toch met de muis, ook al deed hij vrijwel alles met H,J,K & L.  
De tijd is altijd afgestemd op vandaag, aangezien hij vaak op de dag zelf plant.

#### Ignore Conventions

Een vrij grote die ik heb genegeerd; de muis werkt niet!  
Marijn gebruik graag het toetsenbord, dus heb ik dat als eerste gedesignd, zonder ook maar te denken aan muis besturing.  
Het web is vooral door designers gemaakt voor niet designers.  
Voor mensen met een beperking of die op een andere manier gebruik maken van het web is dit niet altijd handig.  
Vaak zijn de standaard waardes niet ideaal, te druk, te veel of onnodig.
Er mag kritischer om worden gegaan met design principles en web conventies, helemaal als je maar hoeft te ontwerpen voor 1 iemand.

#### Prioritise Identity

Een aantal aspecten zijn aangepast op Marijn en zijn identiteit.  
De reisplanner had hij nodig voor het reizen naar werk, dus huis & werk zijn standaard waardes geworden.  
Vaak doet hij het op de dag zelf, dus dat is de standaard waarde geworden.  
Ik heb in de laatste uitwerking ook pas pijtljes-toetsen toegevoegd, aangezien Marijn deze bijna nooit gebruikte.  
Marijn wilde ook specifieke wrap-arounds, van minimale waarde naar maximale, zelfs waar ik dat een onhandige keuze vond.
Ook heb ik bij keuze in kleur, cursor en design rekening gehouden met Marijn zijn passies/hobbys en natuurlijk feedback.

#### Add Nonsense

In het begin voelde mijn 'geen muis, enkel H,J,K & L' als de grootste nonsense.  
Maar inmiddels voel ik dit als noodzakelijk voor een goede werking van de uitwerking voor Marijn.  
Wat betreft nonsense zitten er in de verschillende uitwerkingen verschillende stukjes nonsense.  
Het begon met een volledig terminal-omgeving met terminal cursor, monospace-font en Metal achtergrond.
Uiteindelijk heb ik een Metal cursor toegevoegd, groeiende tekst bij het klikken en een handsignaal bij iedere keer dat Marijn iets bevestigd.  
Een knik van instemming voor zijn Metal keuzes.

## De applicatie

Natuurlijk na al deze iteraties en goede feedback van Marijn bevat de uitwerking het volgende:

- Besturing met pijtljes toetsen zowel als H,J,K & L. Bevestigen met de enter-toets.
- Wrap-around voor alle elementen (einde gaat terug naar begin en vice versa)
- Duidelijke tooltip-tekst op een duidelijke locatie
- Zo min mogelijk ruimte om dingen kapot te maken of verkeerde waardes in te vullen.
- Feedback met de locatie waar je bent op scherm en welke opties je heb geselecteerd.
- Feedback met welke informatie er is ingevuld.
- Sommige informatie ingevuld zoals huidige datum/tijd en snelkeuzes van stations.
- Echte koppeling naar NS.nl voor huidige reisinformatie.
- Eerste letters van een station selecteren ipv lange stationsnamen te typen.
- Nonsense: Metal-cursor, groeiende tekst bij klikken, handsignaal bij enter.

Kleine functionele dingen die ik nog zou willen toevoegen:

- Niet alle maanden hebben 31 dagen, hier zou ik dus een maximum op kunnen zetten.
- vertrek- en aankomststation kunnen hetzelfde zijn, dit zou ik kunnen oplossen.
- Verbinding met NS api om data te laten zien in dezelfde stijl met de mogelijkheid hier doorheen te bladeren met H,J,K & L.

## Conclusie

Al met al was dit voor mij een ontzettende uitdaging.  
Niet zo zeer het testen van aannames maar zorgen voor een ontwerp wat ideaal is voor 1 persoon.  
Er waren een aantal aannames die ik had gedaan of feedback dit ik had gekregen die ik netjes heb kunnen uitwerken.  
Soms kwam daar echter weer feedback op terug dat mijn uitwerking op de eerder gegeven feedback toch niet helemaal correct was.  
Hierbij was het selecteren van het station door te typen en het vervangen van de beweging door de applicatie. Hieruit bleek na het testen van de tweede uitwerking dat hij de stations ook best wilde typen ook al had hij hier moeite mee. Tevens bij het vervangen van de beweging door de applicatie dat hij naast de H,J,K en L ook de mogelijkheid wilde behouden om de muis te gebruiken.  
Dus veel verschillende aannames en manieren om feedback te ontvangen en gebruiken zorgen er voor dat brede oplossingen niet altijd werken voor de individu waar voor je het maakt.
Een heel erg leuke opdracht.  
Wel erg lastig, maar uiteindelijk veel geleerd over ontwerpen en een uiteindelijk goed resultaat.
