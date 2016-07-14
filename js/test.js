// displays correct chart creator form to chart form
function showChartForm() {
  chartTypes = ["Line", "Bar", "Pie"];
  var chartType = $("#select_chart").val();
  $("#"+chartTypes[chartType]).show();
  $("#input-select2").hide();
};
// counter for x series
var xSeriesCount = 1;
// adds a new input element for each chart series dataset
function newXSeries() {
  xSeriesCount +=1
  if (type="Line") {
    $('#line_x-ax_data_div').append('<input name = "line_x-ax-data'+xSeriesCount+'" class="line_x-ax-data" type="text"><br>');
  } else {
    $('#bar_x-ax_data_div').append('<input name = "bar_x-ax-data'+xSeriesCount+'" class="bar_x-ax-data" type="text"><br>');
  }
};
// Chart Creator function, grabs data and uses chartist to add a chart to the page
function chartCreator(type) {
  if (type) {
    // get data
    var data = $('#Line').serializeArray();
  }
  if (type=="Bar") {
    var data = $('#Bar').serializeArray();
  } else {
    var data = $('#Pie').serializeArray();
  }
  // parse data to variables
  var title = data[0]['value'];
  var xTitle = data[1]['value'];
  var yTitle = data[2]['value'];
  // grab data series and parse to floats
  console.log(data);
  // x data series
  var xAxData = [];
  for (var i = 0; i < xSeriesCount; i++) {
    raw = data[4 + i]['value'].split(",");
    for (var j = 0; j < raw.length; j++) {
      raw[j] = parseFloat(raw[j]);
    }
    xAxData.push(raw);
  }
  // create chart with chartist
  $('#cardHolder').append('<div><h4>'+title+'</h4><div class="ct-chart"></div></div>');
  var chartData = {
    labels: yAxData,
    series: xAxData
  };
  // at some point, the user will be able to configure this sizing
  var options = {
    width: 600,
    height: 400
  };
  if (type=="Line") {
    new Chartist.Line('.ct-chart', chartData, options);
  } if (type=="Bar") {
    new Chartist.Bar('.ct-chart', chartData, options);
  } else {
    new Chartist.Pie('.ct-chart', chartData, options);
  }
  // hide form
  $('#Chart').hide();
};
