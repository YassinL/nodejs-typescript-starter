import express from "express";
import { v1Router } from "./router";
import { API_BASE_URL } from "../../constant";

// cors
import cors from "cors";

//cookie-parser
import cookieParser from "cookie-parser";

//Documentation
import swaggerConfig from "../../middlewares/documentation/swagger.json";
import swaggerUi from "swagger-ui-express";

//Logger
import morgan from "morgan";

export const createServer = async (): Promise<express.Application> => {
  const app: express.Application = express();

  app.use(express.json());
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: "http://localhost:1234",
      credentials: true,
    })
  );
  app.use(cookieParser());

  app.use(`${API_BASE_URL}`, v1Router);

  //Documentation
  app.use(
    `${API_BASE_URL}documentation/`,
    swaggerUi.serve,
    swaggerUi.setup(swaggerConfig)
  );

  // PORT
  app.listen(4000, () => {
    console.log(`[App] : listening on PORT ${4001}`);
  });

  return app;
};
