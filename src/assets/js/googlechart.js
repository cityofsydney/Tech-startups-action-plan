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
var locationChartRange = "A184:B188";
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

  var  data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('startupFestDiv')).
      draw(data, {chartArea: {
            width: '50%'             
        },title:startupFestChartHeader,
            legend: 'none',
            width: '100%', height:400,
            vAxis: {title: ""}, 
            hAxis: {title: ""}}
      );
  }

  function handleQuerySydneyEcoSysChartResponse(response) {
    if (response.isError()) {
      console.log('Error in handleQuerySydneyEcoSysChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

  var  data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('sydneyEcoSysDiv')).
      draw(data,
           {chartArea: {
            width: '50%'             
        },title:sydneyEcoSysChartHeader,
            legend: 'none',
            width: '100%', height:400,
            vAxis: {title: ""}, 
            hAxis: {title: ""}}
      );
  }

  function handleQueryMarketCampChartResponse(response) {
    if (response.isError()) {
      console.log('Error in handleQueryMarketCampChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

  var  data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('marketCampDiv')).
      draw(data,
           {chartArea: {
            width: '50%'             
        },title:marketCampChartHeader,
            width: '100%', height:400,
            legend: 'none',
            vAxis: {title: ""}, 
            hAxis: {title: ""}}
      );
  }

  function handleQueryWomenAccessChartResponse(response) {
    if (response.isError()) {
      console.log('Error in handleQueryWomenAccessChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

  var  data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('womenAccessDiv')).
      draw(data,
           {chartArea: {
            width: '50%'             
        },title:womenAccessChartHeader,
            width: '100%', height:400,
            legend: 'none',
            vAxis: {title: ""}, 
            hAxis: {title: ""}}
      );
  }

    function handleQueryEducationCourseChartResponse(response) {
    if (response.isError()) {
      console.log('Error in handleQueryEducationCourseChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

  var  data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('educationCourseDiv')).
      draw(data,
           {chartArea: {
            width: '50%'             
        },title:educationCourseChartHeader,
            width: '100%', height:400,
            legend: 'none',
            vAxis: {title: ""}, 
            hAxis: {title: ""}}
      );
  }

  function handleQueryCityLibrariesChartResponse(response) {
    if (response.isError()) {
      console.log('Error in handleQueryCityLibrariesChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

  var  data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('cityLibrariesDiv')).
      draw(data,
           {chartArea: {
            width: '50%'             
        },title:cityLibrariesChartHeader,
            width: '100%', height:400,
            legend: 'none',
            vAxis: {title: ""}, 
            hAxis: {title: ""}}
      );
  }

  function handleQueryRentalOfficeChartResponse(response) {
    if (response.isError()) {
      console.log('Error in handleQueryRentalOfficeChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

  var  data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('rentalOfficeDiv')).
      draw(data,
           {chartArea: {
            width: '50%'             
        },title:rentalOfficeChartHeader,
            legend: 'none',
            width: '100%', height:400,
            vAxis: {title: ""}, 
            hAxis: {title: ""}}
      );
  }

 function handleQueryEventSpaceChartResponse(response) {
    if (response.isError()) {
      console.log('Error in handleQueryEventSpaceChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

  var  data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('eventSpaceDiv')).
      draw(data,
           {chartArea: {
            width: '50%'             
        },title:eventSpaceChartHeader,
            legend: 'none',
            width: '100%', height:400,
            vAxis: {title: ""}, 
            hAxis: {title: ""}}
      );
  }

 function handleQueryCloseProximityChartResponse(response) {
    if (response.isError()) {
      console.log('Error in handleQueryCloseProximityChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

  var  data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('closeProximityDiv')).
      draw(data,
           {chartArea: {
            width: '50%'             
        },title:closeProximityChartHeader,
            width: '100%', height:400,
            legend: 'none',
            vAxis: {title: ""}, 
            hAxis: {title: ""}}
      );
  }

function handleQueryNetworkInvestChartResponse(response) {
    if (response.isError()) {
      console.log('Error in handleQueryNetworkInvestChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

  var  data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('networkInvestDiv')).
      draw(data,
           {chartArea: {
            width: '50%'             
        },title:networkInvestChartHeader,
            width: '100%', height:400,
            legend: 'none',
            vAxis: {title: ""}, 
            hAxis: {title: ""}}
      );
  }
  
  function handleQuerySisterCityChartResponse(response) {
    if (response.isError()) {
      console.log('Error in handleQuerySisterCityChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

  var  data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('sisterCityDiv')).
      draw(data,
           {chartArea: {
            width: '50%'             
        },title:sisterCityChartHeader,
            width: '100%', height:400,
            legend: 'none',
            vAxis: {title: ""}, 
            hAxis: {title: ""}}
      );
  }
  
  function handleQueryProcPoliciesChartResponse(response) {
    if (response.isError()) {
      console.log('Error in handleQueryProcPoliciesChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

  var  data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('procPoliciesDiv')).
      draw(data,
           {chartArea: {
            width: '50%'             
        },title:procPoliciesChartHeader,
            width: '100%', height:400,
            legend: 'none',
            vAxis: {title: ""}, 
            hAxis: {title: ""}}
      );
  }
  

  function handleQueryCityProblemChartResponse(response) {
    if (response.isError()) {
      console.log('Error in handleQueryCityProblemChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

  var  data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('cityProblemDiv')).
      draw(data,
           {chartArea: {
            width: '50%'             
        },title:cityProblemChartHeader,
            width: '100%', height:400,
            legend: 'none',
            vAxis: {title: ""}, 
            hAxis: {title: ""}}
      );
  }
  

  
  function handleQueryInvRecruitChartResponse(response) {
    if (response.isError()) {
      console.log('Error in handleQueryInvRecruitChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

  var  data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('invRecruitDiv')).
      draw(data,
           {chartArea: {
            width: '50%'             
        },title:invRecruitChartHeader,
            width: '100%', height:400,
            legend: 'none',
            vAxis: {title: ""}, 
            hAxis: {title: ""}}
      );
  }

  function handleQueryStartInvestorChartResponse(response) {
    if (response.isError()) {
      console.log('Error in handleQueryStartInvestorChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

  var  data = response.getDataTable();
  // Create and draw the visualization.
  new google.visualization.BarChart(document.getElementById('startInvestorDiv')).
      draw(data,
           {chartArea: {
            width: '50%'             
        },title:startInvestorChartHeader,
            width: '100%', height:400,
            legend: 'none',
            vAxis: {title: ""}, 
            hAxis: {title: ""}}
      );
  }

  function handleQueryLocationChartResponse(response) {
    if (response.isError()) {
      console.log('Error in handleQueryLocationChartResponse: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    } 

  var  data = response.getDataTable();
  // Create and draw the visualization.
  var chart = new google.visualization.BarChart(document.getElementById('locationDiv'));

        chart.draw(data, {chartArea: {
            width: '50%'             
        },title:locationChartHeader,
            legend: 'none',
            width: '100%', height:400,
            vAxis: {title: ""}, 
            hAxis: {title: ""}});
  } 

  google.charts.load('current', {'packages':['corechart', 'bar']});
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


window.onresize = function() {

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

