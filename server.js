const express = require('express');
const app = express();
const port = 3001;

// ====== 1️⃣ /api/performance-setup ======
const performanceSetupData = {
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


// ====== 2️⃣ /api/perfomnce-evaluations ======
const performanceEvaluationsData = {
  "items": [
    {
      "status": "success",
      "PerformanceEvaluationId": "923460007000745",
      "PerformanceDocumentName": "[ZHRA-AM Test Reset feature Period 1Ω'+++ '+++ '+++ '+++ 'Ø",
      "WorkerPersonId": "923460008154973",
      "WorkerPersonNumber": "1273",
      "ManagerId": "923460008154972",
      "TemplatePeriodId": "923460007000106",
      "TemplateDefnId": "923460007000106",
      "WorkerDisplayName": "Mytri ZHRA-Narayan",
      "ManagerDisplayName": "Shravanthi ZHRA-Jain",
      "PerformanceTemplateName": "[ZHRA-AM Test Reset featureΩ'+++ '+++ '+++Ø",
      "summary": "4 observations found. 4 data issues and  that need corrective action.",
      "timestamp": "2025-10-13T07:02:46.469198147Z"
    }
  ],
  "observations": [
    {
      "code": "OBS001",
      "message": "Evaluation status is Completed, but evaluation task \"Confirm Review Meeting Held\" is in Not started status.",
      "cause": "Data issue",
      "severity": "critical",
      "correctiveAction": "Run the ESS job Performance Data Integrity Check."
    },
    {
      "code": "OBS002",
      "message": "Evaluation status is Completed, but evaluation task \"Set Next Period Goals\" is in Ready status.",
      "cause": "Data issue",
      "severity": "critical",
      "correctiveAction": "Run the ESS job Performance Data Integrity Check."
    },
    {
      "code": "OBS003",
      "message": "Evaluation status is Completed, but evaluation task \"Share Performance Document\" is in Not started status.",
      "cause": "Data issue",
      "severity": "critical",
      "correctiveAction": "Run the ESS job Performance Data Integrity Check."
    },
    {
      "code": "OBS004",
      "message": "Evaluation status is Completed, but evaluation task \"Share Performance Document\" is in Ready status.",
      "cause": "Data issue",
      "severity": "critical",
      "correctiveAction": "Run the ESS job Performance Data Integrity Check."
    }
  ],
  "errors": []
};


// ====== 3️⃣ /api/perfomance-integrations ======
const performanceIntegrationsData = {
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
      "summary": "6 observations found.6 user errors that need corrective action.",
      "timestamp": "2025-10-13T06:37:31.941076786Z"
    }
  ],
  "observations": [
    {
      "code": "OBS001",
      "message": "Performance process flow \"Annual Evaluation with Approval 1\" has Set Goals task. This task is not supported in Redwood UI.",
      "cause": "User Error",
      "severity": "warning",
      "correctiveAction": "As RedWood UI is enabled for Performance Document, create a new performance process flow with no Set Goals task."
    },
    {
      "code": "OBS002",
      "message": "There is no questionnaire added for role MANAGER in Performance template period. The questionnaire evaluation page will be blank.",
      "cause": "User Error",
      "severity": "warning",
      "correctiveAction": "Cancel and delete performance documents created for this template. Add the questionnaire for role MANAGER in Performance template period. Re-create performance document."
    },
    {
      "code": "OBS003",
      "message": "There is no questionnaire added for role PARTICIPANT in Performance template period. The questionnaire evaluation page will be blank.",
      "cause": "User Error",
      "severity": "warning",
      "correctiveAction": "Cancel and delete performance documents created for this template. Add the questionnaire for role PARTICIPANT in Performance template period. Re-create performance document."
    },
    {
      "code": "OBS004",
      "message": "There is no questionnaire added for role PARTICIPANT in Performance template period. The questionnaire evaluation page will be blank.",
      "cause": "User Error",
      "severity": "warning",
      "correctiveAction": "Cancel and delete performance documents created for this template. Add the questionnaire for role PARTICIPANT in Performance template period. Re-create performance document."
    },
    {
      "code": "OBS005",
      "message": "There is no questionnaire added for role WORKER in Performance template period. The questionnaire evaluation page will be blank.",
      "cause": "User Error",
      "severity": "warning",
      "correctiveAction": "Cancel and delete performance documents created for this template. Add the questionnaire for role WORKER in Performance template period. Re-create performance document."
    },
    {
      "code": "OBS006",
      "message": "The competency section of this template has Update Profile flag as Yes, but Instance Qualifier is not selected. The comptency and ratings will not be updated in profiles.",
      "cause": "User Error",
      "severity": "warning",
      "correctiveAction": "Update Instance Qualifier before evaluaton is completed."
    }
  ],
  "errors": []
};


// ====== ROUTES ======
app.get('/api/performance-setup', (req, res) => {
  res.json(performanceSetupData);
});

app.get('/api/perfomnce-evaluations', (req, res) => {
  res.json(performanceEvaluationsData);
});

app.get('/api/perfomance-integrations', (req, res) => {
  res.json(performanceIntegrationsData);
});


// ====== START SERVER ======
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
