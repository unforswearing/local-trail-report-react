import Component from "react";

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
