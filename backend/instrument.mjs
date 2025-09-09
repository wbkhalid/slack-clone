import * as Sentry from "@sentry/node";
import { ENV } from "./src/config/env.js";

Sentry.init({
  dsn: ENV.SENTRY_DSN,
  tracesSampleRate: 1.0,
  profileSessionSampleRate: 1.0,
  environment: ENV.NODE_ENV || "development",
  sendDefaultPii: true,
  includeLocalVariables: true,
});
