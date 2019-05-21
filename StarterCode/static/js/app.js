// from data.js
var tableData = data;
// console.log(tableData);

// YOUR CODE HERE!

// Loop through array of objects then each object
var tbody = d3.select("tbody");

function showData(data){ 
  tbody.text("")
  data.forEach((datum) => {
      var row = tbody.append("tr");
      Object.entries(datum).forEach(([_, value]) => {
        var cell = row.append("td").text(value);
      });
    })};

showData(tableData)

  // Use a date form in your HTML document and write JavaScript code that will listen for events 
  // and search through the date/time column to find rows that match user input.
  
  var btn= d3.select("#filter-btn");
  var input = d3.select("#datetime")
  
    
  // filter data with desired date
    function filterData(){
        d3.event.preventDefault();
        var inputValue= input.property("value")
        console.log(inputValue);
        var filteredData = tableData.filter(datum => datum.datetime===inputValue)
        showData(filteredData)
    }

    btn.on("click", filterData)
    input.on("change", filterData)

