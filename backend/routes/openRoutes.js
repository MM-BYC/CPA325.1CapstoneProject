const express = require("express");
const router = express.Router();

// destructure the Controller
const openController = require("../controllers/openControllers");

//-->-->-->-->-->--> ROUTES
router.get("/", openController.fetchOpens);
router.get("/:id", openController.fetchOpen);
router.post("/", openController.createOpen);
router.put("/:id", openController.updateOpen);
router.delete("/:id", openController.deleteOpen);

module.exports = router;

//-->-->-->-->-->--> END OPEN ROUTES
