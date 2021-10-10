class Property {
    public position: number;
    public name: string | null;
    public value: string | null;
}

class Photo {
    public name: string;
    public content: string | null;
    public url: string | null;
}

export class Product {
    public url: string;
    public article: string;
    public name: string;
    public properties: Property[] = [];
    public photos: Photo[] = [];

    public addProperty(position: number, name: string | null, value: string | null = null): void {
        const property = new Property();
        property.position = position;
        property.name = name;
        property.value = value;
        this.properties.push(property);
    }

    public addPhoto(name: string, content: string | null = null, url: string | null = null): void {
        const photo = new Photo();
        photo.name = name;
        photo.content = content;
        photo.url = url;
        this.photos.push(photo);
    }

    public countProperties():number
    {
        return this.properties.length;
    }

    public countPhotos():number
    {
        return this.photos.length;
    }
}