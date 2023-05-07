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
const admin_model_1 = require("../models/admin.model");
const router = (0, express_1.Router)();
// Crear un nuevo administrador
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombreUsuario, contrasenia } = req.body;
    try {
        const nuevoAdmin = yield admin_model_1.Admin.create({ nombreUsuario, contrasenia });
        res.json(nuevoAdmin);
    }
    catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}));
// Obtener todos los administradores
router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admins = yield admin_model_1.Admin.find({}, '-__v');
        res.json(admins);
    }
    catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}));
// Verificar si un administrador existe
router.post('/verificar', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombreUsuario, contrasenia } = req.body;
    try {
        const admin = yield admin_model_1.Admin.findOne({ nombreUsuario, contrasenia }, '-__v');
        if (admin) {
            res.json({ message: 'El administrador existe' });
        }
        else {
            res.status(404).json({ message: 'El administrador no existe' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}));
// Verificar credenciales de administrador
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombreUsuario, contrasenia } = req.body;
    try {
        const admin = yield admin_model_1.Admin.findOne({ nombreUsuario: nombreUsuario });
        if (!admin || admin.contrasenia !== contrasenia) {
            return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos' });
        }
        res.json({ message: 'Inicio de sesión exitoso' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}));
exports.default = router;
