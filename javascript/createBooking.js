const createBooking=()=>{
  var from=document.getElementById("From_city").value
  var to=document.getElementById("To_city").value
  var searchFor = { 'From': from, 'To': to};

  window.localStorage.setItem("searchFor", JSON.stringify(searchFor))

  window.location.href="http://127.0.0.1:5501/components/LoadingPage/LoadingPage.html?to=search"

}