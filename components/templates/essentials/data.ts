export interface StoreProduct {
  id: string;
  name: string;
  type: string;
  category: string;
  price: number;
  stock: number;
  image: string;
}

export interface CategoryTile {
  name: string;
  image: string;
  count: number;
}

export const FEATURED_PRODUCTS: StoreProduct[] = [
  {
    id: "p1",
    name: "Heritage Tee",
    type: "T-Shirts",
    category: "Apparel",
    price: 3400,
    stock: 24,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "p2",
    name: "Everyday Hoodie",
    type: "Hoodies",
    category: "Apparel",
    price: 6900,
    stock: 12,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "p3",
    name: "Court Classic Sneaker",
    type: "Shoes",
    category: "Footwear",
    price: 14800,
    stock: 8,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "p4",
    name: "Slim Denim Jeans",
    type: "Jeans & Pants",
    category: "Apparel",
    price: 5600,
    stock: 0,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "p5",
    name: "Weekender Backpack",
    type: "Accessories",
    category: "Accoutrements",
    price: 7800,
    stock: 16,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
  },
];

export const CATEGORIES: CategoryTile[] = [
  {
    name: "T-Shirts",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=80",
    count: 42,
  },
  {
    name: "Hoodies",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=80",
    count: 18,
  },
  {
    name: "Jeans & Pants",
    image:
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=1200&q=80",
    count: 27,
  },
  {
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80",
    count: 35,
  },
  {
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=80",
    count: 11,
  },
];

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}