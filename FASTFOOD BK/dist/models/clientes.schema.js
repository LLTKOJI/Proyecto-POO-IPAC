"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const mongoose_1 = require("mongoose");
const clienteSchema = new mongoose_1.Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    fechaNacimiento: String,
    genero: String,
    ciudad: String,
    telefono: String,
    tarjetas: [String],
    orden: [String]
});
exports.Cliente = (0, mongoose_1.model)('clientes', clienteSchema);
