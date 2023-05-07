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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientes_model_1 = require("../models/clientes.model");
const router = (0, express_1.Router)();
// Obtener todos los clientes
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientes = yield clientes_model_1.Cliente.find();
        res.json(clientes);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los clientes' });
    }
}));
// Obtener un cliente por ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cliente = yield clientes_model_1.Cliente.findById(req.params.id);
        if (!cliente) {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
        else {
            res.json(cliente);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el cliente' });
    }
}));
// Crear un cliente
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cliente = new clientes_model_1.Cliente(req.body);
        const clienteGuardado = yield cliente.save();
        res.json(clienteGuardado);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el cliente' });
    }
}));
// Actualizar un cliente por ID
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cliente = yield clientes_model_1.Cliente.findById(req.params.id);
        if (!cliente) {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
        else {
            cliente.nombre = req.body.nombre;
            cliente.apellido = req.body.apellido;
            cliente.email = req.body.email;
            cliente.password = req.body.password;
            cliente.fechaNacimiento = req.body.fechaNacimiento;
            cliente.genero = req.body.genero;
            cliente.ciudad = req.body.ciudad;
            cliente.telefono = req.body.telefono;
            cliente.tarjetas = req.body.tarjetas;
            cliente.orden = req.body.orden;
            const clienteActualizado = yield cliente.save();
            res.json(clienteActualizado);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el cliente' });
    }
}));
// Eliminar un cliente por ID
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clienteEliminado = yield clientes_model_1.Cliente.findByIdAndDelete(req.params.id);
        if (!clienteEliminado) {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
        else {
            res.json(clienteEliminado);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el cliente' });
    }
}));
// Buscar un usuario por correo electrónico y contraseña
router.get('/clientes/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.query;
    try {
        const cliente = yield clientes_model_1.Cliente.findOne({ email, password });
        if (!cliente) {
            return res.status(404).json({ message: 'Email o contraseña incorrectos' });
        }
        res.status(200).json(cliente);
    }
    catch (err) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
}));
exports.default = router;
