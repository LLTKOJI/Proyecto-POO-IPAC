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
const empresas_model_1 = require("../models/empresas.model");
const router = (0, express_1.Router)();
// Obtener todas las empresas
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const empresas = yield empresas_model_1.Empresa.find();
        res.json(empresas);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las empresas' });
    }
}));
// Obtener una empresa por ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const empresa = yield empresas_model_1.Empresa.findById(req.params.id);
        if (!empresa) {
            res.status(404).json({ message: 'Empresa no encontrada' });
        }
        else {
            res.json(empresa);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener la empresa' });
    }
}));
// Crear una empresa
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const empresa = new empresas_model_1.Empresa(req.body);
        const empresaGuardada = yield empresa.save();
        res.json(empresaGuardada);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear la empresa' });
    }
}));
// Actualizar una empresa por ID
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const empresa = yield empresas_model_1.Empresa.findById(req.params.id);
        if (!empresa) {
            res.status(404).json({ message: 'Empresa no encontrada' });
        }
        else {
            empresa.nombre = req.body.nombre;
            empresa.categoria = req.body.categoria;
            empresa.logo = req.body.logo;
            empresa.ubicacion = req.body.ubicacion;
            const empresaActualizada = yield empresa.save();
            res.json(empresaActualizada);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar la empresa' });
    }
}));
// Eliminar una empresa por ID
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const empresaEliminada = yield empresas_model_1.Empresa.findByIdAndDelete(req.params.id);
        if (!empresaEliminada) {
            res.status(404).json({ message: 'Empresa no encontrada' });
        }
        else {
            res.json(empresaEliminada);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar la empresa' });
    }
}));
// Agregar una ubicación a una empresa por ID
router.post('/:id/ubicaciones', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const empresa = yield empresas_model_1.Empresa.findById(req.params.id);
        if (!empresa) {
            res.status(404).json({ message: 'Empresa no encontrada' });
        }
        else {
            empresa.ubicacion.push(req.body.ubicacion);
            const empresaActualizada = yield empresa.save();
            res.json(empresaActualizada);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al agregar la ubicación a la empresa' });
    }
}));
// Eliminar una ubicación de una empresa por ID
router.delete('/:id/ubicaciones/:ubicacionId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const empresa = yield empresas_model_1.Empresa.findById(req.params.id);
        if (!empresa) {
            res.status(404).json({ message: 'Empresa no encontrada' });
        }
        else {
            const ubicacionIndex = empresa.ubicacion.findIndex(ubicacion => ubicacion === req.params.ubicacionId);
            if (ubicacionIndex === -1) {
                res.status(404).json({ message: 'Ubicación no encontrada' });
            }
            else {
                empresa.ubicacion.splice(ubicacionIndex, 1);
                const empresaActualizada = yield empresa.save();
                res.json(empresaActualizada);
            }
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar la ubicación de la empresa' });
    }
}));
exports.default = router;
