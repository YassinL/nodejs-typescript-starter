import { createServer } from "./app/http/app";
import { createConnection } from "typeorm";

import { typeORMConfig } from "./app/database/typeorm";

console.log(typeORMConfig);

createConnection(typeORMConfig).then((conn) => {
  console.log(conn);
});

createServer();
