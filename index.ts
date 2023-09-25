import * as http from "node:http";
import { Client } from "pg";

main().catch(console.error);

async function main() {
  const client = new Client({
    connectionString: process.env.DB_URL,
  });

  await client.connect();

  const port = process.env.PORT;

  http
    .createServer(async (req, res) => {
      res.writeHead(200);

      const { rows } = await client.query("SELECT $1::text as message", [
        "Hello world!",
      ]);

      res.write(rows[0].message);
      res.end();

      await client.end();
    })
    .listen(Number(port), "0.0.0.0", () => {
      console.log(`server started on 0.0.0.0:${port}`);
    });
}
