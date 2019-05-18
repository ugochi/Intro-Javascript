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
  