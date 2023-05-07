import express from 'express';
import { Orden, IOrden } from '../models/ordenes.model';

const router = express.Router();

// Crear una nueva orden
router.post('/', async (req, res) => {
  const { motorista, producto, cantidad, estado, ubicacion } = req.body;
  try {
    const nuevaOrden = new Orden({ motorista, producto, cantidad, estado, ubicacion });
    await nuevaOrden.save();
    res.json(nuevaOrden);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
});

// Buscar una orden por ID
router.get('/:id', async (req, res) => {
  try {
    const orden = await Orden.findById(req.params.id);
    if (!orden) {
      return res.status(404).json({ msg: 'Orden no encontrada' });
    }
    res.json(orden);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
});

// Actualizar una orden por ID
router.put('/:id', async (req, res) => {
  const { motorista, producto, cantidad, estado, ubicacion } = req.body;
  try {
    const ordenActualizada = await Orden.findByIdAndUpdate(req.params.id, { motorista, producto, cantidad, estado, ubicacion }, { new: true });
    if (!ordenActualizada) {
      return res.status(404).json({ msg: 'Orden no encontrada' });
    }
    res.json(ordenActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
});

// Eliminar una orden por ID
router.delete('/:id', async (req, res) => {
  try {
    const ordenEliminada = await Orden.findByIdAndDelete(req.params.id);
    if (!ordenEliminada) {
      return res.status(404).json({ msg: 'Orden no encontrada' });
    }
    res.json({ msg: 'Orden eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
});

export default router;
