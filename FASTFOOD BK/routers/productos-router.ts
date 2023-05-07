import express, { Request, Response } from 'express';
import { Producto, IProducto } from '../models/productos.model';

const router = express.Router();

// Obtener todos los productos
router.get('/', async (req: Request, res: Response) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: 'No se encontró el productos' });
    }
});


// Crear un nuevo producto
router.post('/', async (req: Request, res: Response) => {
    const { empresa, nombre, descripcion, imagen, precio } = req.body;

    try {
        const nuevoProducto: IProducto = new Producto({ empresa, nombre, descripcion, imagen, precio });
        const productoGuardado = await nuevoProducto.save();

        res.status(201).json(productoGuardado);
    } catch (error) {
        res.status(400).json({ message: 'No se encontró el producto' });
    }
});

// Buscar productos por nombre
router.get('/nombre/:nombre', async (req: Request, res: Response) => {
    const nombreProducto = req.params.nombre;

    try {
        const productos = await Producto.find({ nombre: { $regex: nombreProducto, $options: 'i' } });
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: 'No se encontró el producto' });
    }
});

// Buscar productos por empresa
router.get('/empresa/:id', async (req: Request, res: Response) => {
    const idEmpresa = req.params.id;

    try {
        const productos = await Producto.find({ empresa: idEmpresa });
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: 'No se encontró el producto' });
    }
});

// Actualizar un producto por ID
router.put('/:id', async (req: Request, res: Response) => {
    const { empresa, nombre, descripcion, imagen, precio } = req.body;

    try {
        const productoActualizado = await Producto.findByIdAndUpdate(
            req.params.id,
            { empresa, nombre, descripcion, imagen, precio },
            { new: true }
        );

        if (!productoActualizado) {
            return res.status(404).json({ message: 'No se encontró el producto' });
        }

        res.json(productoActualizado);
    } catch (error) {
        res.status(400).json({ message: 'No se encontró el producto' });
    }
});

// Eliminar un producto por ID
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const productoEliminado = await Producto.findByIdAndDelete(req.params.id);

        if (!productoEliminado) {
            return res.status(404).json({ message: 'No se encontró el producto' });
        }

        res.json(productoEliminado);
    } catch (error) {
        res.status(500).json({ message: 'No se encontró el producto' });
    }
});

export default router;
