# Web Design @cmda-minor-web 1920

## Inleiding

Dit is een ontwerpopdracht gericht op 1 persoon; Marijn Meijles.
Gedurende deze opdracht zal ik een _exclusive design_ voor hem maken die we meerdere malen zullen gaan testen.
Wie Marijn is en waarom ik exclusief voor hem design zal ik later dieper op in gaan.

## De opdracht

Het zorgen dat 'mijn' enige gebruiker goed om kan gaan met mijn demo's en prototypes door middel van vele testen en iteraties.
Door dit testen met een echt mens iedere keer mijn ontwerp te verbeteren.

## Exclusive design

Ik maak gebruik van verschillende [_Exclusive Design Principles_](https://exclusive-design.vasilis.nl) namelijk:

- Study Situation
- Ignore Conventions
- Prioritise Identity
- Add Nonsense

## Marijn Meijles

Marijn heeft een motorische stoornis en gebruikt de computer dus net even iets anders dan de meeste mensen. Zo gebruikt hij zo min mogelijk zijn trackpad en zo veel mogelijk zijn toetsenbord om door websites te navigeren.

Aan de hand van een gesprek en een eerste test werd duidelijk dat Marijn:

- Sticky keys aan heeft staan
- Macbook OSX gebruikt met Chrome als browser
- Een enorme fan is van rock & metal muziek
- Een programmeur is
- Analystisch, opgewekt en gedreven is
- Het liefst de rechterkant van zijn toetsenbord gebruikt

Voor het product is het belangrijk dat er:

- Grote velden zijn zodat Marijn minder precies hoeft te zijn
- Uitleg en/of Error-messages bij zitten
- Labels zijn die gelinkt zijn aan inputs
- Werkt in Chrome & Safari
- besturing is met behulp van Enter,Spatiebalk,Pijltjes en desnoods H,J,K & L.

### Uitwerking 1

<details>
<summary>Alles uit week 1</summary>

Ik ga voor Marijn een product ontwerpen wat hem gaat helpen zijn treinreizen te plannen.  
Dit betekend dat ik waarschijnlijk aan de slag moet gaan met iets wat de datum voor hem moet selecteren, maar misschien kan ik dit op meerdere manieren oplossen.
En natuurlijk wil ik dat dit een variant word die Marijn echt kan gebruiken.

Ik heb een toffe achtergrond gemaakt van een soort metal logo met Marijns naam zowel als een monospace terminal achtige omgeving verder. De hoop is dat Marijn het leuk vind om twee van zijn passies terug te zien in mijn werk.

Verder heb ik gezorgd voor een grote duidelijk groene knop in de kleur 'terminal' groen. Dit is de hoofdinteractie dus vandaar duidelijk en goed gekleurd.

Onderin is een menu te vinden met daarin het overzicht van wat Marijn allemaal besloten heeft. Dit is tevens een klikbaar menu waar hij ten allen tijden terug kan gaan om dingen te veranderen.

### Vragen

- Is Marijn zo geweldig dat hij weet in welke provincie de stad bevind die hij wilt bezoeken? Dan kan ik namelijk station selectie op provincie -> stad mogelijk maken.
- Welke manier van typen gebruikt Marijn of welke prefereert hij? Gebruikt hij iets zoals T9, een QWERTY-toetsenbord lay-out of het alfabet beginnend bij de A?
- Wil Marijn enkel de datum invullen of is de dag van de week ook relevant voor hem?
- Eindhoven als vast vertrek station en Amsterdam als vast aankomst?
- Er wordt bij de NS een keuze aangeboden voor 'toegankelijk reizen' zowel als extra overstaptijd. Maakt Marijn hier gebruik van?
- Wilt Marijn via bepaalde stations reizen of wilt hij enkel een start en aankomststation aangeven?
- Zijn er vaste waardes die Marijn makkelijker vind voor de dagen of uren?

### Testplan

Kan Marijn een reis plannen van Eindhoven naar Amsterdam.

##### Hoe werkt het invullen van de treinstations voor Marijn?

Kan hij dit goed met invul velden?  
Moet ik hier iets anders op verzinnen?

##### Hoe werkt het invullen van de nummer velden?

Is omhoog/naar beneden te vervelend voor bijvoorbeeld 31 dagen van het jaar?  
Is het nodig dat hij weet welke dag van de week het is?

##### Kan hij het volledige prototype succesvol doorlopen?

Waar gaat het fout, zie ik hier makkelijke oplossingen voor?

##### Hoe werken de pijltjes toetsen/enter toets als besturing?

Zijn er andere knoppen die Marijn prettiger vind/beter werken?

#### TODO uitwerking 1

Nog te veel te doen.

- [x] Basic CSS
- [x] Meer identity
- [ ] Meer nonsense!
- [ ] Goede uitwerking datepicker
- [ ] Lus maken naar NS, mogelijk terugkoppeling ipv redirect

</details>

### Uitwerking 2

<details>
<summary> Hier alles over uitwerking 2 </summary>

#### Feedback uitwerking 1

Uit de eerste test haalde ik enorm veel feedback:

- HJKL om te besturen
- Links/rechts moet ook bepalen dat je links en rechts gaat door de datumpicker
- Uitleg tekst bij de velden zetten.
- Placeholder tekst ipv values.
- Feedback verbeteren
- Cursor veranderen wanneer muis in beeld is.
- Next overbodig bij het accepteren van het inputveld (veranderen naar naam volgend veld)
- hover & focus andere vormgeving
- Aangeven in menu onderin wat ingevuld is
- Interface veranderen, is iets te groot, kan eenvoudiger
- Gebruik maken van de lege ruimte
- feedback op 'klopt dit' scherm.
- Opnieuw kijken naar design principles.
- Standaard 1 uur voor werk plant hij zijn reizen.
- En anders is dit 1 dag van te voren

#### Wat ik heb gedaan

Ik heb de hele UI omgegooid en ben voor iets gegaan wat meer 'normaal' is.  
Hopelijk maakt dat het gebruik van de applicatie iets makkelijker.  
Ik heb alles pijltjestoetsen en muis besturing weggehaald.  
Momenteel kan je alleen met HJKL en Enter de applicatie besturen.  
Ik heb alle vreemde inputs weggehaald en gezorgd dat er enkel kan worden ingevuld met behulp van de besturing.  
Hierdoor heb ik zowel als de gebruiker meer zeggeschap over wat er precies gebeurd.  
Alle overbodige 'volgende' en 'next' knoppen zijn verwijderd.  
Ik maak nu gebruik van de lege ruimte door wat nonsense toe te voegen.  
Tevens heb ik ook rekening gehouden met Marijn zijn presets en mijn eerdere onderzoek van demo 1 meegenomen als solide basis.
Ik heb een beetje meer nonsense toegevoegd en wat duidelijkheid gegeven op welk onderdeel je je bevind.

</details>
