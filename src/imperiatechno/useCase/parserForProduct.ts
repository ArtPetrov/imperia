import {Product} from "../models/product";
import {Page} from "playwright";

export default async function parserForProduct (page:Page):Promise<Product>{
    const product: Product = new Product();
    product.url = page.url();

    const name = await page.waitForSelector('div.item-header > h1');
    product.name = await name.textContent();

    const article = await page.waitForSelector('div.product-vendor > span.product-vendor__vendor');
    product.article = await article.textContent();

    const properties = await page.$$('ul.item-tab-specifications__list li');
    console.log(`Total count properties: ${properties.length}`);
    await Promise.all(properties.map(async (val, i) => {
            const name = await val.$('div.item-tab-specifications__type');
            const value = await val.$('div.item-tab-specifications__value');
            product.addProperty(i, await name.textContent(), await value.textContent());
        })
    );

    const photos = await page.$$('div.slider-big > img');
    const linkPhotos: string[] = [];
    console.log(`Total count photos: ${photos.length}`);
    await Promise.all(photos.map(async (val) => {
        linkPhotos.push(await val.getAttribute('src'));
    }));

    for await (const link of linkPhotos) {
        const photo = await page.goto(link);
        product.addPhoto(
            link.split('/').slice(-1)[0],
            Buffer.from(await photo.body()).toString('base64'),
            link
        )
    }
    return product;
}