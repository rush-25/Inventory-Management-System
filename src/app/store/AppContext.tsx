import { createContext, useContext, useState, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type Category = {
  id: string;
  name: string;
  description: string;
  status: 'Active' | 'Inactive';
  createdAt: string;
};

export type Supplier = {
  id: string;
  name: string;
  contactNumber: string;
  email: string;
  address: string;
  status: 'Active' | 'Inactive';
  createdAt: string;
};

export type Product = {
  id: string;
  productCode: string;
  barcode: string;
  name: string;
  brand: string;
  categoryId: string;
  supplierId: string;
  costPrice: number;
  sellingPrice: number;
  stockQuantity: number;
  reorderLevel: number;
  imageUrl: string;
  status: 'Active' | 'Inactive';
  createdAt: string;
};

export type StockMovement = {
  id: string;
  type: 'IN' | 'OUT';
  productId: string;
  quantity: number;
  date: string;
  reason?: string;
  remarks?: string;
  supplierId?: string;
  costPrice?: number;
};

interface AppState {
  categories: Category[];
  suppliers: Supplier[];
  products: Product[];
  stockMovements: StockMovement[];
}

interface AppContextType extends AppState {
  addCategory: (category: Omit<Category, 'id' | 'createdAt'>) => void;
  updateCategory: (id: string, category: Partial<Category>) => void;
  deleteCategory: (id: string) => void;
  
  addSupplier: (supplier: Omit<Supplier, 'id' | 'createdAt'>) => void;
  updateSupplier: (id: string, supplier: Partial<Supplier>) => void;
  deleteSupplier: (id: string) => void;
  
  addProduct: (product: Omit<Product, 'id' | 'createdAt'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  
  addStockMovement: (movement: Omit<StockMovement, 'id'>) => void;
}

const initialCategories: Category[] = [
  { id: 'c1', name: 'Smartphones', description: 'All mobile phones', status: 'Active', createdAt: '2023-01-15' },
  { id: 'c2', name: 'Tablets', description: 'iPads and Android tablets', status: 'Active', createdAt: '2023-01-16' },
  { id: 'c3', name: 'Smart Watches', description: 'Apple Watch, Galaxy Watch etc', status: 'Active', createdAt: '2023-01-17' },
  { id: 'c4', name: 'Chargers', description: 'Wall chargers and cables', status: 'Active', createdAt: '2023-01-18' },
  { id: 'c5', name: 'Earphones', description: 'Wired and wireless earphones', status: 'Active', createdAt: '2023-01-19' },
  { id: 'c6', name: 'Phone Cases', description: 'Protective cases', status: 'Active', createdAt: '2023-01-20' },
  { id: 'c7', name: 'Power Banks', description: 'Portable chargers', status: 'Active', createdAt: '2023-01-21' },
  { id: 'c8', name: 'Accessories', description: 'Other accessories', status: 'Active', createdAt: '2023-01-22' },
];

const initialSuppliers: Supplier[] = [
  { id: 's1', name: 'Apple Distribution', contactNumber: '+1 800-692-7753', email: 'dist@apple.com', address: 'Cupertino, CA', status: 'Active', createdAt: '2023-01-10' },
  { id: 's2', name: 'Samsung Electronics', contactNumber: '+1 800-726-7864', email: 'sales@samsung.com', address: 'Seoul, KR', status: 'Active', createdAt: '2023-01-11' },
  { id: 's3', name: 'TechWholesale Co.', contactNumber: '+1 555-0192', email: 'orders@techwholesale.com', address: 'New York, NY', status: 'Active', createdAt: '2023-01-12' },
];

const initialProducts: Product[] = [
  { id: 'p1', productCode: 'PRD-001', barcode: '8801234567890', name: 'iPhone 15 Pro Max', brand: 'Apple', categoryId: 'c1', supplierId: 's1', costPrice: 999, sellingPrice: 1199, stockQuantity: 45, reorderLevel: 10, imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=200&auto=format&fit=crop', status: 'Active', createdAt: '2023-10-01' },
  { id: 'p2', productCode: 'PRD-002', barcode: '8801234567891', name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', categoryId: 'c1', supplierId: 's2', costPrice: 950, sellingPrice: 1299, stockQuantity: 30, reorderLevel: 8, imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=200&auto=format&fit=crop', status: 'Active', createdAt: '2024-01-15' },
  { id: 'p3', productCode: 'PRD-003', barcode: '8801234567892', name: 'AirPods Pro 2nd Gen', brand: 'Apple', categoryId: 'c5', supplierId: 's1', costPrice: 150, sellingPrice: 249, stockQuantity: 15, reorderLevel: 20, imageUrl: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=200&auto=format&fit=crop', status: 'Active', createdAt: '2023-11-20' },
  { id: 'p4', productCode: 'PRD-004', barcode: '8801234567893', name: '20W USB-C Power Adapter', brand: 'Apple', categoryId: 'c4', supplierId: 's1', costPrice: 10, sellingPrice: 19, stockQuantity: 100, reorderLevel: 30, imageUrl: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=200&auto=format&fit=crop', status: 'Active', createdAt: '2023-05-10' },
  { id: 'p5', productCode: 'PRD-005', barcode: '8801234567894', name: 'Galaxy Watch 6', brand: 'Samsung', categoryId: 'c3', supplierId: 's2', costPrice: 200, sellingPrice: 299, stockQuantity: 5, reorderLevel: 10, imageUrl: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=200&auto=format&fit=crop', status: 'Active', createdAt: '2023-08-15' },
];

const initialStockMovements: StockMovement[] = [
  { id: 'sm1', type: 'IN', productId: 'p1', quantity: 50, date: '2023-10-01', supplierId: 's1', costPrice: 999, remarks: 'Initial Stock' },
  { id: 'sm2', type: 'OUT', productId: 'p1', quantity: 5, date: '2023-10-05', reason: 'Sale' },
  { id: 'sm3', type: 'IN', productId: 'p5', quantity: 10, date: '2023-08-15', supplierId: 's2', costPrice: 200, remarks: 'Initial Stock' },
  { id: 'sm4', type: 'OUT', productId: 'p5', quantity: 5, date: '2023-08-20', reason: 'Sale' },
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [suppliers, setSuppliers] = useState<Supplier[]>(initialSuppliers);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [stockMovements, setStockMovements] = useState<StockMovement[]>(initialStockMovements);

  const addCategory = (category: Omit<Category, 'id' | 'createdAt'>) => {
    setCategories([...categories, { ...category, id: uuidv4(), createdAt: new Date().toISOString() }]);
  };
  const updateCategory = (id: string, updated: Partial<Category>) => {
    setCategories(categories.map(c => c.id === id ? { ...c, ...updated } : c));
  };
  const deleteCategory = (id: string) => {
    setCategories(categories.filter(c => c.id !== id));
  };

  const addSupplier = (supplier: Omit<Supplier, 'id' | 'createdAt'>) => {
    setSuppliers([...suppliers, { ...supplier, id: uuidv4(), createdAt: new Date().toISOString() }]);
  };
  const updateSupplier = (id: string, updated: Partial<Supplier>) => {
    setSuppliers(suppliers.map(s => s.id === id ? { ...s, ...updated } : s));
  };
  const deleteSupplier = (id: string) => {
    setSuppliers(suppliers.filter(s => s.id !== id));
  };

  const addProduct = (product: Omit<Product, 'id' | 'createdAt'>) => {
    setProducts([...products, { ...product, id: uuidv4(), createdAt: new Date().toISOString() }]);
  };
  const updateProduct = (id: string, updated: Partial<Product>) => {
    setProducts(products.map(p => p.id === id ? { ...p, ...updated } : p));
  };
  const deleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const addStockMovement = (movement: Omit<StockMovement, 'id'>) => {
    setStockMovements([...stockMovements, { ...movement, id: uuidv4() }]);
    // Update product stock quantity
    const product = products.find(p => p.id === movement.productId);
    if (product) {
      const newQuantity = movement.type === 'IN' 
        ? product.stockQuantity + movement.quantity 
        : product.stockQuantity - movement.quantity;
      updateProduct(product.id, { stockQuantity: newQuantity });
    }
  };

  return (
    <AppContext.Provider value={{
      categories, suppliers, products, stockMovements,
      addCategory, updateCategory, deleteCategory,
      addSupplier, updateSupplier, deleteSupplier,
      addProduct, updateProduct, deleteProduct,
      addStockMovement
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
