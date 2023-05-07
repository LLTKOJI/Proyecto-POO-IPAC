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
const productos_model_1 = require("../models/productos.model");
const router = express_1.default.Router();
// Obtener todos los productos
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productos = yield productos_model_1.Producto.find();
        res.json(productos);
    }
    catch (error) {
        res.status(500).json({ message: 'No se encontró el productos' });
    }
}));
// Crear un nuevo producto
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { empresa, nombre, descripcion, imagen, precio } = req.body;
    try {
        const nuevoProducto = new productos_model_1.Producto({ empresa, nombre, descripcion, imagen, precio });
        const productoGuardado = yield nuevoProducto.save();
        res.status(201).json(productoGuardado);
    }
    catch (error) {
        res.status(400).json({ message: 'No se encontró el producto' });
    }
}));
// Buscar productos por nombre
router.get('/nombre/:nombre', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nombreProducto = req.params.nombre;
    try {
        const productos = yield productos_model_1.Producto.find({ nombre: { $regex: nombreProducto, $options: 'i' } });
        res.json(productos);
    }
    catch (error) {
        res.status(500).json({ message: 'No se encontró el producto' });
    }
}));
// Buscar productos por empresa
router.get('/empresa/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idEmpresa = req.params.id;
    try {
        const productos = yield productos_model_1.Producto.find({ empresa: idEmpresa });
        res.json(productos);
    }
    catch (error) {
        res.status(500).json({ message: 'No se encontró el producto' });
    }
}));
// Actualizar un producto por ID
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { empresa, nombre, descripcion, imagen, precio } = req.body;
    try {
        const productoActualizado = yield productos_model_1.Producto.findByIdAndUpdate(req.params.id, { empresa, nombre, descripcion, imagen, precio }, { new: true });
        if (!productoActualizado) {
            return res.status(404).json({ message: 'No se encontró el producto' });
        }
        res.json(productoActualizado);
    }
    catch (error) {
        res.status(400).json({ message: 'No se encontró el producto' });
    }
}));
// Eliminar un producto por ID
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productoEliminado = yield productos_model_1.Producto.findByIdAndDelete(req.params.id);
        if (!productoEliminado) {
            return res.status(404).json({ message: 'No se encontró el producto' });
        }
        res.json(productoEliminado);
    }
    catch (error) {
        res.status(500).json({ message: 'No se encontró el producto' });
    }
}));
exports.default = router;
