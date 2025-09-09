import "../instrument.mjs";
import express from "express";
import { ENV } from "./config/env.js";
import connectDB from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./config/inngest.js";
import chatRoutes from "./routes/chat.route.js";
import * as Sentary from "@sentry/node";

const app = express();

app.use(express.json());

app.use(clerkMiddleware());

app.get("/debug", (req, res) => {
  throw new Error("Sentary Error");
});

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);

Sentary.setupExpressErrorHandler(app);

app.get("/", (req, res) => res.send("Hello World"));

const startServer = async () => {
  try {
    await connectDB();
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () => {
        console.log(`app running at ${ENV.PORT}`);
      });
    }
  } catch (error) {
    console.log(error, "error");
    process.exit(1);
  }
};

startServer();

export default app;
