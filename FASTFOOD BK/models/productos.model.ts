import { Document, Types } from 'mongoose';
import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';


export interface IProducto extends Document {
    empresa: string;
    nombre: string;
    descripcion: string;
    imagen: string;
    precio: number;
}

const ProductoSchema: Schema = new Schema({
    empresa: { type: String, required: true },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: { type: String, required: true },
    precio: { type: Number, required: true },
});

export const Producto = mongoose.model<IProducto>('Producto', ProductoSchema);
