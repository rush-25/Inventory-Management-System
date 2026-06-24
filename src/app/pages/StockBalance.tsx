import { useAppContext } from '../store/AppContext';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Download, FileText, Printer, Search } from 'lucide-react';
import { useState } from 'react';

export function StockBalance() {
  const { products, categories, stockMovements } = useAppContext();
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.productCode.toLowerCase().includes(search.toLowerCase())
  );

  const handleExport = (type: string) => {
    alert(`Exporting as ${type}... (Mock functionality)`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Stock Balance</h1>
          <p className="text-slate-500 mt-1">Real-time inventory levels across all products.</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => handleExport('Excel')}>
            <FileText className="h-4 w-4 mr-2" />
            Excel
          </Button>
          <Button variant="outline" onClick={() => handleExport('PDF')}>
            <Download className="h-4 w-4 mr-2" />
            PDF
          </Button>
          <Button variant="outline" onClick={() => window.print()}>
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="p-4 border-b border-slate-100">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-900 uppercase font-medium">
                <tr>
                  <th className="px-6 py-4">Product Code</th>
                  <th className="px-6 py-4">Product Name</th>
                  <th className="px-6 py-4">Brand</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4 text-center">Total In</th>
                  <th className="px-6 py-4 text-center">Total Out</th>
                  <th className="px-6 py-4 text-center">Balance</th>
                  <th className="px-6 py-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredProducts.map(product => {
                  const cat = categories.find(c => c.id === product.categoryId);
                  const totalIn = stockMovements.filter(m => m.productId === product.id && m.type === 'IN').reduce((acc, curr) => acc + curr.quantity, 0);
                  const totalOut = stockMovements.filter(m => m.productId === product.id && m.type === 'OUT').reduce((acc, curr) => acc + curr.quantity, 0);
                  
                  let statusBadge = <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">Good Stock</span>;
                  if (product.stockQuantity === 0) {
                    statusBadge = <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Out of Stock</span>;
                  } else if (product.stockQuantity <= product.reorderLevel) {
                    statusBadge = <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">Low Stock</span>;
                  }

                  return (
                    <tr key={product.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">{product.productCode}</td>
                      <td className="px-6 py-4">{product.name}</td>
                      <td className="px-6 py-4">{product.brand}</td>
                      <td className="px-6 py-4">{cat?.name}</td>
                      <td className="px-6 py-4 text-center text-blue-600">{totalIn}</td>
                      <td className="px-6 py-4 text-center text-amber-600">{totalOut}</td>
                      <td className="px-6 py-4 text-center font-bold text-slate-900">{product.stockQuantity}</td>
                      <td className="px-6 py-4 text-center">{statusBadge}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
