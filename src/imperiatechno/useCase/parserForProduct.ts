import {Product} from "../models/product";
import {Page} from "playwright";

export default async function parserForProduct (page:Page):Promise<Product>{
    const product: Product = new Product();
    product.url = page.url();

    const name = await page.waitForSelector('div.product_page_wrapper > h1');
    product.name = await name.textContent();

    const article = await page.waitForSelector('div.spec_info > div.art > span');
    product.article = await article.textContent();

    const properties = await page.$$('table.char_table tr');
    console.log(`Total count properties: ${properties.length}`);
    await Promise.all(properties.map(async (val, i) => {
            const name = await val.$('td:nth-child(1)');
            const value = await val.$('td:nth-child(2)');
            product.addProperty(i, await name.textContent(), await value.textContent());
        })
    );

    const photos = await page.$$('a.fancybox');
    const linkPhotos: string[] = [];
    console.log(`Total count photos: ${photos.length}`);
    await Promise.all(photos.map(async (val) => {
        linkPhotos.push(`https://www.imperiatechno.ru/${await val.getAttribute('href')}`);
    }));

    for await (const link of linkPhotos) {
        const photo = await page.goto(link);
        product.addPhoto(
            link.split('/').slice(-1)[0],
            Buffer.from(await photo.body()).toString('base64')
        )
    }
    return product;
}