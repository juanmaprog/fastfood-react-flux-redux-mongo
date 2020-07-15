const getNewGUID = require("../helpers/helperString");
const logsCtrl = {};
const Logs = require("../models/logs.model");

logsCtrl.allLogs = async (req, res) => {
  const logs = await Logs.find()
    .sort({ description: "asc" });
    res.json(logs);
};
