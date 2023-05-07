import { Router, Request, Response } from 'express';
import { Empresa, IEmpresa } from '../models/empresas.model';

const router = Router();

// Obtener todas las empresas
router.get('/', async (req: Request, res: Response) => {
    try {
        const empresas: IEmpresa[] = await Empresa.find();
        res.json(empresas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las empresas' });
    }
});

// Obtener una empresa por ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const empresa: IEmpresa | null = await Empresa.findById(req.params.id);
        if (!empresa) {
            res.status(404).json({ message: 'Empresa no encontrada' });
        } else {
            res.json(empresa);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener la empresa' });
    }
});

// Crear una empresa
router.post('/', async (req: Request, res: Response) => {
    try {
        const empresa: IEmpresa = new Empresa(req.body);
        const empresaGuardada: IEmpresa = await empresa.save();
        res.json(empresaGuardada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear la empresa' });
    }
});

// Actualizar una empresa por ID
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const empresa: IEmpresa | null = await Empresa.findById(req.params.id);
        if (!empresa) {
            res.status(404).json({ message: 'Empresa no encontrada' });
        } else {
            empresa.nombre = req.body.nombre;
            empresa.categoria = req.body.categoria;
            empresa.logo = req.body.logo;
            empresa.ubicacion = req.body.ubicacion;

            const empresaActualizada: IEmpresa = await empresa.save();
            res.json(empresaActualizada);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar la empresa' });
    }
});

// Eliminar una empresa por ID
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const empresaEliminada: IEmpresa | null = await Empresa.findByIdAndDelete(req.params.id);
        if (!empresaEliminada) {
            res.status(404).json({ message: 'Empresa no encontrada' });
        } else {
            res.json(empresaEliminada);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar la empresa' });
    }
});

// Agregar una ubicación a una empresa por ID
router.post('/:id/ubicaciones', async (req: Request, res: Response) => {
    try {
        const empresa: IEmpresa | null = await Empresa.findById(req.params.id);
        if (!empresa) {
            res.status(404).json({ message: 'Empresa no encontrada' });
        } else {
            empresa.ubicacion.push(req.body.ubicacion);
            const empresaActualizada: IEmpresa = await empresa.save();
            res.json(empresaActualizada);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al agregar la ubicación a la empresa' });
    }
});

// Eliminar una ubicación de una empresa por ID
router.delete('/:id/ubicaciones/:ubicacionId', async (req: Request, res: Response) => {
    try {
        const empresa: IEmpresa | null = await Empresa.findById(req.params.id);
        if (!empresa) {
            res.status(404).json({ message: 'Empresa no encontrada' });
        } else {
            const ubicacionIndex = empresa.ubicacion.findIndex(ubicacion => ubicacion === req.params.ubicacionId);
            if (ubicacionIndex === -1) {
                res.status(404).json({ message: 'Ubicación no encontrada' });
            } else {
                empresa.ubicacion.splice(ubicacionIndex, 1);
                const empresaActualizada: IEmpresa = await empresa.save();
                res.json(empresaActualizada);
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar la ubicación de la empresa' });
    }
});


export default router;
