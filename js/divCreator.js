// Div Creator functions to display forms and newly created cards to client
// CURRENT ISSUES: no image function yet, extra tasks and data series form elements remain after clearance,
// cards aren't sized correctly

// NEXT STEPS: add image options to those cards

// give each new div a unique id so that they can be scrolled to correctly
var divCounter = 0;
// give each task in the task card a unique id
var taskCounter = 1;

// has a list of the corresponding card type to give to client (organized by index)
// based on their selection, unhides and hides different card creator forms
function displayCardCreator() {
  var cardForms = ["Simple", "Contact", "Blog", "Image", "Task", "Chart"];
  // hide form
  $('#input-select').hide();
  // add new card button and top of page button to bottom of page after first card
  if (divCounter==0) {
    var newCardAndTopOfPageButtons = '<button onClick="showNewCardButton()">New Card</button><button onClick="toTop()">Top of Page</button>';
    $("#cardHolder").after(newCardAndTopOfPageButtons);
  }
  // show selected card creation form (by index in list) to page
  $("#"+cardForms[$('#select_card').val()]).show();
};

// this function will accept a parameter, the type of card, which will be
// passed to the DivCreator function which then know which objects to grab with jquery.
// and will display the correct html to the page
function divCreator(type) {
  // adjust divCount so each card has a unique id
  divCounter += 1;
  var id = "div" + divCounter;
  // this section determines which type of form is being created and grabs the
  // appropriate form elements
  if (type=="Simple") {
    var heading = $("#heading_simple").val();
    var desc = $("#desc_simple").val();
    // html for card
    var newDiv = "<div class='card light-blue'"+ "id="+id+ ">  \
      <div class='card-content white-text'> \
        <span class='card-title'>"+heading+"</span> \
        <p>"+desc+"</p> \
    </div>";
    // **** clear form here
  } else if (type =="Contact") {
      var heading = $('#heading_contact').val();
      var occupation = $('#occupation_contact').val();
      var phone = $('#phone_contact').val();
      var email = $('#email_contact').val();
      var desc = $('#desc_contact').val();
      var newDiv = '<div class="col s12 m6 l4" id="'+id+'">\
          <div id="profile-card" class="card">\
              <div class="card-image waves-effect waves-block waves-light">\
                  <img class="activator" src="materialize-v3.0/demo/images/user-bg.jpg" alt="user background">\
              </div>\
              <div class="card-content">\
                  <img src="materialize-v3.0/demo/images/avatar.jpg" alt="" class="circle responsive-img activator card-profile-image">\
                  <a class="btn-floating activator btn-move-up waves-effect waves-light darken-2 right">\
                      <i class="mdi-action-account-circle"></i>\
                  </a>\
      \
                  <span class="card-title activator grey-text text-darken-4">'+heading+'</span>\
                  <p><i class="mdi-action-perm-identity cyan-text text-darken-2"></i>'+occupation+'</p>\
                  <p><i class="mdi-action-perm-phone-msg cyan-text text-darken-2"></i>'+phone+'</p>\
                  <p><i class="mdi-communication-email cyan-text text-darken-2"></i>'+email+'</p>\
      \
              </div>\
              <div class="card-reveal">\
                  <span class="card-title grey-text text-darken-4">'+heading+'<i class="mdi-navigation-close right"></i></span>\
                  <p>'+desc+'</p>\
                  <p><i class="mdi-action-perm-identity cyan-text text-darken-2"></i>'+occupation+'</p>\
                  <p><i class="mdi-action-perm-phone-msg cyan-text text-darken-2"></i>'+phone+'</p>\
                  <p><i class="mdi-communication-email cyan-text text-darken-2"></i>'+email+'</p>\
              </div>\
          </div>\
      </div>';
      // **** clear form here
    } else if (type=="Blog") {
      var heading = $('#heading_blog').val();
      var link = $('#link_blog').val();
      var short_desc = $('#desc_short_blog').val();
      var desc = $('#desc_blog').val();
      var newDiv = '<div class="col s12 m4 l4" id="'+id+'">\
        <div class="card">\
            <div class="card-image waves-effect waves-block waves-light">\
              <img class="activator" src="materialize-v3.0/demo/images/office.jpg" alt="office">\
            </div>\
            <div class="card-content">\
              <span class="card-title activator grey-text text-darken-4">'+heading+'<i class="mdi-navigation-more-vert right"></i></span>\
              <p><a href="#">'+link+'</a>\
              </p>\
            </div>\
            <div class="card-reveal">\
              <span class="card-title grey-text text-darken-4">'+heading+'<i class="mdi-navigation-close right"></i></span>\
              <p>'+desc+'</p>\
            </div>\
          </div>\
      </div>';
      // **** clear form here
    } else if (type=="Image") {
      var heading = $('#heading_image').val();
      var link = $('#link_image').val();
      var desc = $('#desc_image').val();
      var newDiv = '<div class="col s12 m4 l4" id="'+id+'">\
        <div class="card">\
            <div class="card-image">\
              <img src="materialize-v3.0/demo/images/sample-1.jpg" alt="sample image">\
              <span class="card-title">'+heading+'</span>\
            </div>\
            <div class="card-content">\
               <p>'+desc+'</p>\
            </div>\
            <div class="card-action">\
              <a href="#">'+link+'</a>\
            </div>\
          </div>\
      </div>'
      // **** clear form here
    }
  // add card to page
  $("#cardHolder").append(newDiv);
  // add delete button to card
  $("#" + id).append("<input type='button' value='Delete Card' onClick=removeElement("+"'"+id+"'"+")>")
  // scroll to card
  $('html, body').animate({
        scrollTop: $("#" + id).offset().top
    }, 1000);
  // hide form
  $(".DivForm").hide();
  $("input[type='text']").val("");
};

