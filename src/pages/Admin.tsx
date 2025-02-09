import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Analytics from "../components/admin/Analytics";
import ProductManagement from "../components/admin/products/ProductManagement";

const Admin = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("analytics"); // State to track which tab is active

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 text-red-600 h-screen p-4">
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
        {activeTab === "analytics" && <Analytics />}
        {activeTab === "products" && <ProductManagement />}
      </div>
    </div>
  );
};

export default Admin;
