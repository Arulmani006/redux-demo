"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const port = process.env.PORT || 4000;
index_1.app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
//# sourceMappingURL=index.local.js.map