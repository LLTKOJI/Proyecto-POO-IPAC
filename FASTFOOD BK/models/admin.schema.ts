import mongoose from "mongoose";
import { IAdmin } from "./admin.model";


const esquema = new mongoose.Schema<IAdmin>({
    nombreUsuario: String,
    contrasenia: String,
});

export const Admins = mongoose.model('administracion', esquema);