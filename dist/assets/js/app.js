"use strict";

//Variable Declarations
var inputSpreadSheetPath = "https://docs.google.com/spreadsheets/d/1Gd1X2gjO9KTo6x-upCfUhVkaeR8mf0xk20Uuou7-dPY/gviz/tq?range=";

//Startup Festival Chart
var startupFestChartRange = "A17:B22";
var startupFestChartHeader = "Supporting a startup festival";

//Startup Sydney Ecosystem Chart
var sydneyEcoSysChartRange = "A25:B30";
var sydneyEcoSysChartHeader = "Holding an introduction to the Sydney ecosystems business seminar";

//Marketing Awareness Campaign Chart
var marketCampChartRange = "A33:B38";
var marketCampChartHeader = "Establishing a marketing awareness campaign";

//Women Access Chart
var womenAccessChartRange = "A44:B50";
var womenAccessChartHeader = "Supporting initiatives for women to access co-working spaces and mentoring";

//Education Courses Chart
var educationCourseChartRange = "A53:B59";
var educationCourseChartHeader = "Facilitating startup education courses e.g. Lean Launchpad";

//City Libraries Chart
var cityLibrariesChartRange = "A62:B68";
var cityLibrariesChartHeader = "Including 'how to code' classes in City libraries or youth programs";

//Rental Office Space Chart
var rentalOfficeChartRange = "A74:B78";
var rentalOfficeChartHeader = "Tech startups need more affordable rental office space";

//Rental Office & Event Space Chart
var eventSpaceChartRange = "A81:B85";
var eventSpaceChartHeader = "Co-working spaces need more affordable rental office and event space";

//Close Proximity Chart
var closeProximityChartRange = "A88:B92";
var closeProximityChartHeader = "Tech startups need to be located in close proximity to each other";

//Network Investor Chart
var networkInvestChartRange = "A95:B99";
var networkInvestChartHeader = "Tech startups need to be located in close proximity to networks of investors, accelerators/incubators or potential customers";

//Sister City Relationship Chart
var sisterCityChartRange = "A105:B109";
var sisterCityChartHeader = "Leveraging our sister-city relationship with San Francisco and Guangzhou";

//Procurement Policies & Procedures Chart
var procPoliciesChartRange = "A112:B116";
var procPoliciesChartHeader = "Change procurement policies and procedures to enable startups to become suppliers";

//city problems Chart
var cityProblemChartRange = "A119:B123";
var cityProblemChartHeader = "Open up our data and encourage testing ideas that solve City problems and create viable products";

//Investor recruitment Chart
var invRecruitChartRange = "A129:B134";
var invRecruitChartHeader = "Investor recruitment and education events";

//Startup Investors Chart
var startInvestorChartRange = "A137:B142";
var startInvestorChartHeader = "Events to connect tech startups with investors";

//Suggested Location Chart
var locationChartRange = "A184:B187";
var locationChartHeader = "Top 4 suggested locations %";

//Chart Drawing Functions

function drawStartupFestChart() {

  var query = new google.visualization.Query(inputSpreadSheetPath + startupFestChartRange);

  // Send the query with a callback function.
  query.send(handleQueryFestChartResponse);
}

function drawSydneyEcoSysChart() {

  var query = new google.visualization.Query(inputSpreadSheetPath + sydneyEcoSysChartRange);

  // Send the query with a callback function.
  query.send(handleQuerySydneyEcoSysChartResponse);
}

function drawMarketCampChart() {

  var query = new google.visualization.Query(inputSpreadSheetPath + marketCampChartRange);

  // Send the query with a callback function.
  query.send(handleQueryMarketCampChartResponse);
}

function drawWomenAccessChart() {

  var query = new google.visualization.Query(inputSpreadSheetPath + womenAccessChartRange);

  // Send the query with a callback function.
  query.send(handleQueryWomenAccessChartResponse);
}

function drawEducationCourseChart() {

  var query = new google.visualization.Query(inputSpreadSheetPath + educationCourseChartRange);

  // Send the query with a callback function.
  query.send(handleQueryEducationCourseChartResponse);
}

function drawCityLibrariesChart() {

  var query = new google.visualization.Query(inputSpreadSheetPath + cityLibrariesChartRange);

  // Send the query with a callback function.
  query.send(handleQueryCityLibrariesChartResponse);
}

function drawRentalOfficeChart() {

  var query = new google.visualization.Query(inputSpreadSheetPath + rentalOfficeChartRange);

  // Send the query with a callback function.
  query.send(handleQueryRentalOfficeChartResponse);
}

function drawEventSpaceChart() {

  var query = new google.visualization.Query(inputSpreadSheetPath + eventSpaceChartRange);

  // Send the query with a callback function.
  query.send(handleQueryEventSpaceChartResponse);
}

function drawCloseProximityChart() {

  var query = new google.visualization.Query(inputSpreadSheetPath + closeProximityChartRange);

  // Send the query with a callback function.
  query.send(handleQueryCloseProximityChartResponse);
}

function drawNetworkInvestChart() {

  var query = new google.visualization.Query(inputSpreadSheetPath + networkInvestChartRange);

  // Send the query with a callback function.
  query.send(handleQueryNetworkInvestChartResponse);
}

function drawSisterCityChart() {

  var query = new google.visualization.Query(inputSpreadSheetPath + sisterCityChartRange);

  // Send the query with a callback function.
  query.send(handleQuerySisterCityChartResponse);
}

function drawProcPoliciesChart() {

  var query = new google.visualization.Query(inputSpreadSheetPath + procPoliciesChartRange);

  // Send the query with a callback function.
  query.send(handleQueryProcPoliciesChartResponse);
}

function drawCityProblemChart() {

  var query = new google.visualization.Query(inputSpreadSheetPath + cityProblemChartRange);

  // Send the query with a callback function.
  query.send(handleQueryCityProblemChartResponse);
}

function drawInvRecruitChart() {

  var query = new google.visualization.Query(inputSpreadSheetPath + invRecruitChartRange);

  // Send the query with a callback function.
  query.send(handleQueryInvRecruitChartResponse);
}

function drawStartInvestorChart() {

  var query = new google.visualization.Query(inputSpreadSheetPath + startInvestorChartRange);

  // Send the query with a callback function.
  query.send(handleQueryStartInvestorChartResponse);
}

function drawLocationChart() {

  var query = new google.visualization.Query(inputSpreadSheetPath + locationChartRange);

  // Send the query with a callback function.
  query.send(handleQueryLocationChartResponse);
}

//Handler Callback Queries

function handleQueryFestChartResponse(response) {
  if (response.isError()) {
    console.log('Error in handleQueryFestChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('startupFestDiv')).draw(data, { chartArea: {
      width: '50%'
    }, title: startupFestChartHeader,
    legend: 'none',
    width: '100%', height: 400,
    vAxis: { title: "" },
    hAxis: { title: "" } });
}

function handleQuerySydneyEcoSysChartResponse(response) {
  if (response.isError()) {
    console.log('Error in handleQuerySydneyEcoSysChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('sydneyEcoSysDiv')).draw(data, { chartArea: {
      width: '50%'
    }, title: sydneyEcoSysChartHeader,
    legend: 'none',
    width: '100%', height: 400,
    vAxis: { title: "" },
    hAxis: { title: "" } });
}

function handleQueryMarketCampChartResponse(response) {
  if (response.isError()) {
    console.log('Error in handleQueryMarketCampChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('marketCampDiv')).draw(data, { chartArea: {
      width: '50%'
    }, title: marketCampChartHeader,
    width: '100%', height: 400,
    legend: 'none',
    vAxis: { title: "" },
    hAxis: { title: "" } });
}

function handleQueryWomenAccessChartResponse(response) {
  if (response.isError()) {
    console.log('Error in handleQueryWomenAccessChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('womenAccessDiv')).draw(data, { chartArea: {
      width: '50%'
    }, title: womenAccessChartHeader,
    width: '100%', height: 400,
    legend: 'none',
    vAxis: { title: "" },
    hAxis: { title: "" } });
}

function handleQueryEducationCourseChartResponse(response) {
  if (response.isError()) {
    console.log('Error in handleQueryEducationCourseChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('educationCourseDiv')).draw(data, { chartArea: {
      width: '50%'
    }, title: educationCourseChartHeader,
    width: '100%', height: 400,
    legend: 'none',
    vAxis: { title: "" },
    hAxis: { title: "" } });
}

