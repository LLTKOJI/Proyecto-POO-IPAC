"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motorista = void 0;
const mongoose_1 = require("mongoose");
const motoristaSchema = new mongoose_1.Schema({
    nombres: String,
    apellidos: String,
    email: String,
    password: String,
    fechaNacimiento: String,
    genero: String,
    ciudad: String,
    telefono: String,
    modeloMoto: String,
    placa: String,
    aprobado: String,
});
exports.Motorista = (0, mongoose_1.model)('motoristas', motoristaSchema);
