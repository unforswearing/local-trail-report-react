import Component from "react";
import StormDB from "stormdb";

const getReportsDb = () => {
  const reportsEngine = new StormDB.localFileEngine("./db/reports.stormdb");
  const rdatabase = new StormDB(reportsEngine);

  rdatabase.default({ reports: {} });
  const reports = rdatabase.get("reports");

  return reports;
};

function generateReportId() {
  // do stuff to create a unique id
  return "hi";
}

function getSelectedTrail(reportObject) {
  return "trail";
}

function getReportDescription(reportObject) {
  return "descrip";
}

function getTrailIssues(reportObject) {
  return "issues";
}

function getImmediateMaintenanceBoolean(reportObject) {
  return false;
}

function getOverallSafety(reportObject) {
  return 0;
}

function getRating(reportObject) {
  return 0;
}

/*
// a database adapter for trails.json
const reportsDb =
  "/Users/unforswearing/Documents/__Github/trail-report-vue-test/reportsDB.json";
const database = createDatabase(new SyncJsonFileAdapter(reportsDb));
const reports = database.get("reports");
*/

const submissionFormData = {
  id: "placeholder", // database.generateId("reports"),
  trail: getSelectedTrail({}),
  description: getReportDescription({}),
  trail_issues: getTrailIssues({}),
  immediate_maintenance: getImmediateMaintenanceBoolean({}),
  overall_safety: getOverallSafety({}),
  rating: getRating({}),
};

// reports.database.saveData();

/**/
