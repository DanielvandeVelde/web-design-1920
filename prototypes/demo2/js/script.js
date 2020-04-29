let currentArea = "mainmenu";
let currentList = "0";
let cursorPosition = "0";
const areaArray = ["vertrek", "aankomst", "datum", "tijd"];
const stationsArray = [
  "Aalten",
  "Abcoude",
  "Akkrum",
  "Alkmaar",
  "Almelo",
  "Alkmaar Noord",
  "Alphen a/d Rijn",
  "Amersfoort Schothorst",
  "Amersfoort",
  "Amsterdam RAI",
  "Amsterdam Amstel",
  "Amsterdam Centraal",
  "Amsterdam Sloterdijk",
  "Amsterdam Muiderpoort",
  "Amsterdam Zuid",
  "Anna Paulowna",
  "Apeldoorn",
  "Appingedam",
  "Arkel",
  "Arnemuiden",
  "Arnhem Centraal",
  "Arnhem Velperpoort",
  "Assen",
  "Amsterdam Bijlmer ArenA",
  "Arnhem Presikhaaf",
  "Amsterdam Van der Madeweg",
  "Amsterdam Lelylaan",
  "Almere Centrum",
  "Almere Buiten",
  "Almere Muziekwijk",
  "Baarn",
  "Baflo",
  "Barendrecht",
  "Barneveld Centrum",
  "Barneveld Noord",
  "Bedum",
  "Beek-Elsloo",
  "Beesd",
  "Beilen",
  "Almere Parkwijk",
  "Bergen op Zoom",
  "Best",
  "Beverwijk",
  "Bilthoven",
  "Barneveld Zuid",
  "Blerick",
  "Bloemendaal",
  "Bodegraven",
  "Borne",
  "Boskoop",
  "Boskoop Snijdelwijk",
  "Bovenkarspel-Grootebroek",
  "Boxmeer",
  "Boxtel",
  "Breda",
  "Breda-Prinsenbeek",
  "Breukelen",
  "Lansingerland-Zoetermeer",
  "Brummen",
  "Buitenpost",
  "Bunde",
  "Bunnik",
  "Bussum Zuid",
  "Capelle Schollevaar",
  "Castricum",
  "Chevremont",
  "Coevorden",
  "Culemborg",
  "Cuijk",
  "Dalen",
  "Diemen Zuid",
  "Daarlerveen",
  "Diemen",
  "Delft Campus",
  "Dalfsen",
  "Deinum",
  "Delden",
  "Delft",
  "Delfzijl",
  "Deurne",
  "Deventer",
  "Didam",
  "Delfzijl West",
  "Dieren",
  "Doetinchem",
  "Den Dolder",
  "Dordrecht",
  "Dordrecht Zuid",
  "Driebergen-Zeist",
  "Driehuis",
  "Doetinchem De Huet",
  "Deventer Colmschate",
  "Dordrecht Stadspolders",
  "De Vink",
  "Dronryp",
  "Duiven",
  "Duivendrecht",
  "Echt",
  "Eindhoven Strijp-S",
  "Dronten",
  "Ede-Wageningen",
  "Ede Centrum",
  "Eemshaven",
  "Eindhoven",
  "Elst",
  "Emmen",
  "Enkhuizen",
  "Enschede",
  "Ermelo",
  "Enschede De Eschmarke",
  "Etten-Leur",
  "Eijsden",
  "Enschede Kennispark",
  "Almere Oostvaarders",
  "Arnhem Zuid",
  "Amersfoort Vathorst",
  "Apeldoorn Osseveld",
  "Bovenkarspel Flora",
  "Amsterdam Holendrecht",
  "Franeker",
  "Apeldoorn De Maten",
  "Eygelshoven Markt",
  "Amsterdam Science Park",
  "Boven-Hardinxveld",
  "Groningen Europapark",
  "Gaanderen",
  "Helmond Brandevoort",
  "Geldermalsen",
  "Geldrop",
  "Geleen Oost",
  "Geleen-Lutterade",
  "Gilze-Rijen",
  "Goes",
  "Goor",
  "Gorinchem",
  "Gouda Goverwelle",
  "Gouda",
  "Gramsbergen",
  "Glanerbrug",
  "Groningen",
  "Groningen Noord",
  "Grou-Jirnsum",
  "Grijpskerk",
  "Haarlem Spaarnwoude",
  "Den Haag Mariahoeve",
  "Den Haag Moerwijk",
  "Den Haag HS",
  "Den Haag Centraal",
  "Haarlem",
  "Haren OV Transferium",
  "Hurdegaryp",
  "Hardenberg",
  "Harderwijk",
  "Hardinxveld-Giessendam",
  "Harlingen",
  "Haren",
  "Harlingen Haven",
  "Helmond Brouwhuis",
  "Helmond 't Hout",
  "Heerenveen IJsstadion",
  "Heemstede-Aerdenhout",
  "Den Helder Zuid",
  "Heerenveen",
  "Heerhugowaard",
  "Heerlen",
  "Heeze",
  "Heiloo",
  "Heino",
  "Den Helder",
  "Hengelo Oost",
  "Helmond",
  "Hemmen-Dodewaard",
  "Hengelo",
  "Heemskerk",
  "s-Hertogenbosch",
  "s-Hertogenbosch Oost",
  "Hilversum",
  "Hindeloopen",
  "Hilversum Media Park",
  "Hoensbroek",
  "Hollandsche Rading",
  "Holten",
  "Hillegom",
  "Hoogeveen",
  "Hoogezand-Sappemeer",
  "Hoofddorp",
  "Hoogkarspel",
  "Houten Castellum",
  "Hoorn Kersenboogerd",
  "Hoorn",
  "Eygelshoven",
  "Horst-Sevenum",
  "Houten",
  "Houthem-St. Gerlach",
  "Kampen",
  "Kapelle-Biezelinge",
  "Kerkrade Centrum",
  "Kesteren",
  "Kampen Zuid",
  "Klarenbeek",
  "Klimmen-Ransdaal",
  "Koog aan de Zaan",
  "Zaandijk Zaanse Schans",
  "Koudum-Molkwerum",
  "Krabbendijke",
  "Krommenie-Assendelft",
  "Kropswolde",
  "Kruiningen-Yerseke",
  "Den Haag Ypenburg",
  "Den Haag Laan v NOI",
  "Lage Zwaluwe",
  "Leiden Lammenschans",
  "Leerdam",
  "Leeuwarden",
  "t Harde",
  "Leeuwarden Camminghaburen",
  "Leiden Centraal",
  "Lelystad Centrum",
  "Lichtenvoorde-Groenlo",
  "Lochem",
  "Halfweg-Zwanenburg",
  "Loppersum",
  "Heerlen Woonboulevard",
  "Lunteren",
  "Emmen Zuid",
  "Maarn",
  "Maarssen",
  "Maastricht",
  "Maastricht Randwyck",
  "Mantgum",
  "Mariënberg",
  "Martenshoek",
  "Maarheeze",
  "Hengelo Gezondheidspark",
  "Meerssen",
  "Meppel",
  "Middelburg",
  "Hardinxveld Blauwe Zoom",
  "Mook Molenhoek",
  "Maastricht Noord",
  "Almere Poort",
  "Nijmegen Lent",
  "Naarden-Bussum",
  "Nieuw Amsterdam",
  "Nieuwerkerk a/d IJssel",
  "Bad Nieuweschans",
  "Nieuw Vennep",
  "Nunspeet",
  "Nuth",
  "Nijmegen Heyendaal",
  "Nijkerk",
  "Nijmegen",
  "Nijverdal",
  "Nijmegen Dukenburg",
  "Nijmegen Goffert",
  "Obdam",
  "Oisterwijk",
  "Oldenzaal",
  "Olst",
  "Ommen",
  "Oosterbeek",
  "Hoevelaken",
  "Opheusden",
  "Oss",
  "Oss West",
  "Sliedrecht Baanhoek",
  "Oudenbosch",
  "Purmerend Weidevenne",
  "Overveen",
  "Rijswijk",
  "Purmerend Overwhere",
  "Rotterdam Alexander",
  "Purmerend",
  "Putten",
  "Raalte",
  "Ravenstein",
  "Rhenen",
  "Reuver",
  "Rheden",
  "Almelo de Riet",
  "Rilland-Bath",
  "Roermond",
  "Rosmalen",
  "Roodeschool",
  "Roosendaal",
  "Rotterdam Blaak",
  "Rotterdam Centraal",
  "Rotterdam Noord",
  "Rotterdam Zuid",
  "Rotterdam Stadion",
  "Ruurlo",
  "Rijssen",
  "Rotterdam Lombardijen",
  "Santpoort Noord",
  "Santpoort Zuid",
  "Sappemeer Oost",
  "Sauwerd",
  "Landgraaf",
  "Schagen",
  "Scheemda",
  "Schiedam Centrum",
  "Schinnen",
  "Schin op Geul",
  "Schiphol Airport",
  "Sittard",
  "Sliedrecht",
  "Sneek",
  "Soest",
  "Soestdijk",
  "Hilversum Sportpark",
  "Soest Zuid",
  "Spaubeek",
  "Sneek Noord",
  "Stavoren",
  "Stedum",
  "Steenwijk",
  "Susteren",
  "Swalmen",
  "Tegelen",
  "Terborg",
  "Tilburg Universiteit",
  "Tiel",
  "Tilburg",
  "Tilburg Reeshof",
  "Twello",
  "Tiel Passewaaij",
  "Sassenheim",
  "Utrecht Vaartsche Rijn",
  "Utrecht Leidsche Rijn",
  "Utrecht Zuilen",
  "Utrecht Terwijde",
  "Uitgeest",
  "Uithuizen",
  "Uithuizermeeden",
  "Usquert",
  "Utrecht Overvecht",
  "Utrecht Centraal",
  "Utrecht Lunetten",
  "Utrecht Maliebaan",
  "Veenendaal Centrum",
  "Veenendaal West",
  "Valkenburg",
  "Varsseveld",
  "Veendam",
  "Veenendaal-De Klomp",
  "Feanwâlden",
  "Velp",
  "Venlo",
  "Venray",
  "Vierlingsbeek",
  "Vleuten",
  "Vlissingen",
  "Vlissingen Souburg",
  "Voorhout",
  "Voerendaal",
  "Voorburg",
  "Voorschoten",
  "Vorden",
  "Vriezenveen",
  "Vroomshoop",
  "Vught",
  "Voorst-Empe",
  "Waddinxveen Noord",
  "Waddinxveen",
  "Waddinxveen Triangel",
  "Warffum",
  "Weert",
  "Weesp",
  "Wehl",
  "Westervoort",
  "Wezep",
  "Wierden",
  "Winschoten",
  "Winsum",
  "Winterswijk",
  "Winterswijk West",
  "Woerden",
  "Wolfheze",
  "Wolvega",
  "Workum",
  "Wormerveer",
  "Wijchen",
  "Wijhe",
  "IJlst",
  "Zaandam Kogerveld",
  "Zaandam",
  "Zaltbommel",
  "Zandvoort aan Zee",
  "Zetten-Andelst",
  "Zevenaar",
  "Zevenbergen",
  "Zoetermeer Oost",
  "Zoetermeer",
  "Zuidbroek",
  "Zuidhorn",
  "Zutphen",
  "De Westereen",
  "Zwolle Stadshagen",
  "Zwolle",
  "Zwijndrecht",
  "Veendam",
  "Veenendaal Centrum",
  "Veenendaal West",
  "Veenendaal-De Klomp",
  "Velp",
  "Venlo",
  "Venray",
  "Vierlingsbeek",
  "Vlaardingen Centrum",
  "Vlaardingen Oost",
  "Vlaardingen West",
  "Vleuten",
  "Vlissingen",
  "Vlissingen Souburg",
  "Voerendaal",
  "Voorburg",
  "Voorhout",
  "Voorschoten",
  "Voorst-Empe",
  "Vorden",
  "Vriezenveen",
  "Vroomshoop",
  "Vught",
  "Waddinxveen",
  "Waddinxveen Noord",
  "Warffum",
  "Weert",
  "Weesp",
  "Wehl",
  "Westervoort",
  "Wezep",
  "Wierden",
  "Wijchen",
  "Wijhe",
  "Winschoten",
  "Winsum",
  "Winterswijk",
  "Winterswijk West",
  "Woerden",
  "Wolfheze",
  "Wolvega",
  "Workum",
  "Wormerveer",
  "Zaandam",
  "Zaandam Kogerveld",
  "Zaltbommel",
  "Zandvoort aan Zee",
  "Zetten-Andelst",
  "Zevenaar",
  "Zevenbergen",
  "Zoetermeer",
  "Zoetermeer Oost",
  "Zuidbroek",
  "Zuidhorn",
  "Zutphen",
  "Zwijndrecht",
  "Zwolle"
];
const dateStartValues = [];
const timeStartValues = [];
let maxDayMonth = "";
let annoyance = 26;

