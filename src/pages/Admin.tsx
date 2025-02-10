import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Analytics from "../components/admin/Analytics";
import ProductManagement from "../components/admin/products/ProductManagement";

const Admin = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("analytics");

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex flex-col sm:flex-row">
      {/* Sidebar */}
      <div className="sm:w-64 text-red-600 h-screen p-4 sm:block hidden">
        <h2 className="text-2xl font-semibold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          <li
            onClick={() => setActiveTab("analytics")}
            className={`cursor-pointer bg-gray-800 p-4 ${activeTab === "analytics" ? "text-white" : ""}`}
          >
            Analytics
          </li>
          <li
            onClick={() => setActiveTab("products")}
            className={`cursor-pointer bg-gray-800 p-4 ${activeTab === "products" ? "text-white" : ""}`}
          >
            Product Management
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Mobile view: Tabs side by side */}
        <div className="sm:hidden flex space-x-4 mb-4">
          <button
            onClick={() => setActiveTab("analytics")}
            className={`p-2 px-4 ${activeTab === "analytics" ? "bg-gray-800 text-white" : "bg-gray-200"}`}
          >
            Analytics
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`p-2 px-4 ${activeTab === "products" ? "bg-gray-800 text-white" : "bg-gray-200"}`}
          >
            Product Management
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === "analytics" && <Analytics />}
        {activeTab === "products" && <ProductManagement />}
      </div>
    </div>
  );
};

export default Admin;
