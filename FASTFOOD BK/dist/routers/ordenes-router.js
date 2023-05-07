"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ordenes_model_1 = require("../models/ordenes.model");
const router = express_1.default.Router();
// Crear una nueva orden
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { motorista, producto, cantidad, estado, ubicacion } = req.body;
    try {
        const nuevaOrden = new ordenes_model_1.Orden({ motorista, producto, cantidad, estado, ubicacion });
        yield nuevaOrden.save();
        res.json(nuevaOrden);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
}));
// Buscar una orden por ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orden = yield ordenes_model_1.Orden.findById(req.params.id);
        if (!orden) {
            return res.status(404).json({ msg: 'Orden no encontrada' });
        }
        res.json(orden);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
}));
// Actualizar una orden por ID
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { motorista, producto, cantidad, estado, ubicacion } = req.body;
    try {
        const ordenActualizada = yield ordenes_model_1.Orden.findByIdAndUpdate(req.params.id, { motorista, producto, cantidad, estado, ubicacion }, { new: true });
        if (!ordenActualizada) {
            return res.status(404).json({ msg: 'Orden no encontrada' });
        }
        res.json(ordenActualizada);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
}));
// Eliminar una orden por ID
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ordenEliminada = yield ordenes_model_1.Orden.findByIdAndDelete(req.params.id);
        if (!ordenEliminada) {
            return res.status(404).json({ msg: 'Orden no encontrada' });
        }
        res.json({ msg: 'Orden eliminada correctamente' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
}));
exports.default = router;
