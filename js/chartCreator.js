// displays correct chart creator form to chart form
function showChartForm() {
  chartTypes = ["Line", "Bar", "Pie"];
  var chartType = $("#select_chart").val();
  console.log(chartTypes[chartType]);
  $("#chartForm").submit(function() {chartCreator(chartTypes[chartType])});
  $("#chartForm").show();
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
  console.log(type);
    // get data
    var data = $('#chartForm').serializeArray();
    // parse data to variables
    var title = data[0]['value'];
    var xTitle = data[1]['value'];
    var yTitle = data[2]['value'];
    // grab data series and parse to floats
    var yAxData = data[3]['value'].split(",");
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
    } else {
      new Chartist.Bar('.ct-chart', chartData, options);
    }

  // hide form
  $('#Chart').hide();
};
