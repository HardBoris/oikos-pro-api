import { Express } from "express";
import ElementRouter from "./Element.router";
import StuffRouter from "./Stuff.router";
import MidiaRouter from "./Midia.router";

const registerRouters = (app: Express): void => {
  app.use(ElementRouter);
  app.use(StuffRouter);
  app.use(MidiaRouter);
};

export default registerRouters;
