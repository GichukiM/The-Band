import { createContext, useContext, useState } from "react";

// Product Type
export type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  image: string;
};

// Context Type
type ProductContextType = {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (id: number, updatedProduct: Product) => void;
  deleteProduct: (id: number) => void;
};

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "T-Shirt", price: 20, stock: 10, description: "Comfortable cotton t-shirt", image: "/TheBand-MenTshirt.jpg" },
    { id: 2, name: "Smartwatch", price: 99, stock: 5, description: "High-tech smartwatch", image: "/TheBand-SmartWatch.jpg" },
  ]);

  // CRUD Operations
  const addProduct = (product: Product) => setProducts([...products, { ...product, id: Date.now() }]);
  const updateProduct = (id: number, updatedProduct: Product) =>
    setProducts(products.map((p) => (p.id === id ? updatedProduct : p)));
  const deleteProduct = (id: number) => setProducts(products.filter((p) => p.id !== id));

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useProduct must be used within a ProductProvider");
  return context;
};
