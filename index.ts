import chalk from "chalk";
import dotenv from "dotenv";
import app from "./src/app";
import { connectDatabase } from "./src/database/db";

dotenv.config();

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(chalk.green(`Server running at http://localhost:${PORT}`));
    });
  })
  .catch((error: unknown) => {
    console.error(chalk.red("Database connection failed!!"), error);
    process.exit(1);
  });
