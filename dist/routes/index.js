"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerIndex = void 0;
const express_1 = require("express");
const index_controller_1 = __importDefault(require("../controllers/index.controller"));
class RoutesApp {
    constructor() {
        this.router = express_1.Router();
        this.router.get("/", index_controller_1.default.index);
    }
}
exports.routerIndex = new RoutesApp();
