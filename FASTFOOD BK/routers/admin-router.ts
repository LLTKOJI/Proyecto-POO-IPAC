import { Request, Response, Router } from "express";
import { Admin, IAdmin } from "../models/admin.model";

const router = Router();

// Crear un nuevo administrador
router.post('/', async (req: Request, res: Response) => {
    const { nombreUsuario, contrasenia } = req.body;

    try {
        const nuevoAdmin: IAdmin = await Admin.create({ nombreUsuario, contrasenia });
        res.json(nuevoAdmin);
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Obtener todos los administradores
router.get('/', async (_req: Request, res: Response) => {
    try {
        const admins = await Admin.find({}, '-__v');
        res.json(admins);
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Verificar si un administrador existe
router.post('/verificar', async (req: Request, res: Response) => {
    const { nombreUsuario, contrasenia } = req.body;

    try {
        const admin = await Admin.findOne({ nombreUsuario, contrasenia }, '-__v');
        if (admin) {
            res.json({ message: 'El administrador existe' });
        } else {
            res.status(404).json({ message: 'El administrador no existe' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Verificar credenciales de administrador
router.post('/login', async (req: Request, res: Response) => {
    const { nombreUsuario, contrasenia } = req.body;

    try {
        const admin = await Admin.findOne({ nombreUsuario: nombreUsuario });

        if (!admin || admin.contrasenia !== contrasenia) {
            return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos' });
        }

        res.json({ message: 'Inicio de sesión exitoso' });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});


export default router;
