import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';
import { IProducto } from './productos.model';

const productoSchema: Schema = new Schema({
    empresa: mongoose.Types.ObjectId,
    nombre: String,
    descripcion: String,
    imagen: String,
    precio: String,
});

export const Producto = model<IProducto>('productos', productoSchema);