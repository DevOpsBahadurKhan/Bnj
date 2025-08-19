"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Penguin = exports.Bird = void 0;
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log('Bird can fly...');
    };
    return Bird;
}());
exports.Bird = Bird;
var Penguin = /** @class */ (function (_super) {
    __extends(Penguin, _super);
    function Penguin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Penguin.prototype.fly = function () {
        throw new Error("Penguins can't fly!");
    };
    return Penguin;
}(Bird));
exports.Penguin = Penguin;
// Function expecting any bird
function letBirdFly(bird) {
    bird.fly(); // LSP assumption: any Bird can fly
}
var pigeon = new Bird();
var penguin = new Penguin();
letBirdFly(pigeon); // ✅ Works
letBirdFly(penguin); // ❌ Throws error — violates LSP