// adds a new task input to the TaskCreator form, using the taskCounter var, and
// appends it to the form
function newTask() {
  taskCounter+=1;
  var newTaskHtml = "Task "+taskCounter+":<br>\
  <input id = 'task_task"+taskCounter+"' type = 'text'><br>\
  Complete by:<br>\
  <input id = 'date_task"+taskCounter+"' type = 'text'><br>\
  Add a tag or category:<br>\
  <input id = 'tag_task"+taskCounter+"' type = 'text'><br>";
  $('#TaskHolder').append(newTaskHtml);
};

// this function accepts the number of tasks and parse thru them to build a task
// list card
function taskCreator() {
  divCounter+=1;
  // get initial form data
  var id = 'div' + divCounter;
  var heading = $('#heading_task').val();
  var date = $('#date_task').val();
  // build first part of div
  var newDiv = '<div class="col s12 m4 l4" id="'+id+'">\
    <ul id="task-card" class="collection with-header">\
      <li class="collection-header cyan">\
        <h4 class="task-card-title">'+heading+'</h4>\
        <p class="task-card-date">'+date+'</p>\
      </li>';
  // add each task to div's html
  for (var i = 1; i <= taskCounter; i++) {
    var task = $('#task_task'+i).val();
    var date = $('#date_task'+i).val();
    var tag = $('#tag_task'+i).val();
    newDiv += '<li class="collection-item dismissable">\
      <input type="checkbox" id="task'+i+'" />\
      <label for="task'+i+'">'+task+'<a href="#" class="secondary-content"><span class="ultra-small">'+date+'</span></a>\
      </label>\
      <span class="task-cat teal">'+tag+'</span>\
    </li>';
    // **** clear form here; also must remove or something extra form elements because
    // right now this would only work correctly for one form
  }
  // **** clear form here
  // finish html for div
  newDiv += '</ul></div>';
  // add to page, same as in DivCreator
  $("#cardHolder").append(newDiv);
  // delete button
  $("#" + id).append("<input type='button' value='Delete Card' onClick=removeElement("+"'"+id+"'"+")>")
  // scroll to card
  $('html, body').animate({
        scrollTop: $("#" + id).offset().top
    }, 1000);
  // hide form
  $(".DivForm").hide();
  // reset task counter
  taskCounter = 1;
  $("input[type='text']").val("");
};


// needed to show a button
function showNewCardButton() {
  $('#input-select').show();
  toTop();
};

// for top of page button
function toTop() {
  $("html, body").animate({ scrollTop: 0 }, 1000);
};



// CHART CREATOR FUNCTIONS



// displays correct chart creator form to chart form
function showChartForm() {
  chartTypes = ["Line", "Bar", "Pie"];
  var chartType = $("#select_chart").val();
  console.log(chartTypes[chartType]);
  $("#chartForm").submit(function() {chartCreator(chartTypes[chartType])});
  $("#chartForm").show();
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
    divCounter++;
    var id = "div" + divCounter;
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
    $('#cardHolder').append('<div><h4>'+title+'</h4><div id="'+id+'" class="ct-chart"></div></div>');
    var chartData = {
      labels: yAxData,
      series: xAxData
    };
    // at some point, the user will be able to configure this sizing
    var options = {
      width: 600,
      height: 400
    };
    // line or bar chart
    if (type=="Line") {
      new Chartist.Line('#'+id, chartData, options);
    } else {
      new Chartist.Bar('#'+id, chartData, options);
    }
    // delete button
    $("#" + id).append("<input type='button' value='Delete Card' onClick=removeElement("+"'"+id+"'"+")>")
  // hide form
  $('#Chart').hide();
  $("input[type='text']").val("");
};
