"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const admin_router_1 = __importDefault(require("./routers/admin-router"));
const clientes_router_1 = __importDefault(require("./routers/clientes-router"));
const empresas_router_1 = __importDefault(require("./routers/empresas.router"));
const motoristas_router_1 = __importDefault(require("./routers/motoristas-router"));
const ordenes_router_1 = __importDefault(require("./routers/ordenes-router"));
const productos_router_1 = __importDefault(require("./routers/productos-router"));
const database_1 = require("./modules/database");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const database = new database_1.Database(); //Se conecta a mongo
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/administracion', admin_router_1.default);
app.use('/clientes', clientes_router_1.default);
app.use('/empresas', empresas_router_1.default);
app.use('/motoristas', motoristas_router_1.default);
app.use('/ordenes', ordenes_router_1.default);
app.use('/productos', productos_router_1.default);
app.listen(port, () => console.log(`Servidor modificado https://localhost:${port}`));
