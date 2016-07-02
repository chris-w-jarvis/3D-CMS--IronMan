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
  $('#line_x-ax_data_div').append('<input name = "line_x-ax-data'+xSeriesCount+'" class="line_x-ax-data" type="text"><br>');
};
// Chart Creator function, grabs data and uses chartist to add a chart to the page
function chartCreator(type) {
  if (type) {
    // get data
    var data = $('#Line').serializeArray();
    // parse data to variables
    var title = data[0]['value'];
    var xTitle = data[1]['value'];
    var yTitle = data[2]['value'];
    // grab data series and parse to floats
    var yAxData = data[3]['value'].split(",");
    for (var i = 0; i < yAxData.length; i++) {
      yAxData[i] = parseFloat(yAxData[i]);
    }
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
    $('#cardHolder').append('<div class="ct-chart ct-perfect-fourth"></div>');
    var chartData = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      series: xAxData
    };
    new Chartist.Line('.ct-chart', data);

  }
  // hide form
  $('#Chart').hide();
};
