import * as http from "node:http";

const port = process.env.PORT;

http
  .createServer((req, res) => {
    res.writeHead(200);
    res.end();
  })
  .listen(Number(port), "0.0.0.0", () => {
    console.log(`server started on 0.0.0.0:${port}`);
  });