window.addEventListener("load", event => {
  changeFocus();
  fillNumbers();
});

document.addEventListener("click", function() {
  const footer = document.getElementsByTagName("footer")[0];
  if (annoyance < 35) {
    annoyance++;
    footer.style.fontSize = annoyance + "px";
  }
  if (annoyance == 35) {
    annoyance++;
    footer.classList.add("rainbow");
  }
});

document.onkeydown = function keyPress() {
  if (event.keyCode == 13) {
    const rock = document.getElementById("rock");
    rock.classList.add("moveIt");
    setTimeout(function() {
      rock.classList.remove("moveIt");
    }, 1500);
  }
  if (event.keyCode == 37 || event.keyCode == 72) {
    if (currentArea == "vertrek" || currentArea == "aankomst") {
      if (currentList == 0) {
        changeFocus();
        backtoMain(0);
      }
    }
    if (currentArea == "datum" || currentArea == "tijd") {
      if (cursorPosition == 0) {
        changeFocus();
        backtoMain(0);
      }
    }
  }
  if (currentArea == "mainmenu") {
    mainMenu(event.keyCode);
    return;
  }
  if (currentArea == "vertrek" || currentArea == "aankomst") {
    stations(event.keyCode);
    return;
  }
  if (currentArea == "datum") {
    dateNumbers(event.keyCode);
    return;
  }
  if (currentArea == "tijd") {
    timeNumbers(event.keyCode);
    return;
  }
};

