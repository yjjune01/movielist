import express, { Router } from "express";
import cgvRouter from "./cgvRouter.ts";
import lotteRouter from "./lotteRouter.ts";
import megaboxRouter from "./megaboxRouter.ts";

const router: Router = express.Router();

router.use("/cgv", cgvRouter);
router.use("/lotte", lotteRouter);
router.use("/megabox", megaboxRouter);

export default router;