function handleQueryCityLibrariesChartResponse(response) {
  if (response.isError()) {
    console.log('Error in handleQueryCityLibrariesChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('cityLibrariesDiv')).draw(data, { chartArea: {
      width: '50%'
    }, title: cityLibrariesChartHeader,
    width: '100%', height: 400,
    legend: 'none',
    vAxis: { title: "" },
    hAxis: { title: "" } });
}

function handleQueryRentalOfficeChartResponse(response) {
  if (response.isError()) {
    console.log('Error in handleQueryRentalOfficeChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('rentalOfficeDiv')).draw(data, { chartArea: {
      width: '50%'
    }, title: rentalOfficeChartHeader,
    legend: 'none',
    width: '100%', height: 400,
    vAxis: { title: "" },
    hAxis: { title: "" } });
}

function handleQueryEventSpaceChartResponse(response) {
  if (response.isError()) {
    console.log('Error in handleQueryEventSpaceChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('eventSpaceDiv')).draw(data, { chartArea: {
      width: '50%'
    }, title: eventSpaceChartHeader,
    legend: 'none',
    width: '100%', height: 400,
    vAxis: { title: "" },
    hAxis: { title: "" } });
}

function handleQueryCloseProximityChartResponse(response) {
  if (response.isError()) {
    console.log('Error in handleQueryCloseProximityChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('closeProximityDiv')).draw(data, { chartArea: {
      width: '50%'
    }, title: closeProximityChartHeader,
    width: '100%', height: 400,
    legend: 'none',
    vAxis: { title: "" },
    hAxis: { title: "" } });
}

function handleQueryNetworkInvestChartResponse(response) {
  if (response.isError()) {
    console.log('Error in handleQueryNetworkInvestChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('networkInvestDiv')).draw(data, { chartArea: {
      width: '50%'
    }, title: networkInvestChartHeader,
    width: '100%', height: 400,
    legend: 'none',
    vAxis: { title: "" },
    hAxis: { title: "" } });
}

function handleQuerySisterCityChartResponse(response) {
  if (response.isError()) {
    console.log('Error in handleQuerySisterCityChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('sisterCityDiv')).draw(data, { chartArea: {
      width: '50%'
    }, title: sisterCityChartHeader,
    width: '100%', height: 400,
    legend: 'none',
    vAxis: { title: "" },
    hAxis: { title: "" } });
}

function handleQueryProcPoliciesChartResponse(response) {
  if (response.isError()) {
    console.log('Error in handleQueryProcPoliciesChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('procPoliciesDiv')).draw(data, { chartArea: {
      width: '50%'
    }, title: procPoliciesChartHeader,
    width: '100%', height: 400,
    legend: 'none',
    vAxis: { title: "" },
    hAxis: { title: "" } });
}

function handleQueryCityProblemChartResponse(response) {
  if (response.isError()) {
    console.log('Error in handleQueryCityProblemChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('cityProblemDiv')).draw(data, { chartArea: {
      width: '50%'
    }, title: cityProblemChartHeader,
    width: '100%', height: 400,
    legend: 'none',
    vAxis: { title: "" },
    hAxis: { title: "" } });
}

function handleQueryInvRecruitChartResponse(response) {
  if (response.isError()) {
    console.log('Error in handleQueryInvRecruitChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('invRecruitDiv')).draw(data, { chartArea: {
      width: '50%'
    }, title: invRecruitChartHeader,
    width: '100%', height: 400,
    legend: 'none',
    vAxis: { title: "" },
    hAxis: { title: "" } });
}

function handleQueryStartInvestorChartResponse(response) {
  if (response.isError()) {
    console.log('Error in handleQueryStartInvestorChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('startInvestorDiv')).draw(data, { chartArea: {
      width: '50%'
    }, title: startInvestorChartHeader,
    width: '100%', height: 400,
    legend: 'none',
    vAxis: { title: "" },
    hAxis: { title: "" } });
}

