var flightData = {};
fetch("../../data/flights.json")
  .then(function (response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }
    response.json().then(function (data) {
      flightData = data.flights;
    });
  })
  .catch(function (err) {
    console.log("Fetch Error :-S", err);
  });

setInterval(function () {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName("body")[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight;

  var iframeHeight = (x * 3.5) / 100;
  var iframe = document.getElementsByTagName("iframe")[0];
  iframe.style.height = iframeHeight + "px";
}, 100);

selectFlight = (i) => {
  window.localStorage.setItem(
    "flightSelected",
    JSON.stringify(this.flightData[i])
  );
  window.location.href =
    "https://amulyadubey.github.io/Enigma/screens/FlightDetails/FlightDetails.html?type=search";
};

window.onload = function () {
  var objStored = JSON.parse(window.localStorage.getItem("searchFor"));
  var fromCity = objStored.From;
  var toCity = objStored.To;

  var list = [];

  this.flightData.map((flightObj, i) => {
    flightObj.id = i;
    if (
      flightObj.arrivalCity === fromCity &&
      flightObj.departureCity === toCity
    )
      list.push(flightObj);
  });

  //Create a HTML Table element.
  var table = document.getElementById("search_results_table");
  var r = 1;

  list.map((flightObj) => {
    var row = table.insertRow(r);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    r = r + 1;

    row.setAttribute("id", flightObj.id);

    // Add some text to the new cells:
    cell1.innerHTML = flightObj.time;
    cell2.innerHTML = flightObj.departureCity;
    cell3.innerHTML = flightObj.arrivalCity;
    cell4.innerHTML = flightObj.flightNumber;
    cell5.innerHTML = flightObj.price;

    row.addEventListener("click", function () {
      console.log(row, flightObj);
      selectFlight(row.id);
    });
  });
};
