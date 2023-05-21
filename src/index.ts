import express, { Express, Request, Response } from "express";
import apiRoute from "./router/index.ts";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "db.json");
const adapter = new JSONFile(file);
const defaultData = { posts: [] };
const db = new Low(adapter, defaultData);

const app: Express = express();
const port = 5000;

app.use(express.json());
app.use("/api", apiRoute);

app.get("/", (req: Request, res: Response) => {
    res.send("MovieList");
});

app.get;

app.listen(port, () => {
    console.log(`[server]: Server is running at <https://localhost>:${port}`);
});
