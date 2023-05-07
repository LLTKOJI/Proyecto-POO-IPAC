"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
const mongoose_1 = require("mongoose");
const empresaSchema = new mongoose_1.Schema({
    nombre: String,
    categoria: String,
    logo: String,
    ubicacion: [String],
});
exports.Empresa = (0, mongoose_1.model)('empresas', empresaSchema);
