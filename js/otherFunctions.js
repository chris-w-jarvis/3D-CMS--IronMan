// this file will house delete and update functions as well as data storage functions

// delete functions
function removeElement(ele_name) {
  $("#"+ele_name).remove();
}

// save graph data to local storage

// how to use this data; every 5th element starting at 0 is the title of the chart
// that has the ensuing data; to display graphs iterate with for i++ {getItem(div+i+TITLE)}, open chart by
// typing out each localStorage(div1title), div1xAxisData, etc.
function saveChart(data) {
  id = localStorage.getItem("chartCounter");
  localStorage.setItem("div"+id+"TITLE",data[0]);
  localStorage.setItem("div"+id+"XTITLE",data[1])
  localStorage.setItem("div"+id+"YTITLE",data[2])
  localStorage.setItem("div"+id+"LABELS",data[3])
  for (i = 4; i < data.length; i++) {
    localStorage.setItem("div"+id+"XSERIES"+i,data[i]);
  }
  localStorage.setItem("chartCounter", parseInt(localStorage.getItem("chartCounter"))+1);
  console.log(localStorage);
  console.log("******************");
  displaySavedCharts();
}

function openSavedChart(id, data) {
  // this is a copy of chart Creator that calls data from local storage
}

function displaySavedCharts() {
  for (i = 0;  i < parseInt(localStorage.getItem("chartCounter")); i++) {
    console.log(localStorage.getItem("div"+i+"TITLE"));
  }
}
