"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allUsers = void 0;
const response_1 = __importDefault(require("../helper/response"));
const user_service_1 = __importDefault(require("../service/user-service"));
const allUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_service_1.default.userLists();
        return response_1.default.setSuccess(200, { message: users }).send(res);
    }
    catch (error) {
        console.log('get users error', error);
        return response_1.default.setError(500, 'Internal server error').send(res);
    }
});
exports.allUsers = allUsers;
//# sourceMappingURL=user-list.js.map