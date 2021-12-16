"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const express_1 = require("express");
const user_list_1 = require("./controllers/user-list");
const api = (0, express_1.Router)();
exports.api = api;
api.get('/all', user_list_1.allUsers);
//# sourceMappingURL=routes.js.map