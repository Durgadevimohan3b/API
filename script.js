var res = fetch("https://restcountries.com/v3.1/all");
res.then((data) => data.json()).then((value) => bar(value))
var container = document.createElement("div");
container.className = "container"
var row = document.createElement("div");
row.className = "row"
container.append(row);
function bar(value){
    console.log(value);
    for (var i=0; i <=10; i++){
        row.innerHTML+=`
        <div class = "col-md-4">
        <div class="card text-white bg-dark mb-3"style="width: 18rem">
  <img src="${value[i].flags.png}" class="card-img-top" alt="5">
  <div class="card-body">
    <h5 class="card-title">Country: ${value[i].name.common}</h5>
    <p class="card-text">Capital: ${value[i].capital}</p>
      <p class="card-text">Region: ${value[i].region}</p>
      <p class="card-text">LatLong: ${value[i].latlng}</p>
  </div>
</div>
</div>
  `
    }
    document.body.append(container)
}