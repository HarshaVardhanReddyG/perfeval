const express = require('express');
const app = express();
const port = 3000;

// Mock data to be returned in response
const responseData = {
  "items": [
    {
      "status": "success",
      "PerformanceEvaluationId": "923460008000803",
      "PerformanceDocumentName": "[ZHRA-SB App Dev2Ω'+++ 'Ø",
      "WorkerPersonId": "923460008154906",
      "WorkerPersonNumber": "1273",
      "ManagerId": "923460008154921",
      "TemplatePeriodId": "923460008000802",
      "TemplateDefnId": "923460008000802",
      "WorkerDisplayName": "Mike ZHRA-Dennett",
      "ManagerDisplayName": "Monty ZHRA-York",
      "PerformanceTemplateName": "[ZHRA-SB Applications Developer 2Ω'+++ '+++ '+++ '++Ø",
      "summary": "1 observation found.1 user error that need corrective action.",
      "timestamp": "2025-10-13T09:46:06.507869405Z"
    }
  ],
  "observations": [
    {
      "code": "OBS001",
      "message": "Competencies pulled into Performance Document may not be from the expected model profile as multiple model profiles are qualified for the assignment.",
      "cause": "User Error",
      "severity": "warning",
      "correctiveAction": "If the expected competencies are not pulled in, please make sure only one model profile is associated to the employee assignment at the profiles -> model profiles UI."
    }
  ],
  "errors": []
};

// Define a route to serve the data
app.get('/api/performance-setup', (req, res) => {
  res.json(responseData);  // Send the mock data as a JSON response
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
