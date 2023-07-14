"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainException = void 0;
class DomainException extends Error {
    constructor(message = "Exceção de domínio genérica") {
        super(message);
        (this.name = "DomainException"), (this.message = message);
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.DomainException = DomainException;
//# sourceMappingURL=domain.exception.js.map