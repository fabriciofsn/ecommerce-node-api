import { IDatasControle, KeysDatasControle } from "@shared/domain/datas.types";


enum TipoUsuario {
    CLIENTE = "CLIENTE",
    ADMINISTRADOR = "ADMINISTRADOR"
}


//Todos os atributos/propriedades que um usuário deve ter no sistema
//Auxilia na criação de invariantes e modelos ricos
interface IUsuario extends IDatasControle {
    id?: string;
    nome:string;
    email: string;
    senha: string;
    tipo: TipoUsuario
}

//Atributos que são necessários para criar um usuario
//Tipo representa um dos estados do ciclo de vida da entidade
//Garantir a integridade dos dados de um objeto
type CriarUsuarioProps = Omit<IUsuario, "id" | KeysDatasControle>;

//Atributos que são necessários para recuperar uma categoria
//Tipo representa um dos estados do ciclo de vida da entidade
type RecuperarUsuarioProps = IUsuario & {
    id: NonNullable<IUsuario['id']>
};

//Credenciais do Usuário
type CredenciaisUsuarioProps = Omit<IUsuario, "id" | "nome" | "tipo" | KeysDatasControle>;

export {
    IUsuario,
    CriarUsuarioProps,
    RecuperarUsuarioProps,
    TipoUsuario,
    CredenciaisUsuarioProps
}