function changeFocus() {
  const area = document.getElementById(currentArea);
  const currentItem = area.children[currentList].children[cursorPosition];
  currentItem.classList.toggle("selected");
}

function openSection() {
  if (cursorPosition == 4) {
    callNS();
    return;
  }
  const menuItem = document.getElementById("mainmenu").children[0].children[
    cursorPosition
  ];
  menuItem.classList.add("active");
  currentArea = areaArray[cursorPosition];
  cursorPosition = 0;
  const section = document.getElementById(currentArea);
  section.classList.toggle("hidden");
  changeFocus();
}

function backtoMain(num = 1) {
  const section = document.getElementById(currentArea);
  section.classList.toggle("hidden");
  const menuItem = document.getElementsByClassName("active")[0];
  menuItem.classList.remove("active");
  cursorPosition = areaArray.indexOf(currentArea);
  cursorPosition += num;
  currentArea = "mainmenu";
  currentList = 0;
  changeFocus();
}

function stationStuff() {
  const usefulArray = [];
  const area = document.getElementById(currentArea);
  const currentItem = area.children[currentList].children[cursorPosition];
  if (currentList == 2) {
    area.setAttribute("data-letter", "");
    document.getElementById("mainmenu").children[0].children[
      areaArray.indexOf(currentArea)
    ].children[1].textContent = currentItem.textContent;
    changeFocus();
    backtoMain();
  } else {
    if (area.getAttribute("data-letter")) {
      const station =
        area.getAttribute("data-letter") +
        currentItem.textContent.toLowerCase();
      let chosen = document.getElementsByClassName("chosen")[0];
      for (var i = 0; i < stationsArray.length; i++) {
        if (stationsArray[i].startsWith(station)) {
          usefulArray.push(stationsArray[i]);
        }
      }
      area.setAttribute("data-letter", "");
      chosen.classList.toggle("chosen");
      if (usefulArray.length > 0) {
        appendStations(usefulArray);
      }
    } else {
      area.setAttribute("data-letter", currentItem.textContent);
      currentItem.classList.add("chosen");
    }
  }
}

