import { Router } from "express";
import { thingController } from "../controllers";

const ThingRouter = Router();

ThingRouter.post(
  "/oikos-pro-api/:companyId/things/register",
  thingController.ThingCreator
);
ThingRouter.get(
  "/oikos-pro-api/:companyId/things",
  thingController.ThingsLoader
);
ThingRouter.get(
  "/oikos-pro-api/:companyId/things/:ThingId",
  thingController.ThingLoader
);

ThingRouter.patch(
  "/oikos-pro-api/:companyId/things/:ThingId",
  thingController.ThingEditor
);

ThingRouter.delete(
  "/oikos-pro-api/:companyId/things/:ThingId",
  thingController.ThingDeletor
);

export default ThingRouter;