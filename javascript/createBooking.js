const createBooking = () => {
  var from = document.getElementById("From_city").value;
  var to = document.getElementById("To_city").value;
  var searchFor = { From: from, To: to };

  window.localStorage.setItem("searchFor", JSON.stringify(searchFor));

  window.location.href =
    "https://amulyadubey.github.io/Enigma/components/LoadingPage/LoadingPage.html?to=search";
};
