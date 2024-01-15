import { HttpErrors } from "@shared/presentation/http/http.error";
import { NextFunction, Request, Response } from "express";

const allowedContentTypes = ['application/json'];

function contentTypeMiddleware(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const contentType = request.headers['content-type'];

    if (!contentType || !allowedContentTypes.includes(contentType)) {
        next(new HttpErrors.UnsupportedMediaTypeError())
    }

    next();
}

export { contentTypeMiddleware }