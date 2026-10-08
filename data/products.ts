export type Product = { sku: string; name: string; size: string; mrp: number; salePrice: number; image: string };

export const products: Product[] = [
  { sku: "HM-AMZ-017", name: "Gainer XXL", size: "1 KG", mrp: 1499, salePrice: 1199.2, image: "/products/HM-AMZ-017.svg" },
  { sku: "HM-AMZ-018", name: "Gainer XXL", size: "3 KG", mrp: 4499, salePrice: 3599.2, image: "/products/HM-AMZ-018.svg" },
  { sku: "HM-AMZ-020", name: "Huge Muscle", size: "1 KG", mrp: 1099, salePrice: 879.2, image: "/products/HM-AMZ-020.svg" },
  { sku: "HM-AMZ-019", name: "Huge Muscle", size: "2.72 KG", mrp: 2899, salePrice: 2319.2, image: "/products/HM-AMZ-019.svg" },
  { sku: "HM-AMZ-022", name: "Animal Mass Gainer", size: "1 KG", mrp: 1599, salePrice: 1279.2, image: "/products/HM-AMZ-022.svg" },
  { sku: "HM-AMZ-021", name: "Animal Mass Gainer", size: "2.72 KG", mrp: 4299, salePrice: 3439.2, image: "/products/HM-AMZ-021.svg" },
  { sku: "HM-AMZ-023", name: "Warrior Whey Isolate Protein", size: "1 KG", mrp: 4399, salePrice: 3519.2, image: "/products/HM-AMZ-023.svg" },
  { sku: "HM-AMZ-024", name: "Warrior Whey Isolate Protein", size: "2.27 KG", mrp: 9899, salePrice: 7919.2, image: "/products/HM-AMZ-024.svg" }
];
