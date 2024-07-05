import express from "express";
import { testPostController } from "../controllers/testController.js";
import userAuth from "../middelwares/authMiddelware.js";

// router object
const router = express.Router();

router.post("/test", userAuth, testPostController);

export default router;
