import express from 'express';
import cors from 'cors';
import { routes } from './src/routes.js';
import { mongo } from './src/db.js';

const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);
mongo();
const porta = process.env.PORT || 3000;
app.listen(porta, () => {
    console.log(`🚀 Servidor rodando perfeitamente na porta: ${porta}`);
});