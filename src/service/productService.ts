import {ProductPro} from "../entity/product";
import {AppDataSource} from "../data-source";

class ProductService {
    private productRepository;
    constructor() {
        this.productRepository = AppDataSource.getRepository(ProductPro);
    }

    getAll = async () => {
        let products = await this.productRepository.find();
        return products;
    }

    add = async (product) => {
        let result = await this.productRepository.save(product);
        return result;
    }

    deleteProduct = async (id) =>{
        let result = await this.productRepository.delete(id);
        return result;
    }
    update = async (id, data) => {
        return await this.productRepository.update(id, data);
    }


}

export default new ProductService();
