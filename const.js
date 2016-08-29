// js FOR consturctor OBJ

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Store(name, min_cust, max_cust, avg_cookie) {
  this.name = name;
  this.min_cust = min_cust;
  this.max_cust = max_cust;
  this.avg_cookie = avg_cookie;
}
Store.prototype.getCustomer = function() {
  this.custPerHour = getRandomIntInclusive (this.min_cust, this.max_cust);
  return Math.ceil(this.custPerHour);
};
Store.prototype.getCustomer();

Store.prototype.getCookie = function() {
  this.avg_cookie = getRandomIntInclusive (this.min_cust, this.max_cust);
  return Math.ceil(this.avg_cookie);
  // console.log(this.avg_cookie * this.custPerHour);
};

var hours = ['6am','7am','8am','9am','10am', '11am', '12pm', '1pm' , '2pm', '3pm', '4pm','5pm', '6pm'];
var table = document.getElementById('table');
var tableData = [];

Store.prototype.data = function() {
  for (var i = 0; i < hours.length; i++) {
    var table = document.getElementById('table');
    var list = document.createElement('tr');
    list.innerHTML = '<td>' + this.name + '</td>' + '<td>' + ' : ' + '</td>' +
   '<td> ' + Store.prototype.getCookie() + '</td>';
    table.appendChild(list);
  }
};
Store.prototype.date();

// ****************************************************************************** constrtuctor

var shop1 = new Store('first and Pike', 23, 65, 6.3);
for (var i = 0; i < hours.length; i++) {
  tableData.push('<td>' + hours[i].length + '</td>');
  console.log(tableData);
}
// table.appendChild()

//  var shop1 = new Store('first and Pike', 23, 65, 6.3);
//  var shop2 = new Store('SeaTac Airport', 3, 24, 1.2);
// var shop3 = new Store('Seattle Center',	11,	38,	3.7);
// var shop4 = new Store('Capitol Hill', 20,	38,	2.3);
// var shop5 = new Store('Alki', 2, 16, 4.6);
//
// var shop2 = new Store('SeaTac Airport', 3, 24, 1.2);
//
//  var form = document.getElementById('form1');
//  var table = document.getElementById('table1');
//  var data = [];
// // function to creat new consturctor with 3 param
//  function ShopData(location, time, sold) {
//    this.location = location;
//    this.time = time;
//    this.sold = sold;
//  };
// // function for the event. preventDefault validates input.when event happens,
// // values of location,time,sold will be targeted. data set generated from those
// // param will be pushed into the data array.
//  function sales(event) {
//    event.preventDefault();
//    var location1 = event.target.location.value;
//    var time1 = event.target.time.value;
//    var sold1 = event.target.sold.value;
//    data.push(new ShopData(location1, time1, sold1));
//    calc();
//    form.reset();
//  };
//  console.log();
//  // set up a for loop function to pass obj with the 3 param. created in memory
//  // by the tr tag to start a row. value of each param will be printed to html in
//  // the td tag.
//  function calc() {
//    for ( var i = 0 ; i < data.length; i++) {
//      var line = document.createElementById('tr');
//      line.innerHTML = '<td>' + data[i].location + '</td>' + '<td>' +
//      data[i].time + '</td>' + '<td>' + data[i].sold + '</td>';
//    }
//  };
//  // after content is created in memory, find the parent tag of tr and append to
//  // dom.
//  table.appendChild(line);
//  // run the event.once the submit button is hit (the event), the sales function
//  // will run to create form in dom.
//  form.addEventListener('submit',sales);
