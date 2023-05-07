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
const motoristas_model_1 = require("../models/motoristas.model");
const router = (0, express_1.Router)();
// Obtener todos los motoristas
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const motoristas = yield motoristas_model_1.Motorista.find();
        res.json(motoristas);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
}));
// Obtener un motorista por ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const motorista = yield motoristas_model_1.Motorista.findById(req.params.id);
        if (!motorista) {
            return res.status(404).json({ msg: 'Motorista no encontrado' });
        }
        res.json(motorista);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
}));
// Crear un nuevo motorista
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombres, apellidos, email, password, fechaNacimiento, genero, ciudad, telefono, modeloMoto, placa, aprobado, } = req.body;
    try {
        const nuevoMotorista = new motoristas_model_1.Motorista({
            nombres,
            apellidos,
            email,
            password,
            fechaNacimiento,
            genero,
            ciudad,
            telefono,
            modeloMoto,
            placa,
            aprobado,
        });
        const motoristaGuardado = yield nuevoMotorista.save();
        res.json(motoristaGuardado);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
}));
// Actualizar un motorista por ID
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombres, apellidos, email, password, fechaNacimiento, genero, ciudad, telefono, modeloMoto, placa, aprobado, } = req.body;
    try {
        const motoristaActualizado = yield motoristas_model_1.Motorista.findByIdAndUpdate(req.params.id, {
            nombres,
            apellidos,
            email,
            password,
            fechaNacimiento,
            genero,
            ciudad,
            telefono,
            modeloMoto,
            placa,
            aprobado,
        }, { new: true });
        if (!motoristaActualizado) {
            return res.status(404).json({ msg: 'Motorista no encontrado' });
        }
        res.json(motoristaActualizado);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
}));
// Eliminar un motorista por ID
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const motoristaEliminado = yield motoristas_model_1.Motorista.findByIdAndDelete(req.params.id);
        if (!motoristaEliminado) {
            return res.status(404).json({ msg: 'Motorista no encontrado' });
        }
        res.json({ msg: 'Motorista eliminado correctamente' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
}));
// Buscar un motorista por email y contraseña
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const motorista = yield motoristas_model_1.Motorista.findOne({ email, password });
        if (!motorista) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }
        res.json(motorista);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
}));
exports.default = router;
