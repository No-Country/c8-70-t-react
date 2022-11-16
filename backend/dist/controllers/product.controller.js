"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductController = class ProductController {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async create(product) {
        product.created = Date();
        product.modified = Date();
        return this.productRepository.create(product);
    }
    async find(filter) {
        return this.productRepository.find(filter);
    }
    async findById(id, filter) {
        return this.productRepository.findById(id, filter);
    }
    async updateById(id, product) {
        product.modified = Date();
        await this.productRepository.updateById(id, product);
    }
    async deleteById(id) {
        await this.productRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/products'),
    (0, rest_1.response)(200, {
        description: 'Product model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Product) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Product, {
                    title: 'NewProduct',
                    exclude: ['id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/products'),
    (0, rest_1.response)(200, {
        description: 'Array of Product model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Product, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Product, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.get)('/products/{id}'),
    (0, rest_1.response)(200, {
        description: 'Product model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Product, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Product, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/products/{id}'),
    (0, rest_1.response)(204, {
        description: 'Product PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Product, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Product]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/products/{id}'),
    (0, rest_1.response)(204, {
        description: 'Product DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "deleteById", null);
ProductController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ProductRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProductRepository])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map