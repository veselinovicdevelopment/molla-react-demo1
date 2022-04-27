export interface Product {
    id?: number;
    name?: string;
    slug?: string;
    price?: number;
    sale_price?: number;
    review?: number;
    ratings?: number;
    until?: string;
    stock?: number;
    top?: boolean;
    featured?: boolean;
    new?: boolean;
    short_desc?: boolean;
    category?: Array<{
        name?: string;
        slug?: string;
    }>;
    pictures?: Array<{
        width?: number;
        height?: number;
        url: number;
    }>;
    sm_pictures?: Array<{
        width?: number;
        height?: number;
        url?: number;
    }>;
    variants?: Array<{
        color?: string;
        color_name?: string;
        price?: number;
        size?: Array<{
            name?: string;
        }>;
    }>;
}

export interface CartItem extends Product {
    qty: number;
    sum: number;
}

export interface Post {
    id?: number;
    slug?: string;
    title?: string;
    author?: string;
    date?: string;
    content?: string;
    comments?: number;
    type?: string;
    blog_categories: Array<{
        name: string;
        slug: string;
    }>;
    image?: Array<{
        width?: number;
        height?: number;
        url?: string;
    }>;
}
