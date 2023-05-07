import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';
import { IOrden } from './ordenes.model';

const ordenSchema: Schema = new Schema({
    motorista: mongoose.Types.ObjectId,
    producto: mongoose.Types.ObjectId,
    cantidad: String,
    estado: String,
    ubicacion: String,
});

export const Orden = model<IOrden>('ordenes', ordenSchema);