"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orden = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const ordenSchema = new mongoose_2.Schema({
    motorista: mongoose_1.default.Types.ObjectId,
    producto: mongoose_1.default.Types.ObjectId,
    cantidad: String,
    estado: String,
    ubicacion: String,
});
exports.Orden = (0, mongoose_2.model)('ordenes', ordenSchema);
