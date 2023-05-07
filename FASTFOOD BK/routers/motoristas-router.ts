import { Router, Request, Response } from 'express';
import { Motorista, IMotorista } from '../models/motoristas.model';

const router = Router();

// Obtener todos los motoristas
router.get('/', async (req: Request, res: Response) => {
    try {
        const motoristas = await Motorista.find();
        res.json(motoristas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
});

// Obtener un motorista por ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const motorista = await Motorista.findById(req.params.id);
        if (!motorista) {
            return res.status(404).json({ msg: 'Motorista no encontrado' });
        }
        res.json(motorista);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
});

// Crear un nuevo motorista
router.post('/', async (req: Request, res: Response) => {
    const {
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
    }: IMotorista = req.body;
    try {
        const nuevoMotorista = new Motorista({
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
        const motoristaGuardado = await nuevoMotorista.save();
        res.json(motoristaGuardado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
});

// Actualizar un motorista por ID
router.put('/:id', async (req: Request, res: Response) => {
    const {
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
    }: IMotorista = req.body;
    try {
        const motoristaActualizado = await Motorista.findByIdAndUpdate(
            req.params.id,
            {
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
            },
            { new: true }
        );
        if (!motoristaActualizado) {
            return res.status(404).json({ msg: 'Motorista no encontrado' });
        }
        res.json(motoristaActualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
});

// Eliminar un motorista por ID
router.delete('/:id', async (req, res) => {
    try {
        const motoristaEliminado = await Motorista.findByIdAndDelete(req.params.id);
        if (!motoristaEliminado) {
            return res.status(404).json({ msg: 'Motorista no encontrado' });
        }
        res.json({ msg: 'Motorista eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
});

// Buscar un motorista por email y contraseña
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const motorista = await Motorista.findOne({ email, password });
        if (!motorista) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }
        res.json(motorista);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
});

export default router;
