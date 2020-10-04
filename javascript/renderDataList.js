var airports=[]
fetch('../../data/airports.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(data) {
        airports= data.airports
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });


  window.onload= function(){
    console.log(airports)
    var datalist= document.getElementById("airports")
    this.airports.map(item=>{
      var option=document.createElement("option")
      option.innerHTML=item
      option.setAttribute('value', item)
      datalist.appendChild(option)
    })
  }

