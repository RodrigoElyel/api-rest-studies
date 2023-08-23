import { Router } from "express";
import TeamController from "./app/controllers/TeamController.js";

const router = Router();

// GET route default
router.get("/", TeamController.init);

// GET teams / list
router.get("/teams", TeamController.index);

// GET teams / id
router.get("/teams/:id", TeamController.show);

// POST teams / create
router.post("/teams", TeamController.store);

// PUT teams / id
router.put("/teams/:id", TeamController.update);

// DELETE teams / id
router.delete("/teams/:id", TeamController.delete);

export default router;
