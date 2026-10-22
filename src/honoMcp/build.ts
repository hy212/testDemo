// @ts-ignore
import app from "./hono";

import { fire } from "hono/service-worker";

// Start the server

fire(app);
