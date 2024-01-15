import { NextFunction, Request, Response } from "express";
import { z, ZodSchema } from "zod";

const InserirCategoriaSchema = z.object(
    {
        nome: z.string().min(3).max(50)
    }
).strict();

const validaInputInserirCategoriaMiddleware = (
    request: Request,
    response: Response,
    next: NextFunction) => {
        try {
            InserirCategoriaSchema.parse(request.body);
            next();
        } catch (error) {;
            next(error);
        }
}

export { validaInputInserirCategoriaMiddleware as validaInputInserirCategoria }