function appendStations(possibleStations) {
  const area = document.getElementById(currentArea);
  const stationList = area.children[2];
  stationList.textContent = "";
  let rawHTML = "";
  for (var i = 0; i < possibleStations.length; i++) {
    rawHTML += `<li> ${possibleStations[i]} </li>`;
  }
  stationList.insertAdjacentHTML("beforeend", rawHTML);
  changeFocus();
  currentList = 2;
  cursorPosition = 0;
  changeFocus();
}

function fillNumbers() {
  const date = new Date();
  let year = date.getFullYear();
  year = year.toString().slice(-2);
  let month = date.getMonth() + 1;
  month = month.toString().padStart(2, "0");
  let day = date.getDate();
  day = day.toString().padStart(2, "0");
  let hours = date.getHours();
  hours = hours.toString().padStart(2, "0");
  let minutes = date.getMinutes();
  minutes = minutes.toString().padStart(2, "0");
  const timeSection = document.getElementById("tijd").children[0];
  const dateSection = document.getElementById("datum").children[0];

  timeSection.children[0].textContent = hours;
  timeSection.children[1].textContent = minutes;
  dateSection.children[0].textContent = day;
  dateSection.children[1].textContent = month;
  dateSection.children[2].textContent = year;

  const menu = document.getElementById("mainmenu");
  menu.children[0].children[2].children[1].textContent =
    day + "/" + month + "/" + year;
  menu.children[0].children[3].children[1].textContent = hours + ":" + minutes;

  timeStartValues.push(hours);
  timeStartValues.push(minutes);
  dateStartValues.push(day);
  dateStartValues.push(month);
  dateStartValues.push(year);
}

