import { Usuario } from "@modules/usuario/domain/usuario.entity";
import { IUsuarioRepository } from "@modules/usuario/domain/usuario.repository.interface";
import { CriarUsuarioProps, IUsuario } from "@modules/usuario/domain/usuario.types";
import { UsuarioMap } from "@modules/usuario/infra/mappers/usuario.map";
import { IUseCase } from "@shared/application/use-case.interface";

class RegistrarUsuarioUseCase implements IUseCase<CriarUsuarioProps,IUsuario> {
    private _usuarioRepositorio: IUsuarioRepository<Usuario>;

    constructor(repositorio: IUsuarioRepository<Usuario>){
        this._usuarioRepositorio = repositorio;
    }

    async execute(usuarioProps: CriarUsuarioProps): Promise<IUsuario> {
       
        const usuario: Usuario = Usuario.criar(usuarioProps);

        const usuarioInserido = await this._usuarioRepositorio.inserir(usuario);

        return UsuarioMap.toDTO(usuarioInserido);
    }
}

export { RegistrarUsuarioUseCase }