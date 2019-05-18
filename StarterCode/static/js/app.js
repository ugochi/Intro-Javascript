// from data.js
var tableData = data;
//console.log(tableData);

// YOUR CODE HERE!

// Loop through array of objects then each object
var tbody = d3.select("tbody");

tableData.forEach((datum) => {
    var row = tbody.append("tr");
    Object.entries(datum).forEach(([_, value]) => {
      var cell = row.append("td").text(value);
    });
  });
  
  // Use a date form in your HTML document and write JavaScript code that will listen for events 
  // and search through the date/time column to find rows that match user input.
  
  var input = d3.select("#datetime");

  input.on("input", function() {
    var inputValue = d3.event.target.value;
    console.log(inputValue);
  

  // var inputValue = input.property("value");

  var filteredData = tableData.filter(tableData => tableData.datetime=== inputValue)
  console.log(filteredData)
});