function mainMenu(keyCode) {
  switch (keyCode) {
    case 72:
    case 37:
      console.log("H key is pressed, but does nothing");
      break;
    case 74:
    case 40:
      console.log("J key is pressed, going down");
      if (cursorPosition < 4) {
        changeFocus();
        cursorPosition++;
        changeFocus();
      } else {
        changeFocus();
        cursorPosition = 0;
        changeFocus();
      }
      break;
    case 75:
    case 38:
      console.log("K key is pressed, going up");
      if (cursorPosition > 0) {
        changeFocus();
        cursorPosition--;
        changeFocus();
      } else {
        changeFocus();
        cursorPosition = 4;
        changeFocus();
      }
      break;
    case 76:
    case 39:
      console.log("L key is pressed, but does nothing");
      break;
    case 13:
      console.log("Enter key is pressed, item selected");
      changeFocus();
      openSection();
      break;
  }
}

function stations(keyCode) {
  const area = document.getElementById(currentArea);
  const maxValue = area.children[currentList].children.length - 1;
  switch (keyCode) {
    case 72:
    case 37:
      console.log("H key is pressed, going left");
      if (currentList > 0) {
        changeFocus();
        if (currentList == 2) {
          cursorPosition = 0;
        }
        currentList--;
        changeFocus();
      }
      break;
    case 74:
    case 40:
      console.log("J key is pressed, going down");
      if (cursorPosition < maxValue) {
        changeFocus();
        cursorPosition++;
        changeFocus();
      } else {
        if (currentList == 2) {
          changeFocus();
          cursorPosition = 0;
          changeFocus();
        }
        if (currentList == 0) {
          changeFocus();
          cursorPosition = 0;
          currentList++;
          changeFocus();
        } else {
          if (currentList == 1) {
            changeFocus();
            cursorPosition = 0;
            currentList--;
            changeFocus();
          }
        }
      }
      break;
    case 75:
    case 38:
      console.log("K key is pressed, going up");
      if (cursorPosition > 0) {
        changeFocus();
        cursorPosition--;
        changeFocus();
      } else {
        if (currentList == 2) {
          changeFocus();
          cursorPosition = maxValue;
          changeFocus();
        }
        if (currentList == 1) {
          changeFocus();
          cursorPosition = maxValue;
          currentList--;
          changeFocus();
        } else {
          if (currentList == 0) {
            changeFocus();
            cursorPosition = maxValue;
            currentList++;
            changeFocus();
          }
        }
      }
      break;
    case 76:
    case 39:
      console.log("L key is pressed, going right");
      if (currentList < 2) {
        changeFocus();
        if (currentList == 1) {
          cursorPosition = 0;
        }
        currentList++;
        changeFocus();
      }
      break;
    case 13:
      console.log("Enter key is pressed, item selected");
      stationStuff();
      break;
  }
}

