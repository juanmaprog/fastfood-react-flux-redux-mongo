import { router } from "express";
const logscontrollers = require("../controllers/logs/logs.controllers");
const router = require("express").Router();

router.get("/logs", logscontrollers.allLogs);

export default router;