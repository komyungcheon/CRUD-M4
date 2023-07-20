"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../entity/product");
const data_source_1 = require("../data-source");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let products = await this.productRepository.find();
            return products;
        };
        this.add = async (product) => {
            let result = await this.productRepository.save(product);
            return result;
        };
        this.deleteProduct = async (id) => {
            let result = await this.productRepository.delete(id);
            return result;
        };
        this.update = async (id, data) => {
            return await this.productRepository.update(id, data);
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.ProductPro);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map