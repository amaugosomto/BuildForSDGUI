$(document).ready(function () {
  $("select").formSelect();
  $("#getEstimate").on("click", getEstimate);
  $(".tabs").tabs();
  $("#impactClick").click();
});

function getEstimate() {
  const data = getUserData();
  const impactEstimated = covid19ImpactEstimator(data);
  appendEstimates(impactEstimated);
}

function getUserData(){
  return {
    region: {
      name: "Africa",
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71,
    },
    periodType: $("#periodType").val(),
    timeToElapse: $("#timeToElapse").val(),
    reportedCases: $("#reportedCases").val(),
    population: $("#population").val(),
    totalHospitalBeds: $("#totalHospitalBeds").val()
  };
}

function appendEstimates(data){
  // Append impact cases
  $("#currentlyInfected").val(data.impact.currentlyInfected);
  $("#infectionsByRequestedTime").val(data.impact.infectionsByRequestedTime);
  $("#severeCasesByRequestedTime").val(data.impact.severeCasesByRequestedTime);
  $("#hospitalBedsByRequestedTime").val(
    data.impact.hospitalBedsByRequestedTime
  );
  $("#casesForICUByRequestedTime").val(data.impact.casesForICUByRequestedTime);
  $("#casesForVentilatorsByRequestedTime").val(
    data.impact.casesForVentilatorsByRequestedTime
  );
  $("#dollarsInFlight").val(data.impact.dollarsInFlight);

  //Append Severe impact cases
  $("#severecurrentlyInfected").val(data.severeImpact.currentlyInfected);
  $("#severeinfectionsByRequestedTime").val(data.severeImpact.infectionsByRequestedTime);
  $("#severesevereCasesByRequestedTime").val(data.severeImpact.severeCasesByRequestedTime);
  $("#severehospitalBedsByRequestedTime").val(
    data.severeImpact.hospitalBedsByRequestedTime
  );
  $("#severecasesForICUByRequestedTime").val(data.severeImpact.casesForICUByRequestedTime);
  $("#severecasesForVentilatorsByRequestedTime").val(
    data.severeImpact.casesForVentilatorsByRequestedTime
  );
  $("#severedollarsInFlight").val(data.severeImpact.dollarsInFlight);
  $(".modal").modal();
  $("#estimationModal").modal("open");
  $(".modal").modal();
  $("#estimationModal").modal("open");
}