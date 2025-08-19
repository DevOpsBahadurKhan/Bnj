"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFactory = void 0;
const Bottle_1 = require("./Bottle");
const Glass_1 = require("./Glass");
class ProductFactory {
    static makeProduct(type) {
        switch (type.toLowerCase().trim()) {
            case 'bottle': return new Bottle_1.Bottle();
            case 'glass': return new Glass_1.Glass();
            default:
                throw new Error(`Unknown product type: ${type}`);
        }
    }
}
exports.ProductFactory = ProductFactory;
