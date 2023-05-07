import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import adminRouter from "./routers/admin-router";
import clienteRouter from "./routers/clientes-router";
import empresasRouter from "./routers/empresas.router";
import motoristasRouter from "./routers/motoristas-router";
import ordenesRouter from "./routers/ordenes-router";
import productosRouter from "./routers/productos-router";
import { Database } from "./modules/database";
import cors from 'cors';


dotenv.config();
const database: Database = new Database(); //Se conecta a mongo
const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/administracion', adminRouter);
app.use('/clientes', clienteRouter);
app.use('/empresas', empresasRouter)
app.use('/motoristas', motoristasRouter)
app.use('/ordenes', ordenesRouter)
app.use('/productos', productosRouter)

app.listen(port, () =>
    console.log(`Servidor modificado https://localhost:${port}`));