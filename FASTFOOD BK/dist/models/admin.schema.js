"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admins = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const esquema = new mongoose_1.default.Schema({
    nombreUsuario: String,
    contrasenia: String,
});
exports.Admins = mongoose_1.default.model('administracion', esquema);
