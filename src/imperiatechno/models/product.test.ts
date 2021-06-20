import {Product} from './product';

test('Product is valid object', async () => {
    const product:Product = new Product();
    product.article = 'article';
    product.name = 'name';
    product.url = 'link';
    product.addProperty(1,'Property', 'Val');
    product.addPhoto('name1.jpg');
    product.addPhoto('name2.jpg');
    expect(product).toBeInstanceOf(Product);
    expect(product.countProperties()).toBe(1);
    expect(product.countPhotos()).toBe(2);
});