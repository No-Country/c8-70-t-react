"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Product = class Product extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "user_id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "category_id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "price", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "image", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
    }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "created", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
    }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "modified", void 0);
Product = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            postgresql: { table: 'product' },
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Product);
exports.Product = Product;
//# sourceMappingURL=product.model.js.map