function dateNumbers(keyCode) {
  const area = document.getElementById(currentArea).children[0];

  switch (keyCode) {
    case 72:
    case 37:
      console.log("H key is pressed, going left");
      if (cursorPosition > 0) {
        changeFocus();
        cursorPosition--;
        changeFocus();
      }
      break;
    case 74:
    case 40:
      console.log("J key is pressed, going down");
      if (area.children[cursorPosition].textContent > 1) {
        if (
          area.children[cursorPosition].textContent >
            dateStartValues[cursorPosition] ||
          area.children[cursorPosition + 1].textContent >
            dateStartValues[cursorPosition + 1]
        ) {
          let temp = "";
          temp = area.children[cursorPosition].textContent;
          temp--;
          temp = temp.toString().padStart(2, "0");
          area.children[cursorPosition].textContent = temp;
        }
      }
      if (
        area.children[1].textContent == dateStartValues[1] &&
        area.children[0].textContent < dateStartValues[0]
      ) {
        area.children[0].textContent = dateStartValues[0];
      }
      if (cursorPosition == 1) {
        /* Working todo and stuff */
        let d = new Date();
        let check = d.setFullYear(
          "20" + area.children[2].textContent,
          area.children[1].textContent,
          0
        );
        console.log(check);
      }
      break;
    case 75:
    case 38:
      console.log("K key is pressed, going up");
      if (cursorPosition == 0) {
        if (area.children[cursorPosition].textContent < 31) {
          let temp = "";
          temp = area.children[cursorPosition].textContent;
          temp++;
          temp = temp.toString().padStart(2, "0");
          area.children[cursorPosition].textContent = temp;
        }
      }
      if (cursorPosition == 1) {
        if (area.children[cursorPosition].textContent < 12) {
          let temp = "";
          temp = area.children[cursorPosition].textContent;
          temp++;
          temp = temp.toString().padStart(2, "0");
          area.children[cursorPosition].textContent = temp;
        }
      }
      if (cursorPosition == 2) {
        if (
          area.children[cursorPosition].textContent < dateStartValues[2] + 1 &&
          dateStartValues[1] == 12
        ) {
          let temp = "";
          temp = area.children[cursorPosition].textContent;
          temp++;
          temp = temp.toString().padStart(2, "0");
          area.children[cursorPosition].textContent = temp;
        }
      }
      break;
    case 76:
    case 39:
      console.log("L key is pressed, going right");
      if (cursorPosition < 2) {
        changeFocus();
        cursorPosition++;
        changeFocus();
      }
      break;
    case 13:
      console.log("Enter key is pressed, saving");
      const day = area.children[0].textContent;
      const month = area.children[1].textContent;
      const year = area.children[2].textContent;
      const menu = document.getElementById("mainmenu");
      menu.children[0].children[2].children[1].textContent =
        day + "/" + month + "/" + year;

      changeFocus();
      backtoMain();
      break;
  }
}

function timeNumbers(keyCode) {
  const area = document.getElementById(currentArea).children[0];
  switch (keyCode) {
    case 72:
    case 37:
      console.log("H key is pressed, going left");
      if (cursorPosition > 0) {
        changeFocus();
        cursorPosition--;
        changeFocus();
      }
      break;
    case 74:
    case 40:
      console.log("J key is pressed, going down");
      if (area.children[cursorPosition].textContent > 0) {
        let temp = "";
        temp = area.children[cursorPosition].textContent;
        temp--;
        temp = temp.toString().padStart(2, "0");
        area.children[cursorPosition].textContent = temp;
      } else {
        if (cursorPosition == 1) {
          area.children[cursorPosition].textContent = "59";
        }
        if (cursorPosition == 0) {
          area.children[cursorPosition].textContent = "23";
        }
      }
      break;
    case 75:
    case 38:
      console.log("K key is pressed, going up");
      if (cursorPosition == 1) {
        if (area.children[1].textContent == 59) {
          area.children[cursorPosition].textContent = "00";
          break;
        }
        if (area.children[1].textContent < 59) {
          let temp = "";
          temp = area.children[cursorPosition].textContent;
          temp++;
          temp = temp.toString().padStart(2, "0");
          area.children[cursorPosition].textContent = temp;
          break;
        }
      }
      if (cursorPosition == 0) {
        if (area.children[0].textContent < 23) {
          let temp = "";
          temp = area.children[cursorPosition].textContent;
          temp++;
          temp = temp.toString().padStart(2, "0");
          area.children[cursorPosition].textContent = temp;
          break;
        }
        if (area.children[0].textContent == 23) {
          area.children[0].textContent = "00";
          break;
        }
      }
    case 76:
    case 39:
      console.log("L key is pressed, going right");
      if (cursorPosition < 1) {
        changeFocus();
        cursorPosition++;
        changeFocus();
      }
      break;
    case 13:
      console.log("Enter key is pressed, time selected");
      const hour = area.children[0].textContent;
      const minutes = area.children[1].textContent;
      const menu = document.getElementById("mainmenu");
      menu.children[0].children[3].children[1].textContent =
        hour + ":" + minutes;
      changeFocus();
      backtoMain();
      break;
  }
}

function callNS() {
  values = document.getElementsByTagName("span");
  window.location.href = `https://www.ns.nl/reisplanner/#/?vertrek=${values[0].innerText}&vertrektype=treinstation&aankomst=${values[1].innerText}&aankomsttype=treinstation&type=vertrek&tijd=${values[6].innerText}-${values[5].innerText}-${values[4].innerText}T${values[7].innerText}:${values[8].innerText}`;
}
