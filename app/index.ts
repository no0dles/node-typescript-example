import * as server from "./server";
import * as config from "config";

server.app.listen(config.get("port"));