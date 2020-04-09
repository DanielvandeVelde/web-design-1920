document.getElementsByTagName("a")[0].addEventListener("click", function(e) {
  const section = document.getElementsByTagName("section")[0];
  section.classList.add("hidden");
});

document.getElementsByTagName("a")[5].addEventListener("click", function(e) {
  const section = document.getElementsByTagName("section")[0];
  section.classList.remove("hidden");
});

document
  .getElementsByTagName("form")[0]
  .addEventListener("change", function(e) {
    const spanArray = document.getElementsByTagName("span");
    const inputArray = document.getElementsByTagName("input");
    for (var i = 0; i < spanArray.length; i++) {
      if (inputArray[i].value) {
        spanArray[i].textContent = inputArray[i].value;
      }
    }
  });
