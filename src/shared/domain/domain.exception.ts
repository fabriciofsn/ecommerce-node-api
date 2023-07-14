export class DomainException extends Error {
  constructor(message: string = "Exceção de domínio genérica") {
    super(message);
    this.name = "DomainException";
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}
