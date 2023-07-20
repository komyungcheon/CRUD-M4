declare class ProductService {
    private productRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (product: any) => Promise<any>;
    deleteProduct: (id: any) => Promise<any>;
    update: (id: any, data: any) => Promise<any>;
}
declare const _default: ProductService;
export default _default;
