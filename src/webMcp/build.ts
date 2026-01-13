// @ts-ignore
import { app, server, transport } from "./honoWebStandardStreamableHttp";

import { fire } from "hono/service-worker";

// Start the server

server.connect(transport).then(() => {
  fire(app);
});
