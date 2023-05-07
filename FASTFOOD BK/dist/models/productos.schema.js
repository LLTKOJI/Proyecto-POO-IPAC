"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const productoSchema = new mongoose_2.Schema({
    empresa: mongoose_1.default.Types.ObjectId,
    nombre: String,
    descripcion: String,
    imagen: String,
    precio: String,
});
exports.Producto = (0, mongoose_2.model)('productos', productoSchema);
