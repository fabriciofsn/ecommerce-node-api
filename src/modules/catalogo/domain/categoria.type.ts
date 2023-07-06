//Todos os atributos/propriedades que uma categoria deve ter no sistema.
//Auxilia na crianção de invariantes e modelos ricos.

interface ICategoria {
  id: string;
  nome: string;
}

type CreateCategoryProps = Omit<ICategoria, "id">;

export { ICategoria, CreateCategoryProps };
