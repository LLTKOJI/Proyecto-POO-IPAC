import { Router, Request, Response } from 'express';
import { Cliente, ICliente } from '../models/clientes.model';
const router = Router();

// Obtener todos los clientes
router.get('/', async (req: Request, res: Response) => {
    try {
        const clientes: ICliente[] = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los clientes' });
    }
});

// Obtener un cliente por ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const cliente: ICliente | null = await Cliente.findById(req.params.id);
        if (!cliente) {
            res.status(404).json({ message: 'Cliente no encontrado' });
        } else {
            res.json(cliente);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el cliente' });
    }
});

// Crear un cliente
router.post('/', async (req: Request, res: Response) => {
    try {
        const cliente: ICliente = new Cliente(req.body);
        const clienteGuardado: ICliente = await cliente.save();
        res.json(clienteGuardado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el cliente' });
    }
});

// Actualizar un cliente por ID
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const cliente: ICliente | null = await Cliente.findById(req.params.id);
        if (!cliente) {
            res.status(404).json({ message: 'Cliente no encontrado' });
        } else {
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

            const clienteActualizado: ICliente = await cliente.save();
            res.json(clienteActualizado);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el cliente' });
    }
});

// Eliminar un cliente por ID
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const clienteEliminado: ICliente | null = await Cliente.findByIdAndDelete(req.params.id);
        if (!clienteEliminado) {
            res.status(404).json({ message: 'Cliente no encontrado' });
        } else {
            res.json(clienteEliminado);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el cliente' });
    }
});

// Buscar un usuario por correo electrónico y contraseña
router.get('/clientes/login', async (req: Request, res: Response) => {
    const { email, password } = req.query;

    try {
        const cliente = await Cliente.findOne({ email, password });
        if (!cliente) {
            return res.status(404).json({ message: 'Email o contraseña incorrectos' });
        }
        res.status(200).json(cliente);
    } catch (err) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

export default router;
