import { CartItem, Product } from './types';

/**
 * get total Price of products in cart.
 * @param { Array } cartItems
 * @return { Float } totalPrice
 */
export const cartPriceTotal = (cartItems: CartItem[]): number => {
    return cartItems.reduce((acc, cur) => {
        return acc + cur.sum;
    }, 0);
};

/**
 * get number of products in cart
 * @param { Array } cartItems
 * @return { Integer } numbers of cart items in cartlist
 */
export const cartQtyTotal = (cartItems: CartItem[]): number => {
    return cartItems.reduce((acc, cur) => {
        return acc + cur.qty;
    }, 0);
};

/**
 * Decide where product is in cart.
 * @param { Array } cartItems
 * @param { Object } product
 */
export const isInCart = (cartItems: CartItem[], product: Product): boolean => {
    return cartItems.find((item) => item.id == product.id) ? true : false;
};

/**
 * Confirm if product could be added to cart.
 * @param { Array } cartItems
 * @param { Object } product
 * @param { Number } qty
 */
export const canAddToCart = (
    cartItems: CartItem[],
    product: Product,
    qty: number
): boolean => {
    let find = cartItems.find((item) => item.id == product.id);
    if (find) {
        if (product.stock == 0 || product.stock < find.qty + qty) return false;
        else return true;
    } else {
        if (product.stock == 0 || product.stock < qty) return false;
        else return true;
    }
};

/**
 *
 * @param {Array} wishlist
 * @param {Object} product
 */
export const isInWishlist = (
    wishlist: Product[],
    product: Product
): boolean => {
    return (
        product && wishlist.findIndex((item) => item.slug == product.slug) > -1
    );
};

/**
 *
 * @param {Array} compare
 * @param {Object} product
 */
export const isInCompare = (compare: Product[], product: Product): boolean => {
    return (
        product && compare.findIndex((item) => item.slug == product.slug) > -1
    );
};

/**
 * utils to detect safari browser
 * @return {bool}
 */
export const isSafariBrowser = (): boolean => {
    let sUsrAg = navigator.userAgent;
    if (sUsrAg.indexOf('Safari') !== -1 && sUsrAg.indexOf('Chrome') === -1)
        return true;
    return false;
};

/**
 * utils to detect Edge browser
 * @return {bool}
 */
export const isEdgeBrowser = (): boolean => {
    let sUsrAg = navigator.userAgent;
    if (sUsrAg.indexOf('Edge') > -1) return true;
    return false;
};

/**
 * get index of the element
 * @param {Element} element
 */
export const getIndex = (element: Element): number => {
    let children = element.parentElement!.children;
    for (let i = 0; i < children.length; i++) {
        if (element == children[i]) return i;
    }

    return 0;
};

/**
 * filter products by category.
 * @param {Array} products
 * @param {Array} category
 * @param {Boolean} flag
 */
export const catFilter = (
    products: Product[] = [],
    category: string[],
    flag = false
): Product[] => {
    if (category[0] === 'All') return products;

    return products.filter((item) => {
        for (let i = 0; i < category.length; i++) {
            if (item.category.find((cat) => cat.slug == category[i])) {
                if (!flag) return true;
            } else {
                if (flag) return false;
            }
        }

        if (flag) return true;
        else return false;
    });
};

/**
 * filter products by attribute
 * @param {Array} products
 * @param {String} attr
 */
export const attrFilter = (
    products: Product[] = [],
    attr: string
): Product[] => {
    return products.filter((item: Product) => {
        if (attr === 'all') {
            return true;
        }

        if (attr === 'sale' && item.sale_price) {
            return true;
        }

        if (attr === 'rated' && item.ratings > 3) {
            return true;
        }

        if (attr === 'until' && item.until) {
            return true;
        }

        return item[attr as keyof Product] === true;
    });
};

/**
 * Scrolling to Page content section
 */
export const scrollToPageContent = function () {
    let to =
        (document.querySelector('.page-content') as HTMLElement).offsetTop - 74;
    if (isSafariBrowser() || isEdgeBrowser()) {
        let pos = window.pageYOffset;
        let timerId = setInterval(() => {
            if (pos <= to) clearInterval(timerId);
            else {
                window.scrollBy(0, -120);
                pos -= 120;
            }
        }, 1);
    } else {
        window.scrollTo({
            top: to,
            behavior: 'smooth',
        });
    }
};

/**
 * utils to make background parallax
 */
export const parallax = () => {
    const parallax = document.querySelectorAll('.bg-parallax');

    for (let i = 0; i < parallax.length; i++) {
        let y = 0;
        if (parallax[i].classList.contains('header-parallax')) {
            y = ((10 - window.pageYOffset) * 47) / 900 + 50;
        } else {
            y =
                (((parallax[i] as HTMLElement).offsetTop - window.pageYOffset) *
                    47) /
                    (parallax[i] as HTMLElement).offsetTop +
                50;
        }

        (parallax[i] as HTMLElement).style.backgroundPositionY = y + '%';
    }
};

/**
 * utils to set count to in about-2
 */
export const countTo = () => {
    let items = document.querySelectorAll('.count');

    if (items) {
        for (let i = 0; i < items.length; i++) {
            let item: Element = items[i];
            let amount =
                parseInt(item.getAttribute('data-to') || '0', 10) -
                parseInt(item.getAttribute('data-from') || '0', 10);
            let time = parseInt(item.getAttribute('data-speed') || '300', 10);
            let interval = parseInt(
                item.getAttribute('data-refresh-interval') || '1000',
                10
            );
            let pt = 0;
            let height =
                item.parentElement?.parentElement?.parentElement?.offsetTop ||
                0;
            let flag = 0;

            document.addEventListener(
                'scroll',
                () => {
                    if (pt <= time && height >= window.pageYOffset) {
                        if (0 === flag) {
                            let timerId = setInterval(() => {
                                if (pt >= time) {
                                    clearInterval(timerId);
                                }

                                item.innerHTML = Math.floor(
                                    (pt * amount) / time
                                ).toString();
                                pt = pt + interval;
                            }, interval);
                        }

                        flag = 1;
                    }
                },
                true
            );
        }
    }
};

/**
 * Prevent Xss Attack
 * @param {string} html
 */
export function safeContent(html: string) {
    const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

    // Removing the <script> tags
    while (SCRIPT_REGEX.test(html)) {
        html = html.replace(SCRIPT_REGEX, '');
    }

    // Removing all events from tags...
    html = html.replace(/ on\w+="[^"]*"/g, '');

    return {
        __html: html,
    };
}
