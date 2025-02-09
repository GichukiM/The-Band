import InventoryStatus from "./InventoryStatus";
import ProductComparison from "./ProductComparison";
import SalesChart from "./SalesChart";

const Analytics = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard - Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
        <ProductComparison />
        <InventoryStatus />
        <SalesChart />
      </div>
    </div>
  );
};

export default Analytics;