function handleQueryLocationChartResponse(response) {
  if (response.isError()) {
    console.log('Error in handleQueryLocationChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  // Create and draw the visualization.
  var chart = new google.visualization.BarChart(document.getElementById('locationDiv'));

  chart.draw(data, { chartArea: {
      width: '50%'
    }, title: locationChartHeader,
    legend: 'none',
    width: '100%', height: 400,
    vAxis: { title: "" },
    hAxis: { title: "" } });
}

google.charts.load('current', { 'packages': ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawStartupFestChart);
google.charts.setOnLoadCallback(drawSydneyEcoSysChart);
google.charts.setOnLoadCallback(drawMarketCampChart);
google.charts.setOnLoadCallback(drawWomenAccessChart);
google.charts.setOnLoadCallback(drawEducationCourseChart);
google.charts.setOnLoadCallback(drawCityLibrariesChart);
google.charts.setOnLoadCallback(drawRentalOfficeChart);
google.charts.setOnLoadCallback(drawEventSpaceChart);
google.charts.setOnLoadCallback(drawCloseProximityChart);
google.charts.setOnLoadCallback(drawNetworkInvestChart);
google.charts.setOnLoadCallback(drawSisterCityChart);
google.charts.setOnLoadCallback(drawProcPoliciesChart);
google.charts.setOnLoadCallback(drawCityProblemChart);
google.charts.setOnLoadCallback(drawInvRecruitChart);
google.charts.setOnLoadCallback(drawStartInvestorChart);
google.charts.setOnLoadCallback(drawLocationChart);

window.onresize = function () {

  google.charts.setOnLoadCallback(drawStartupFestChart);
  google.charts.setOnLoadCallback(drawSydneyEcoSysChart);
  google.charts.setOnLoadCallback(drawMarketCampChart);
  google.charts.setOnLoadCallback(drawWomenAccessChart);
  google.charts.setOnLoadCallback(drawEducationCourseChart);
  google.charts.setOnLoadCallback(drawCityLibrariesChart);
  google.charts.setOnLoadCallback(drawRentalOfficeChart);
  google.charts.setOnLoadCallback(drawEventSpaceChart);
  google.charts.setOnLoadCallback(drawCloseProximityChart);
  google.charts.setOnLoadCallback(drawNetworkInvestChart);
  google.charts.setOnLoadCallback(drawSisterCityChart);
  google.charts.setOnLoadCallback(drawProcPoliciesChart);
  google.charts.setOnLoadCallback(drawCityProblemChart);
  google.charts.setOnLoadCallback(drawInvRecruitChart);
  google.charts.setOnLoadCallback(drawStartInvestorChart);
  google.charts.setOnLoadCallback(drawLocationChart);
};

window.onresize();
//# sourceMappingURL=data:application/json;base64,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QztBQUNBLFNBQU8sTUFBUCxDQUFjLGlCQUFkLENBQWdDLG1CQUFoQztBQUNBLFNBQU8sTUFBUCxDQUFjLGlCQUFkLENBQWdDLG9CQUFoQztBQUNBLFNBQU8sTUFBUCxDQUFjLGlCQUFkLENBQWdDLHdCQUFoQztBQUNBLFNBQU8sTUFBUCxDQUFjLGlCQUFkLENBQWdDLHNCQUFoQztBQUNBLFNBQU8sTUFBUCxDQUFjLGlCQUFkLENBQWdDLHFCQUFoQztBQUNBLFNBQU8sTUFBUCxDQUFjLGlCQUFkLENBQWdDLG1CQUFoQztBQUNBLFNBQU8sTUFBUCxDQUFjLGlCQUFkLENBQWdDLHVCQUFoQztBQUNBLFNBQU8sTUFBUCxDQUFjLGlCQUFkLENBQWdDLHNCQUFoQztBQUNBLFNBQU8sTUFBUCxDQUFjLGlCQUFkLENBQWdDLG1CQUFoQztBQUNBLFNBQU8sTUFBUCxDQUFjLGlCQUFkLENBQWdDLHFCQUFoQztBQUNBLFNBQU8sTUFBUCxDQUFjLGlCQUFkLENBQWdDLG9CQUFoQztBQUNBLFNBQU8sTUFBUCxDQUFjLGlCQUFkLENBQWdDLG1CQUFoQztBQUNBLFNBQU8sTUFBUCxDQUFjLGlCQUFkLENBQWdDLHNCQUFoQztBQUNBLFNBQU8sTUFBUCxDQUFjLGlCQUFkLENBQWdDLGlCQUFoQztBQUVILENBbkJEOztBQXFCQSxPQUFPLFFBQVAiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9WYXJpYWJsZSBEZWNsYXJhdGlvbnNcbnZhciBpbnB1dFNwcmVhZFNoZWV0UGF0aCA9IFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMUdkMVgyZ2pPOUtUbzZ4LXVwQ2ZVaFZrYWVSOG1mMHhrMjBVdW91Ny1kUFkvZ3Zpei90cT9yYW5nZT1cIjtcblxuICAvL1N0YXJ0dXAgRmVzdGl2YWwgQ2hhcnRcbnZhciBzdGFydHVwRmVzdENoYXJ0UmFuZ2UgPSBcIkExNzpCMjJcIjtcbnZhciBzdGFydHVwRmVzdENoYXJ0SGVhZGVyID0gXCJTdXBwb3J0aW5nIGEgc3RhcnR1cCBmZXN0aXZhbFwiO1xuXG4gIC8vU3RhcnR1cCBTeWRuZXkgRWNvc3lzdGVtIENoYXJ0XG52YXIgc3lkbmV5RWNvU3lzQ2hhcnRSYW5nZSA9IFwiQTI1OkIzMFwiO1xudmFyIHN5ZG5leUVjb1N5c0NoYXJ0SGVhZGVyID0gXCJIb2xkaW5nIGFuIGludHJvZHVjdGlvbiB0byB0aGUgU3lkbmV5IGVjb3N5c3RlbXMgYnVzaW5lc3Mgc2VtaW5hclwiO1xuXG4gIC8vTWFya2V0aW5nIEF3YXJlbmVzcyBDYW1wYWlnbiBDaGFydFxudmFyIG1hcmtldENhbXBDaGFydFJhbmdlID0gXCJBMzM6QjM4XCI7XG52YXIgbWFya2V0Q2FtcENoYXJ0SGVhZGVyID0gXCJFc3RhYmxpc2hpbmcgYSBtYXJrZXRpbmcgYXdhcmVuZXNzIGNhbXBhaWduXCI7XG5cbiAgLy9Xb21lbiBBY2Nlc3MgQ2hhcnRcbnZhciB3b21lbkFjY2Vzc0NoYXJ0UmFuZ2UgPSBcIkE0NDpCNTBcIjtcbnZhciB3b21lbkFjY2Vzc0NoYXJ0SGVhZGVyID0gXCJTdXBwb3J0aW5nIGluaXRpYXRpdmVzIGZvciB3b21lbiB0byBhY2Nlc3MgY28td29ya2luZyBzcGFjZXMgYW5kIG1lbnRvcmluZ1wiO1xuXG4gIC8vRWR1Y2F0aW9uIENvdXJzZXMgQ2hhcnRcbnZhciBlZHVjYXRpb25Db3Vyc2VDaGFydFJhbmdlID0gXCJBNTM6QjU5XCI7XG52YXIgZWR1Y2F0aW9uQ291cnNlQ2hhcnRIZWFkZXIgPSBcIkZhY2lsaXRhdGluZyBzdGFydHVwIGVkdWNhdGlvbiBjb3Vyc2VzIGUuZy4gTGVhbiBMYXVuY2hwYWRcIjtcblxuICAvL0NpdHkgTGlicmFyaWVzIENoYXJ0XG52YXIgY2l0eUxpYnJhcmllc0NoYXJ0UmFuZ2UgPSBcIkE2MjpCNjhcIjtcbnZhciBjaXR5TGlicmFyaWVzQ2hhcnRIZWFkZXIgPSBcIkluY2x1ZGluZyAnaG93IHRvIGNvZGUnIGNsYXNzZXMgaW4gQ2l0eSBsaWJyYXJpZXMgb3IgeW91dGggcHJvZ3JhbXNcIjtcblxuICAvL1JlbnRhbCBPZmZpY2UgU3BhY2UgQ2hhcnRcbnZhciByZW50YWxPZmZpY2VDaGFydFJhbmdlID0gXCJBNzQ6Qjc4XCI7XG52YXIgcmVudGFsT2ZmaWNlQ2hhcnRIZWFkZXIgPSBcIlRlY2ggc3RhcnR1cHMgbmVlZCBtb3JlIGFmZm9yZGFibGUgcmVudGFsIG9mZmljZSBzcGFjZVwiO1xuXG4gIC8vUmVudGFsIE9mZmljZSAmIEV2ZW50IFNwYWNlIENoYXJ0XG52YXIgZXZlbnRTcGFjZUNoYXJ0UmFuZ2UgPSBcIkE4MTpCODVcIjtcbnZhciBldmVudFNwYWNlQ2hhcnRIZWFkZXIgPSBcIkNvLXdvcmtpbmcgc3BhY2VzIG5lZWQgbW9yZSBhZmZvcmRhYmxlIHJlbnRhbCBvZmZpY2UgYW5kIGV2ZW50IHNwYWNlXCI7XG5cbiAgLy9DbG9zZSBQcm94aW1pdHkgQ2hhcnRcbnZhciBjbG9zZVByb3hpbWl0eUNoYXJ0UmFuZ2UgPSBcIkE4ODpCOTJcIjtcbnZhciBjbG9zZVByb3hpbWl0eUNoYXJ0SGVhZGVyID0gXCJUZWNoIHN0YXJ0dXBzIG5lZWQgdG8gYmUgbG9jYXRlZCBpbiBjbG9zZSBwcm94aW1pdHkgdG8gZWFjaCBvdGhlclwiO1xuXG4gIC8vTmV0d29yayBJbnZlc3RvciBDaGFydFxudmFyIG5ldHdvcmtJbnZlc3RDaGFydFJhbmdlID0gXCJBOTU6Qjk5XCI7XG52YXIgbmV0d29ya0ludmVzdENoYXJ0SGVhZGVyID0gXCJUZWNoIHN0YXJ0dXBzIG5lZWQgdG8gYmUgbG9jYXRlZCBpbiBjbG9zZSBwcm94aW1pdHkgdG8gbmV0d29ya3Mgb2YgaW52ZXN0b3JzLCBhY2NlbGVyYXRvcnMvaW5jdWJhdG9ycyBvciBwb3RlbnRpYWwgY3VzdG9tZXJzXCI7XG5cbiAgLy9TaXN0ZXIgQ2l0eSBSZWxhdGlvbnNoaXAgQ2hhcnRcbnZhciBzaXN0ZXJDaXR5Q2hhcnRSYW5nZSA9IFwiQTEwNTpCMTA5XCI7XG52YXIgc2lzdGVyQ2l0eUNoYXJ0SGVhZGVyID0gXCJMZXZlcmFnaW5nIG91ciBzaXN0ZXItY2l0eSByZWxhdGlvbnNoaXAgd2l0aCBTYW4gRnJhbmNpc2NvIGFuZCBHdWFuZ3pob3VcIjtcblxuICAvL1Byb2N1cmVtZW50IFBvbGljaWVzICYgUHJvY2VkdXJlcyBDaGFydFxudmFyIHByb2NQb2xpY2llc0NoYXJ0UmFuZ2UgPSBcIkExMTI6QjExNlwiO1xudmFyIHByb2NQb2xpY2llc0NoYXJ0SGVhZGVyID0gXCJDaGFuZ2UgcHJvY3VyZW1lbnQgcG9saWNpZXMgYW5kIHByb2NlZHVyZXMgdG8gZW5hYmxlIHN0YXJ0dXBzIHRvIGJlY29tZSBzdXBwbGllcnNcIjtcblxuICAvL2NpdHkgcHJvYmxlbXMgQ2hhcnRcbnZhciBjaXR5UHJvYmxlbUNoYXJ0UmFuZ2UgPSBcIkExMTk6QjEyM1wiO1xudmFyIGNpdHlQcm9ibGVtQ2hhcnRIZWFkZXIgPSBcIk9wZW4gdXAgb3VyIGRhdGEgYW5kIGVuY291cmFnZSB0ZXN0aW5nIGlkZWFzIHRoYXQgc29sdmUgQ2l0eSBwcm9ibGVtcyBhbmQgY3JlYXRlIHZpYWJsZSBwcm9kdWN0c1wiO1xuXG4gIC8vSW52ZXN0b3IgcmVjcnVpdG1lbnQgQ2hhcnRcbnZhciBpbnZSZWNydWl0Q2hhcnRSYW5nZSA9IFwiQTEyOTpCMTM0XCI7XG52YXIgaW52UmVjcnVpdENoYXJ0SGVhZGVyID0gXCJJbnZlc3RvciByZWNydWl0bWVudCBhbmQgZWR1Y2F0aW9uIGV2ZW50c1wiO1xuXG4gIC8vU3RhcnR1cCBJbnZlc3RvcnMgQ2hhcnRcbnZhciBzdGFydEludmVzdG9yQ2hhcnRSYW5nZSA9IFwiQTEzNzpCMTQyXCI7XG52YXIgc3RhcnRJbnZlc3RvckNoYXJ0SGVhZGVyID0gXCJFdmVudHMgdG8gY29ubmVjdCB0ZWNoIHN0YXJ0dXBzIHdpdGggaW52ZXN0b3JzXCI7XG5cblxuICAvL1N1Z2dlc3RlZCBMb2NhdGlvbiBDaGFydFxudmFyIGxvY2F0aW9uQ2hhcnRSYW5nZSA9IFwiQTE4NDpCMTg3XCI7XG52YXIgbG9jYXRpb25DaGFydEhlYWRlciA9IFwiVG9wIDQgc3VnZ2VzdGVkIGxvY2F0aW9ucyAlXCI7XG5cbi8vQ2hhcnQgRHJhd2luZyBGdW5jdGlvbnNcbiAgXG5mdW5jdGlvbiBkcmF3U3RhcnR1cEZlc3RDaGFydCgpIHtcblxuICB2YXIgcXVlcnkgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uUXVlcnkoaW5wdXRTcHJlYWRTaGVldFBhdGggKyBzdGFydHVwRmVzdENoYXJ0UmFuZ2UpO1xuICAgIFxuICAgIC8vIFNlbmQgdGhlIHF1ZXJ5IHdpdGggYSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICBxdWVyeS5zZW5kKGhhbmRsZVF1ZXJ5RmVzdENoYXJ0UmVzcG9uc2UpO1xuXG59XG5cbmZ1bmN0aW9uIGRyYXdTeWRuZXlFY29TeXNDaGFydCgpIHtcblxuICB2YXIgcXVlcnkgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uUXVlcnkoaW5wdXRTcHJlYWRTaGVldFBhdGggKyBzeWRuZXlFY29TeXNDaGFydFJhbmdlKTtcbiAgICBcbiAgICAvLyBTZW5kIHRoZSBxdWVyeSB3aXRoIGEgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgcXVlcnkuc2VuZChoYW5kbGVRdWVyeVN5ZG5leUVjb1N5c0NoYXJ0UmVzcG9uc2UpO1xuXG59XG5cbmZ1bmN0aW9uIGRyYXdNYXJrZXRDYW1wQ2hhcnQoKSB7XG5cbiAgdmFyIHF1ZXJ5ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLlF1ZXJ5KGlucHV0U3ByZWFkU2hlZXRQYXRoICsgbWFya2V0Q2FtcENoYXJ0UmFuZ2UpO1xuICAgIFxuICAgIC8vIFNlbmQgdGhlIHF1ZXJ5IHdpdGggYSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICBxdWVyeS5zZW5kKGhhbmRsZVF1ZXJ5TWFya2V0Q2FtcENoYXJ0UmVzcG9uc2UpO1xuXG59XG5cbmZ1bmN0aW9uIGRyYXdXb21lbkFjY2Vzc0NoYXJ0KCkge1xuXG4gIHZhciBxdWVyeSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5RdWVyeShpbnB1dFNwcmVhZFNoZWV0UGF0aCArIHdvbWVuQWNjZXNzQ2hhcnRSYW5nZSk7XG4gICAgXG4gICAgLy8gU2VuZCB0aGUgcXVlcnkgd2l0aCBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgIHF1ZXJ5LnNlbmQoaGFuZGxlUXVlcnlXb21lbkFjY2Vzc0NoYXJ0UmVzcG9uc2UpO1xuXG59XG5cbmZ1bmN0aW9uIGRyYXdFZHVjYXRpb25Db3Vyc2VDaGFydCgpIHtcblxuICB2YXIgcXVlcnkgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uUXVlcnkoaW5wdXRTcHJlYWRTaGVldFBhdGggKyBlZHVjYXRpb25Db3Vyc2VDaGFydFJhbmdlKTtcbiAgICBcbiAgICAvLyBTZW5kIHRoZSBxdWVyeSB3aXRoIGEgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgcXVlcnkuc2VuZChoYW5kbGVRdWVyeUVkdWNhdGlvbkNvdXJzZUNoYXJ0UmVzcG9uc2UpO1xuXG59XG5cbmZ1bmN0aW9uIGRyYXdDaXR5TGlicmFyaWVzQ2hhcnQoKSB7XG5cbiAgdmFyIHF1ZXJ5ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLlF1ZXJ5KGlucHV0U3ByZWFkU2hlZXRQYXRoICsgY2l0eUxpYnJhcmllc0NoYXJ0UmFuZ2UpO1xuICAgIFxuICAgIC8vIFNlbmQgdGhlIHF1ZXJ5IHdpdGggYSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICBxdWVyeS5zZW5kKGhhbmRsZVF1ZXJ5Q2l0eUxpYnJhcmllc0NoYXJ0UmVzcG9uc2UpO1xuXG59XG5cbmZ1bmN0aW9uIGRyYXdSZW50YWxPZmZpY2VDaGFydCgpIHtcblxuICB2YXIgcXVlcnkgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uUXVlcnkoaW5wdXRTcHJlYWRTaGVldFBhdGggKyByZW50YWxPZmZpY2VDaGFydFJhbmdlKTtcbiAgICBcbiAgICAvLyBTZW5kIHRoZSBxdWVyeSB3aXRoIGEgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgcXVlcnkuc2VuZChoYW5kbGVRdWVyeVJlbnRhbE9mZmljZUNoYXJ0UmVzcG9uc2UpO1xuXG59XG5cbmZ1bmN0aW9uIGRyYXdFdmVudFNwYWNlQ2hhcnQoKSB7XG5cbiAgdmFyIHF1ZXJ5ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLlF1ZXJ5KGlucHV0U3ByZWFkU2hlZXRQYXRoICsgZXZlbnRTcGFjZUNoYXJ0UmFuZ2UpO1xuICAgIFxuICAgIC8vIFNlbmQgdGhlIHF1ZXJ5IHdpdGggYSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICBxdWVyeS5zZW5kKGhhbmRsZVF1ZXJ5RXZlbnRTcGFjZUNoYXJ0UmVzcG9uc2UpO1xuXG59XG5cbmZ1bmN0aW9uIGRyYXdDbG9zZVByb3hpbWl0eUNoYXJ0KCkge1xuXG4gIHZhciBxdWVyeSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5RdWVyeShpbnB1dFNwcmVhZFNoZWV0UGF0aCArIGNsb3NlUHJveGltaXR5Q2hhcnRSYW5nZSk7XG4gICAgXG4gICAgLy8gU2VuZCB0aGUgcXVlcnkgd2l0aCBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgIHF1ZXJ5LnNlbmQoaGFuZGxlUXVlcnlDbG9zZVByb3hpbWl0eUNoYXJ0UmVzcG9uc2UpO1xuXG59XG5cbmZ1bmN0aW9uIGRyYXdOZXR3b3JrSW52ZXN0Q2hhcnQoKSB7XG5cbiAgdmFyIHF1ZXJ5ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLlF1ZXJ5KGlucHV0U3ByZWFkU2hlZXRQYXRoICsgbmV0d29ya0ludmVzdENoYXJ0UmFuZ2UpO1xuICAgIFxuICAgIC8vIFNlbmQgdGhlIHF1ZXJ5IHdpdGggYSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICBxdWVyeS5zZW5kKGhhbmRsZVF1ZXJ5TmV0d29ya0ludmVzdENoYXJ0UmVzcG9uc2UpO1xuXG59XG5cbmZ1bmN0aW9uIGRyYXdTaXN0ZXJDaXR5Q2hhcnQoKSB7XG5cbiAgdmFyIHF1ZXJ5ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLlF1ZXJ5KGlucHV0U3ByZWFkU2hlZXRQYXRoICsgc2lzdGVyQ2l0eUNoYXJ0UmFuZ2UpO1xuICAgIFxuICAgIC8vIFNlbmQgdGhlIHF1ZXJ5IHdpdGggYSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICBxdWVyeS5zZW5kKGhhbmRsZVF1ZXJ5U2lzdGVyQ2l0eUNoYXJ0UmVzcG9uc2UpO1xuXG59XG5cbmZ1bmN0aW9uIGRyYXdQcm9jUG9saWNpZXNDaGFydCgpIHtcblxuICB2YXIgcXVlcnkgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uUXVlcnkoaW5wdXRTcHJlYWRTaGVldFBhdGggKyBwcm9jUG9saWNpZXNDaGFydFJhbmdlKTtcbiAgICBcbiAgICAvLyBTZW5kIHRoZSBxdWVyeSB3aXRoIGEgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgcXVlcnkuc2VuZChoYW5kbGVRdWVyeVByb2NQb2xpY2llc0NoYXJ0UmVzcG9uc2UpO1xuXG59XG5cbmZ1bmN0aW9uIGRyYXdDaXR5UHJvYmxlbUNoYXJ0KCkge1xuXG4gIHZhciBxdWVyeSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5RdWVyeShpbnB1dFNwcmVhZFNoZWV0UGF0aCArIGNpdHlQcm9ibGVtQ2hhcnRSYW5nZSk7XG4gICAgXG4gICAgLy8gU2VuZCB0aGUgcXVlcnkgd2l0aCBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgIHF1ZXJ5LnNlbmQoaGFuZGxlUXVlcnlDaXR5UHJvYmxlbUNoYXJ0UmVzcG9uc2UpO1xuXG59XG5cbmZ1bmN0aW9uIGRyYXdJbnZSZWNydWl0Q2hhcnQoKSB7XG5cbiAgdmFyIHF1ZXJ5ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLlF1ZXJ5KGlucHV0U3ByZWFkU2hlZXRQYXRoICsgaW52UmVjcnVpdENoYXJ0UmFuZ2UpO1xuICAgIFxuICAgIC8vIFNlbmQgdGhlIHF1ZXJ5IHdpdGggYSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICBxdWVyeS5zZW5kKGhhbmRsZVF1ZXJ5SW52UmVjcnVpdENoYXJ0UmVzcG9uc2UpO1xuXG59XG5cbmZ1bmN0aW9uIGRyYXdTdGFydEludmVzdG9yQ2hhcnQoKSB7XG5cbiAgdmFyIHF1ZXJ5ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLlF1ZXJ5KGlucHV0U3ByZWFkU2hlZXRQYXRoICsgc3RhcnRJbnZlc3RvckNoYXJ0UmFuZ2UpO1xuICAgIFxuICAgIC8vIFNlbmQgdGhlIHF1ZXJ5IHdpdGggYSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICBxdWVyeS5zZW5kKGhhbmRsZVF1ZXJ5U3RhcnRJbnZlc3RvckNoYXJ0UmVzcG9uc2UpO1xuXG59XG5cbmZ1bmN0aW9uIGRyYXdMb2NhdGlvbkNoYXJ0KCkge1xuXG4gIHZhciBxdWVyeSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5RdWVyeShpbnB1dFNwcmVhZFNoZWV0UGF0aCArIGxvY2F0aW9uQ2hhcnRSYW5nZSk7XG4gICAgXG4gICAgLy8gU2VuZCB0aGUgcXVlcnkgd2l0aCBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgIHF1ZXJ5LnNlbmQoaGFuZGxlUXVlcnlMb2NhdGlvbkNoYXJ0UmVzcG9uc2UpO1xuXG59XG5cbi8vSGFuZGxlciBDYWxsYmFjayBRdWVyaWVzXG5cbiAgZnVuY3Rpb24gaGFuZGxlUXVlcnlGZXN0Q2hhcnRSZXNwb25zZShyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5pc0Vycm9yKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBoYW5kbGVRdWVyeUZlc3RDaGFydFJlc3BvbnNlOiAnICsgcmVzcG9uc2UuZ2V0TWVzc2FnZSgpICsgJyAnICsgcmVzcG9uc2UuZ2V0RGV0YWlsZWRNZXNzYWdlKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICB2YXIgIGRhdGEgPSByZXNwb25zZS5nZXREYXRhVGFibGUoKTtcbiAgLy8gQ3JlYXRlIGFuZCBkcmF3IHRoZSB2aXN1YWxpemF0aW9uLlxuICBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQmFyQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0dXBGZXN0RGl2JykpLlxuICAgICAgZHJhdyhkYXRhLCB7Y2hhcnRBcmVhOiB7XG4gICAgICAgICAgICB3aWR0aDogJzUwJScgICAgICAgICAgICAgXG4gICAgICAgIH0sdGl0bGU6c3RhcnR1cEZlc3RDaGFydEhlYWRlcixcbiAgICAgICAgICAgIGxlZ2VuZDogJ25vbmUnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OjQwMCxcbiAgICAgICAgICAgIHZBeGlzOiB7dGl0bGU6IFwiXCJ9LCBcbiAgICAgICAgICAgIGhBeGlzOiB7dGl0bGU6IFwiXCJ9fVxuICAgICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVF1ZXJ5U3lkbmV5RWNvU3lzQ2hhcnRSZXNwb25zZShyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5pc0Vycm9yKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBoYW5kbGVRdWVyeVN5ZG5leUVjb1N5c0NoYXJ0UmVzcG9uc2U6ICcgKyByZXNwb25zZS5nZXRNZXNzYWdlKCkgKyAnICcgKyByZXNwb25zZS5nZXREZXRhaWxlZE1lc3NhZ2UoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gIHZhciAgZGF0YSA9IHJlc3BvbnNlLmdldERhdGFUYWJsZSgpO1xuICAvLyBDcmVhdGUgYW5kIGRyYXcgdGhlIHZpc3VhbGl6YXRpb24uXG4gIG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5CYXJDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3lkbmV5RWNvU3lzRGl2JykpLlxuICAgICAgZHJhdyhkYXRhLFxuICAgICAgICAgICB7Y2hhcnRBcmVhOiB7XG4gICAgICAgICAgICB3aWR0aDogJzUwJScgICAgICAgICAgICAgXG4gICAgICAgIH0sdGl0bGU6c3lkbmV5RWNvU3lzQ2hhcnRIZWFkZXIsXG4gICAgICAgICAgICBsZWdlbmQ6ICdub25lJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIGhlaWdodDo0MDAsXG4gICAgICAgICAgICB2QXhpczoge3RpdGxlOiBcIlwifSwgXG4gICAgICAgICAgICBoQXhpczoge3RpdGxlOiBcIlwifX1cbiAgICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVRdWVyeU1hcmtldENhbXBDaGFydFJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLmlzRXJyb3IoKSkge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIGhhbmRsZVF1ZXJ5TWFya2V0Q2FtcENoYXJ0UmVzcG9uc2U6ICcgKyByZXNwb25zZS5nZXRNZXNzYWdlKCkgKyAnICcgKyByZXNwb25zZS5nZXREZXRhaWxlZE1lc3NhZ2UoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gIHZhciAgZGF0YSA9IHJlc3BvbnNlLmdldERhdGFUYWJsZSgpO1xuICAvLyBDcmVhdGUgYW5kIGRyYXcgdGhlIHZpc3VhbGl6YXRpb24uXG4gIG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5CYXJDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya2V0Q2FtcERpdicpKS5cbiAgICAgIGRyYXcoZGF0YSxcbiAgICAgICAgICAge2NoYXJ0QXJlYToge1xuICAgICAgICAgICAgd2lkdGg6ICc1MCUnICAgICAgICAgICAgIFxuICAgICAgICB9LHRpdGxlOm1hcmtldENhbXBDaGFydEhlYWRlcixcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIGhlaWdodDo0MDAsXG4gICAgICAgICAgICBsZWdlbmQ6ICdub25lJyxcbiAgICAgICAgICAgIHZBeGlzOiB7dGl0bGU6IFwiXCJ9LCBcbiAgICAgICAgICAgIGhBeGlzOiB7dGl0bGU6IFwiXCJ9fVxuICAgICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVF1ZXJ5V29tZW5BY2Nlc3NDaGFydFJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLmlzRXJyb3IoKSkge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIGhhbmRsZVF1ZXJ5V29tZW5BY2Nlc3NDaGFydFJlc3BvbnNlOiAnICsgcmVzcG9uc2UuZ2V0TWVzc2FnZSgpICsgJyAnICsgcmVzcG9uc2UuZ2V0RGV0YWlsZWRNZXNzYWdlKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICB2YXIgIGRhdGEgPSByZXNwb25zZS5nZXREYXRhVGFibGUoKTtcbiAgLy8gQ3JlYXRlIGFuZCBkcmF3IHRoZSB2aXN1YWxpemF0aW9uLlxuICBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQmFyQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvbWVuQWNjZXNzRGl2JykpLlxuICAgICAgZHJhdyhkYXRhLFxuICAgICAgICAgICB7Y2hhcnRBcmVhOiB7XG4gICAgICAgICAgICB3aWR0aDogJzUwJScgICAgICAgICAgICAgXG4gICAgICAgIH0sdGl0bGU6d29tZW5BY2Nlc3NDaGFydEhlYWRlcixcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIGhlaWdodDo0MDAsXG4gICAgICAgICAgICBsZWdlbmQ6ICdub25lJyxcbiAgICAgICAgICAgIHZBeGlzOiB7dGl0bGU6IFwiXCJ9LCBcbiAgICAgICAgICAgIGhBeGlzOiB7dGl0bGU6IFwiXCJ9fVxuICAgICAgKTtcbiAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlUXVlcnlFZHVjYXRpb25Db3Vyc2VDaGFydFJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLmlzRXJyb3IoKSkge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIGhhbmRsZVF1ZXJ5RWR1Y2F0aW9uQ291cnNlQ2hhcnRSZXNwb25zZTogJyArIHJlc3BvbnNlLmdldE1lc3NhZ2UoKSArICcgJyArIHJlc3BvbnNlLmdldERldGFpbGVkTWVzc2FnZSgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgdmFyICBkYXRhID0gcmVzcG9uc2UuZ2V0RGF0YVRhYmxlKCk7XG4gIC8vIENyZWF0ZSBhbmQgZHJhdyB0aGUgdmlzdWFsaXphdGlvbi5cbiAgbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkJhckNoYXJ0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZHVjYXRpb25Db3Vyc2VEaXYnKSkuXG4gICAgICBkcmF3KGRhdGEsXG4gICAgICAgICAgIHtjaGFydEFyZWE6IHtcbiAgICAgICAgICAgIHdpZHRoOiAnNTAlJyAgICAgICAgICAgICBcbiAgICAgICAgfSx0aXRsZTplZHVjYXRpb25Db3Vyc2VDaGFydEhlYWRlcixcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIGhlaWdodDo0MDAsXG4gICAgICAgICAgICBsZWdlbmQ6ICdub25lJyxcbiAgICAgICAgICAgIHZBeGlzOiB7dGl0bGU6IFwiXCJ9LCBcbiAgICAgICAgICAgIGhBeGlzOiB7dGl0bGU6IFwiXCJ9fVxuICAgICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVF1ZXJ5Q2l0eUxpYnJhcmllc0NoYXJ0UmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2UuaXNFcnJvcigpKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gaGFuZGxlUXVlcnlDaXR5TGlicmFyaWVzQ2hhcnRSZXNwb25zZTogJyArIHJlc3BvbnNlLmdldE1lc3NhZ2UoKSArICcgJyArIHJlc3BvbnNlLmdldERldGFpbGVkTWVzc2FnZSgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgdmFyICBkYXRhID0gcmVzcG9uc2UuZ2V0RGF0YVRhYmxlKCk7XG4gIC8vIENyZWF0ZSBhbmQgZHJhdyB0aGUgdmlzdWFsaXphdGlvbi5cbiAgbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkJhckNoYXJ0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5TGlicmFyaWVzRGl2JykpLlxuICAgICAgZHJhdyhkYXRhLFxuICAgICAgICAgICB7Y2hhcnRBcmVhOiB7XG4gICAgICAgICAgICB3aWR0aDogJzUwJScgICAgICAgICAgICAgXG4gICAgICAgIH0sdGl0bGU6Y2l0eUxpYnJhcmllc0NoYXJ0SGVhZGVyLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OjQwMCxcbiAgICAgICAgICAgIGxlZ2VuZDogJ25vbmUnLFxuICAgICAgICAgICAgdkF4aXM6IHt0aXRsZTogXCJcIn0sIFxuICAgICAgICAgICAgaEF4aXM6IHt0aXRsZTogXCJcIn19XG4gICAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUXVlcnlSZW50YWxPZmZpY2VDaGFydFJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLmlzRXJyb3IoKSkge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIGhhbmRsZVF1ZXJ5UmVudGFsT2ZmaWNlQ2hhcnRSZXNwb25zZTogJyArIHJlc3BvbnNlLmdldE1lc3NhZ2UoKSArICcgJyArIHJlc3BvbnNlLmdldERldGFpbGVkTWVzc2FnZSgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgdmFyICBkYXRhID0gcmVzcG9uc2UuZ2V0RGF0YVRhYmxlKCk7XG4gIC8vIENyZWF0ZSBhbmQgZHJhdyB0aGUgdmlzdWFsaXphdGlvbi5cbiAgbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkJhckNoYXJ0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW50YWxPZmZpY2VEaXYnKSkuXG4gICAgICBkcmF3KGRhdGEsXG4gICAgICAgICAgIHtjaGFydEFyZWE6IHtcbiAgICAgICAgICAgIHdpZHRoOiAnNTAlJyAgICAgICAgICAgICBcbiAgICAgICAgfSx0aXRsZTpyZW50YWxPZmZpY2VDaGFydEhlYWRlcixcbiAgICAgICAgICAgIGxlZ2VuZDogJ25vbmUnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OjQwMCxcbiAgICAgICAgICAgIHZBeGlzOiB7dGl0bGU6IFwiXCJ9LCBcbiAgICAgICAgICAgIGhBeGlzOiB7dGl0bGU6IFwiXCJ9fVxuICAgICAgKTtcbiAgfVxuXG4gZnVuY3Rpb24gaGFuZGxlUXVlcnlFdmVudFNwYWNlQ2hhcnRSZXNwb25zZShyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5pc0Vycm9yKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBoYW5kbGVRdWVyeUV2ZW50U3BhY2VDaGFydFJlc3BvbnNlOiAnICsgcmVzcG9uc2UuZ2V0TWVzc2FnZSgpICsgJyAnICsgcmVzcG9uc2UuZ2V0RGV0YWlsZWRNZXNzYWdlKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICB2YXIgIGRhdGEgPSByZXNwb25zZS5nZXREYXRhVGFibGUoKTtcbiAgLy8gQ3JlYXRlIGFuZCBkcmF3IHRoZSB2aXN1YWxpemF0aW9uLlxuICBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQmFyQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50U3BhY2VEaXYnKSkuXG4gICAgICBkcmF3KGRhdGEsXG4gICAgICAgICAgIHtjaGFydEFyZWE6IHtcbiAgICAgICAgICAgIHdpZHRoOiAnNTAlJyAgICAgICAgICAgICBcbiAgICAgICAgfSx0aXRsZTpldmVudFNwYWNlQ2hhcnRIZWFkZXIsXG4gICAgICAgICAgICBsZWdlbmQ6ICdub25lJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIGhlaWdodDo0MDAsXG4gICAgICAgICAgICB2QXhpczoge3RpdGxlOiBcIlwifSwgXG4gICAgICAgICAgICBoQXhpczoge3RpdGxlOiBcIlwifX1cbiAgICAgICk7XG4gIH1cblxuIGZ1bmN0aW9uIGhhbmRsZVF1ZXJ5Q2xvc2VQcm94aW1pdHlDaGFydFJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLmlzRXJyb3IoKSkge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIGhhbmRsZVF1ZXJ5Q2xvc2VQcm94aW1pdHlDaGFydFJlc3BvbnNlOiAnICsgcmVzcG9uc2UuZ2V0TWVzc2FnZSgpICsgJyAnICsgcmVzcG9uc2UuZ2V0RGV0YWlsZWRNZXNzYWdlKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICB2YXIgIGRhdGEgPSByZXNwb25zZS5nZXREYXRhVGFibGUoKTtcbiAgLy8gQ3JlYXRlIGFuZCBkcmF3IHRoZSB2aXN1YWxpemF0aW9uLlxuICBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQmFyQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlUHJveGltaXR5RGl2JykpLlxuICAgICAgZHJhdyhkYXRhLFxuICAgICAgICAgICB7Y2hhcnRBcmVhOiB7XG4gICAgICAgICAgICB3aWR0aDogJzUwJScgICAgICAgICAgICAgXG4gICAgICAgIH0sdGl0bGU6Y2xvc2VQcm94aW1pdHlDaGFydEhlYWRlcixcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIGhlaWdodDo0MDAsXG4gICAgICAgICAgICBsZWdlbmQ6ICdub25lJyxcbiAgICAgICAgICAgIHZBeGlzOiB7dGl0bGU6IFwiXCJ9LCBcbiAgICAgICAgICAgIGhBeGlzOiB7dGl0bGU6IFwiXCJ9fVxuICAgICAgKTtcbiAgfVxuXG5mdW5jdGlvbiBoYW5kbGVRdWVyeU5ldHdvcmtJbnZlc3RDaGFydFJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLmlzRXJyb3IoKSkge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIGhhbmRsZVF1ZXJ5TmV0d29ya0ludmVzdENoYXJ0UmVzcG9uc2U6ICcgKyByZXNwb25zZS5nZXRNZXNzYWdlKCkgKyAnICcgKyByZXNwb25zZS5nZXREZXRhaWxlZE1lc3NhZ2UoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gIHZhciAgZGF0YSA9IHJlc3BvbnNlLmdldERhdGFUYWJsZSgpO1xuICAvLyBDcmVhdGUgYW5kIGRyYXcgdGhlIHZpc3VhbGl6YXRpb24uXG4gIG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5CYXJDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV0d29ya0ludmVzdERpdicpKS5cbiAgICAgIGRyYXcoZGF0YSxcbiAgICAgICAgICAge2NoYXJ0QXJlYToge1xuICAgICAgICAgICAgd2lkdGg6ICc1MCUnICAgICAgICAgICAgIFxuICAgICAgICB9LHRpdGxlOm5ldHdvcmtJbnZlc3RDaGFydEhlYWRlcixcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIGhlaWdodDo0MDAsXG4gICAgICAgICAgICBsZWdlbmQ6ICdub25lJyxcbiAgICAgICAgICAgIHZBeGlzOiB7dGl0bGU6IFwiXCJ9LCBcbiAgICAgICAgICAgIGhBeGlzOiB7dGl0bGU6IFwiXCJ9fVxuICAgICAgKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gaGFuZGxlUXVlcnlTaXN0ZXJDaXR5Q2hhcnRSZXNwb25zZShyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5pc0Vycm9yKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBoYW5kbGVRdWVyeVNpc3RlckNpdHlDaGFydFJlc3BvbnNlOiAnICsgcmVzcG9uc2UuZ2V0TWVzc2FnZSgpICsgJyAnICsgcmVzcG9uc2UuZ2V0RGV0YWlsZWRNZXNzYWdlKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICB2YXIgIGRhdGEgPSByZXNwb25zZS5nZXREYXRhVGFibGUoKTtcbiAgLy8gQ3JlYXRlIGFuZCBkcmF3IHRoZSB2aXN1YWxpemF0aW9uLlxuICBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQmFyQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Npc3RlckNpdHlEaXYnKSkuXG4gICAgICBkcmF3KGRhdGEsXG4gICAgICAgICAgIHtjaGFydEFyZWE6IHtcbiAgICAgICAgICAgIHdpZHRoOiAnNTAlJyAgICAgICAgICAgICBcbiAgICAgICAgfSx0aXRsZTpzaXN0ZXJDaXR5Q2hhcnRIZWFkZXIsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6NDAwLFxuICAgICAgICAgICAgbGVnZW5kOiAnbm9uZScsXG4gICAgICAgICAgICB2QXhpczoge3RpdGxlOiBcIlwifSwgXG4gICAgICAgICAgICBoQXhpczoge3RpdGxlOiBcIlwifX1cbiAgICAgICk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGhhbmRsZVF1ZXJ5UHJvY1BvbGljaWVzQ2hhcnRSZXNwb25zZShyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5pc0Vycm9yKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBoYW5kbGVRdWVyeVByb2NQb2xpY2llc0NoYXJ0UmVzcG9uc2U6ICcgKyByZXNwb25zZS5nZXRNZXNzYWdlKCkgKyAnICcgKyByZXNwb25zZS5nZXREZXRhaWxlZE1lc3NhZ2UoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gIHZhciAgZGF0YSA9IHJlc3BvbnNlLmdldERhdGFUYWJsZSgpO1xuICAvLyBDcmVhdGUgYW5kIGRyYXcgdGhlIHZpc3VhbGl6YXRpb24uXG4gIG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5CYXJDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvY1BvbGljaWVzRGl2JykpLlxuICAgICAgZHJhdyhkYXRhLFxuICAgICAgICAgICB7Y2hhcnRBcmVhOiB7XG4gICAgICAgICAgICB3aWR0aDogJzUwJScgICAgICAgICAgICAgXG4gICAgICAgIH0sdGl0bGU6cHJvY1BvbGljaWVzQ2hhcnRIZWFkZXIsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6NDAwLFxuICAgICAgICAgICAgbGVnZW5kOiAnbm9uZScsXG4gICAgICAgICAgICB2QXhpczoge3RpdGxlOiBcIlwifSwgXG4gICAgICAgICAgICBoQXhpczoge3RpdGxlOiBcIlwifX1cbiAgICAgICk7XG4gIH1cbiAgXG5cbiAgZnVuY3Rpb24gaGFuZGxlUXVlcnlDaXR5UHJvYmxlbUNoYXJ0UmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2UuaXNFcnJvcigpKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gaGFuZGxlUXVlcnlDaXR5UHJvYmxlbUNoYXJ0UmVzcG9uc2U6ICcgKyByZXNwb25zZS5nZXRNZXNzYWdlKCkgKyAnICcgKyByZXNwb25zZS5nZXREZXRhaWxlZE1lc3NhZ2UoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gIHZhciAgZGF0YSA9IHJlc3BvbnNlLmdldERhdGFUYWJsZSgpO1xuICAvLyBDcmVhdGUgYW5kIGRyYXcgdGhlIHZpc3VhbGl6YXRpb24uXG4gIG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5CYXJDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eVByb2JsZW1EaXYnKSkuXG4gICAgICBkcmF3KGRhdGEsXG4gICAgICAgICAgIHtjaGFydEFyZWE6IHtcbiAgICAgICAgICAgIHdpZHRoOiAnNTAlJyAgICAgICAgICAgICBcbiAgICAgICAgfSx0aXRsZTpjaXR5UHJvYmxlbUNoYXJ0SGVhZGVyLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OjQwMCxcbiAgICAgICAgICAgIGxlZ2VuZDogJ25vbmUnLFxuICAgICAgICAgICAgdkF4aXM6IHt0aXRsZTogXCJcIn0sIFxuICAgICAgICAgICAgaEF4aXM6IHt0aXRsZTogXCJcIn19XG4gICAgICApO1xuICB9XG4gIFxuXG4gIFxuICBmdW5jdGlvbiBoYW5kbGVRdWVyeUludlJlY3J1aXRDaGFydFJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLmlzRXJyb3IoKSkge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIGhhbmRsZVF1ZXJ5SW52UmVjcnVpdENoYXJ0UmVzcG9uc2U6ICcgKyByZXNwb25zZS5nZXRNZXNzYWdlKCkgKyAnICcgKyByZXNwb25zZS5nZXREZXRhaWxlZE1lc3NhZ2UoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gIHZhciAgZGF0YSA9IHJlc3BvbnNlLmdldERhdGFUYWJsZSgpO1xuICAvLyBDcmVhdGUgYW5kIGRyYXcgdGhlIHZpc3VhbGl6YXRpb24uXG4gIG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5CYXJDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW52UmVjcnVpdERpdicpKS5cbiAgICAgIGRyYXcoZGF0YSxcbiAgICAgICAgICAge2NoYXJ0QXJlYToge1xuICAgICAgICAgICAgd2lkdGg6ICc1MCUnICAgICAgICAgICAgIFxuICAgICAgICB9LHRpdGxlOmludlJlY3J1aXRDaGFydEhlYWRlcixcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIGhlaWdodDo0MDAsXG4gICAgICAgICAgICBsZWdlbmQ6ICdub25lJyxcbiAgICAgICAgICAgIHZBeGlzOiB7dGl0bGU6IFwiXCJ9LCBcbiAgICAgICAgICAgIGhBeGlzOiB7dGl0bGU6IFwiXCJ9fVxuICAgICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVF1ZXJ5U3RhcnRJbnZlc3RvckNoYXJ0UmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2UuaXNFcnJvcigpKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gaGFuZGxlUXVlcnlTdGFydEludmVzdG9yQ2hhcnRSZXNwb25zZTogJyArIHJlc3BvbnNlLmdldE1lc3NhZ2UoKSArICcgJyArIHJlc3BvbnNlLmdldERldGFpbGVkTWVzc2FnZSgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgdmFyICBkYXRhID0gcmVzcG9uc2UuZ2V0RGF0YVRhYmxlKCk7XG4gIC8vIENyZWF0ZSBhbmQgZHJhdyB0aGUgdmlzdWFsaXphdGlvbi5cbiAgbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkJhckNoYXJ0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEludmVzdG9yRGl2JykpLlxuICAgICAgZHJhdyhkYXRhLFxuICAgICAgICAgICB7Y2hhcnRBcmVhOiB7XG4gICAgICAgICAgICB3aWR0aDogJzUwJScgICAgICAgICAgICAgXG4gICAgICAgIH0sdGl0bGU6c3RhcnRJbnZlc3RvckNoYXJ0SGVhZGVyLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OjQwMCxcbiAgICAgICAgICAgIGxlZ2VuZDogJ25vbmUnLFxuICAgICAgICAgICAgdkF4aXM6IHt0aXRsZTogXCJcIn0sIFxuICAgICAgICAgICAgaEF4aXM6IHt0aXRsZTogXCJcIn19XG4gICAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUXVlcnlMb2NhdGlvbkNoYXJ0UmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2UuaXNFcnJvcigpKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gaGFuZGxlUXVlcnlMb2NhdGlvbkNoYXJ0UmVzcG9uc2U6ICcgKyByZXNwb25zZS5nZXRNZXNzYWdlKCkgKyAnICcgKyByZXNwb25zZS5nZXREZXRhaWxlZE1lc3NhZ2UoKSk7XG4gICAgICByZXR1cm47XG4gICAgfSBcblxuICB2YXIgIGRhdGEgPSByZXNwb25zZS5nZXREYXRhVGFibGUoKTtcbiAgLy8gQ3JlYXRlIGFuZCBkcmF3IHRoZSB2aXN1YWxpemF0aW9uLlxuICB2YXIgY2hhcnQgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQmFyQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uRGl2JykpO1xuXG4gICAgICAgIGNoYXJ0LmRyYXcoZGF0YSwge2NoYXJ0QXJlYToge1xuICAgICAgICAgICAgd2lkdGg6ICc1MCUnICAgICAgICAgICAgIFxuICAgICAgICB9LHRpdGxlOmxvY2F0aW9uQ2hhcnRIZWFkZXIsXG4gICAgICAgICAgICBsZWdlbmQ6ICdub25lJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIGhlaWdodDo0MDAsXG4gICAgICAgICAgICB2QXhpczoge3RpdGxlOiBcIlwifSwgXG4gICAgICAgICAgICBoQXhpczoge3RpdGxlOiBcIlwifX0pO1xuICB9IFxuXG4gIGdvb2dsZS5jaGFydHMubG9hZCgnY3VycmVudCcsIHsncGFja2FnZXMnOlsnY29yZWNoYXJ0JywgJ2JhciddfSk7XG4gIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd1N0YXJ0dXBGZXN0Q2hhcnQpO1xuICBnb29nbGUuY2hhcnRzLnNldE9uTG9hZENhbGxiYWNrKGRyYXdTeWRuZXlFY29TeXNDaGFydCk7XG4gIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd01hcmtldENhbXBDaGFydCk7XG4gIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd1dvbWVuQWNjZXNzQ2hhcnQpO1xuICBnb29nbGUuY2hhcnRzLnNldE9uTG9hZENhbGxiYWNrKGRyYXdFZHVjYXRpb25Db3Vyc2VDaGFydCk7XG4gIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd0NpdHlMaWJyYXJpZXNDaGFydCk7XG4gIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd1JlbnRhbE9mZmljZUNoYXJ0KTtcbiAgZ29vZ2xlLmNoYXJ0cy5zZXRPbkxvYWRDYWxsYmFjayhkcmF3RXZlbnRTcGFjZUNoYXJ0KTtcbiAgZ29vZ2xlLmNoYXJ0cy5zZXRPbkxvYWRDYWxsYmFjayhkcmF3Q2xvc2VQcm94aW1pdHlDaGFydCk7XG4gIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd05ldHdvcmtJbnZlc3RDaGFydCk7XG4gIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd1Npc3RlckNpdHlDaGFydCk7XG4gIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd1Byb2NQb2xpY2llc0NoYXJ0KTtcbiAgZ29vZ2xlLmNoYXJ0cy5zZXRPbkxvYWRDYWxsYmFjayhkcmF3Q2l0eVByb2JsZW1DaGFydCk7XG4gIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd0ludlJlY3J1aXRDaGFydCk7XG4gIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd1N0YXJ0SW52ZXN0b3JDaGFydCk7XG4gIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd0xvY2F0aW9uQ2hhcnQpO1xuXG5cbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXG4gIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd1N0YXJ0dXBGZXN0Q2hhcnQpO1xuICAgIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd1N5ZG5leUVjb1N5c0NoYXJ0KTtcbiAgICBnb29nbGUuY2hhcnRzLnNldE9uTG9hZENhbGxiYWNrKGRyYXdNYXJrZXRDYW1wQ2hhcnQpO1xuICAgIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd1dvbWVuQWNjZXNzQ2hhcnQpO1xuICAgIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd0VkdWNhdGlvbkNvdXJzZUNoYXJ0KTtcbiAgICBnb29nbGUuY2hhcnRzLnNldE9uTG9hZENhbGxiYWNrKGRyYXdDaXR5TGlicmFyaWVzQ2hhcnQpO1xuICAgIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd1JlbnRhbE9mZmljZUNoYXJ0KTtcbiAgICBnb29nbGUuY2hhcnRzLnNldE9uTG9hZENhbGxiYWNrKGRyYXdFdmVudFNwYWNlQ2hhcnQpO1xuICAgIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd0Nsb3NlUHJveGltaXR5Q2hhcnQpO1xuICAgIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd05ldHdvcmtJbnZlc3RDaGFydCk7XG4gICAgZ29vZ2xlLmNoYXJ0cy5zZXRPbkxvYWRDYWxsYmFjayhkcmF3U2lzdGVyQ2l0eUNoYXJ0KTtcbiAgICBnb29nbGUuY2hhcnRzLnNldE9uTG9hZENhbGxiYWNrKGRyYXdQcm9jUG9saWNpZXNDaGFydCk7XG4gICAgZ29vZ2xlLmNoYXJ0cy5zZXRPbkxvYWRDYWxsYmFjayhkcmF3Q2l0eVByb2JsZW1DaGFydCk7XG4gICAgZ29vZ2xlLmNoYXJ0cy5zZXRPbkxvYWRDYWxsYmFjayhkcmF3SW52UmVjcnVpdENoYXJ0KTtcbiAgICBnb29nbGUuY2hhcnRzLnNldE9uTG9hZENhbGxiYWNrKGRyYXdTdGFydEludmVzdG9yQ2hhcnQpO1xuICAgIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd0xvY2F0aW9uQ2hhcnQpO1xuXG59O1xuIFxud2luZG93Lm9ucmVzaXplKCk7XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
