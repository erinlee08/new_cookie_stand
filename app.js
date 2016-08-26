
var form = document.getElementById('form1');
var table = document.getElementById('table1');
var data = [];
// function to creat new consturctor with 3 param
function ShopData(location, time, sold) {
  this.location = location;
  this.time = time;
  this.sold = sold;
};
 // function for the event. preventDefault validates input.when event happens,
 // values of location,time,sold will be targeted. data set generated from those
 // param will be pushed into the data array.
function sales(event) {
  event.preventDefault();
  var location1 = event.target.location.value;
  var time1 = event.target.time.value;
  var sold1 = event.target.sold.value;
  data.push(new ShopData(location1, time1, sold1)); //values in()are the var variables
  calc();
  form.reset();
};
 // set up a for loop function to pass obj with the 3 param. created in memory
 // by the tr tag to start a row. value of each param will be printed to html in
 // the td tag.
function calc() {
  for ( var i = 0 ; i < data.length; i++) {
    var row1 = document.createElement('tr');
    row1.innerHTML = '<td>' + data[i].location + '</td>' +
                      '<td>' + data[i].time + '</td>' +
                      '<td>' + data[i].sold + '</td>';
  }
  table.appendChild(row1);
};

 // after content is created in memory, find the parent tag of tr and append to
 // dom.

 // run the event.once the submit button is hit (the event), the sales function
 // will run to create form in dom.
form.addEventListener('submit', sales);
