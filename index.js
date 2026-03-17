import express from 'express';
import { routes } from './src/routes.js';
import { mongo } from './src/db.js';

const app = express();
app.use(express.json());
app.use(routes);
mongo();

app.listen(3000);