import  express from "express";
const router = express.Router();
import { getValeurPatrimoineRange ,getValeurPatrimoine } from "../controllers/patrimoine.controller.js";

router.post("/range", getValeurPatrimoineRange );

router.get("/:date", getValeurPatrimoine);


export default router;