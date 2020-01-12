const express = require("express");
const compression = require("compression");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const { join } = require("path");
const favicon = require("serve-favicon");
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 4000;

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(compression());
    // server.use(favicon(join(__dirname, "public", "favicon.ico")));
    server.use(handle);

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) {
        throw err;
      }
      if (dev) {
        console.log(`Ready on http://localhost:${port}`);
      }
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
