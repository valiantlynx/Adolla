import app from "./web";

import cfg from "./config.json";

app.listen(cfg.http.port, () => {
	console.log(`Web server is live on localhost:${cfg.http.port}`);
});