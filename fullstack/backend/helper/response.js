"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseStructure {
    constructor(statusCode, data, message) {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
    }
    setSuccess(statusCode, data) {
        this.statusCode = statusCode;
        this.data = data;
        this.success = true;
        return this;
    }
    setError(statusCode, message, data = {}) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = false;
        return this;
    }
    send(res) {
        if (this.success) {
            return res.status(this.statusCode).json(this.data);
        }
        return res.status(this.statusCode).json({
            error: this.message,
            data: this.data
        });
    }
}
exports.default = new ResponseStructure();
//# sourceMappingURL=response.js.map