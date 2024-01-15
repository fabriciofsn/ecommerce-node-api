import { usuarioRepositorio } from "@modules/usuario/infra/database";
import { RegistrarUsuarioUseCase } from "./registrar-usuario/registrar-usuario.use-case";
import { AutenticarUsuarioUseCase } from "./autenticar-usuario/autenticar-usuario.use-case";

export const registrarUsuarioUseCase = new RegistrarUsuarioUseCase(usuarioRepositorio);
export const autenticarUsuarioUseCase = new AutenticarUsuarioUseCase(usuarioRepositorio);