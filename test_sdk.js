"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fs_1 = require("node:fs"); // o "fs"
var contenido = (0, node_fs_1.readFileSync)("./hola.txt", "utf-8");
console.log(contenido);
