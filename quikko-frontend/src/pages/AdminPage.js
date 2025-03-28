"use client"

import { useState } from "react"
import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Users,
  Package,
  DollarSign,
  TrendingUp,
  ShoppingBag,
  Settings,
  LogOut,
  PlusCircle,
  Search,
  Edit,
  Trash2,
  BarChart2,
} from "lucide-react"

// Sample data
const orders = [
  { id: "ORD-001", customer: "John Doe", date: "2023-03-15", status: "Delivered", total: 78.99 },
  { id: "ORD-002", customer: "Jane Smith", date: "2023-03-16", status: "Processing", total: 124.5 },
  { id: "ORD-003", customer: "Robert Johnson", date: "2023-03-16", status: "Shipped", total: 43.25 },
  { id: "ORD-004", customer: "Emily Davis", date: "2023-03-17", status: "Processing", total: 65.75 },
  { id: "ORD-005", customer: "Michael Brown", date: "2023-03-17", status: "Pending", total: 92.3 },
]

const products = [
  { id: "PRD-001", name: "Premium Notebook", stock: 45, price: 12.99, category: "Notebooks" },
  { id: "PRD-002", name: "Colorful Pen Set", stock: 78, price: 8.49, category: "Pens" },
  { id: "PRD-003", name: "Geometric Pencil Case", stock: 23, price: 15.99, category: "Accessories" },
  { id: "PRD-004", name: "Watercolor Paint Set", stock: 12, price: 24.99, category: "Art Supplies" },
  { id: "PRD-005", name: "Mechanical Pencil Pack", stock: 56, price: 6.99, category: "Pencils" },
]

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-gray-100 border-r">
          <div className="p-4">
            <h2 className="text-xl font-bold text-primary mb-6">Admin Panel</h2>
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === "dashboard" ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                <BarChart2 className="mr-3 h-5 w-5" />
                Dashboard
              </button>

              <button
                onClick={() => setActiveTab("products")}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === "products" ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Package className="mr-3 h-5 w-5" />
                Products
              </button>

              <button
                onClick={() => setActiveTab("orders")}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === "orders" ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                <ShoppingBag className="mr-3 h-5 w-5" />
                Orders
              </button>

              <button
                onClick={() => setActiveTab("customers")}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === "customers" ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Users className="mr-3 h-5 w-5" />
                Customers
              </button>

              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === "settings" ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </button>

              <button className="w-full flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-200">
                <LogOut className="mr-3 h-5 w-5" />
                Logout
              </button>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6 overflow-auto">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

              {/* Stats cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <DollarSign className="h-6 w-6 text-primary" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                        <h3 className="text-2xl font-bold text-gray-900">$12,426</h3>
                        <p className="text-xs text-green-600 flex items-center mt-1">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          +12.5% from last month
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <ShoppingBag className="h-6 w-6 text-primary" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Total Orders</p>
                        <h3 className="text-2xl font-bold text-gray-900">156</h3>
                        <p className="text-xs text-green-600 flex items-center mt-1">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          +8.2% from last month
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Package className="h-6 w-6 text-primary" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Products</p>
                        <h3 className="text-2xl font-bold text-gray-900">48</h3>
                        <p className="text-xs text-green-600 flex items-center mt-1">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          +4 new this month
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Customers</p>
                        <h3 className="text-2xl font-bold text-gray-900">1,245</h3>
                        <p className="text-xs text-green-600 flex items-center mt-1">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          +18.3% from last month
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent orders */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" className="px-4 py-3">
                            Order ID
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Customer
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Date
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Status
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Total
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order) => (
                          <tr key={order.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium">{order.id}</td>
                            <td className="px-4 py-3">{order.customer}</td>
                            <td className="px-4 py-3">{order.date}</td>
                            <td className="px-4 py-3">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  order.status === "Delivered"
                                    ? "bg-green-100 text-green-800"
                                    : order.status === "Shipped"
                                      ? "bg-blue-100 text-blue-800"
                                      : order.status === "Processing"
                                        ? "bg-yellow-100 text-yellow-800"
                                        : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {order.status}
                              </span>
                            </td>
                            <td className="px-4 py-3">${order.total.toFixed(2)}</td>
                            <td className="px-4 py-3">
                              <div className="flex items-center space-x-2">
                                <button className="text-blue-600 hover:text-blue-900">
                                  <Edit className="h-4 w-4" />
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "products" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Products</h1>
                <Button className="flex items-center gap-2">
                  <PlusCircle className="h-4 w-4" />
                  Add Product
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <select
                  className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  defaultValue="all"
                >
                  <option value="all">All Categories</option>
                  <option value="notebooks">Notebooks</option>
                  <option value="pens">Pens</option>
                  <option value="accessories">Accessories</option>
                  <option value="art">Art Supplies</option>
                </select>
              </div>

              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" className="px-4 py-3">
                            ID
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Product
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Category
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Stock
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Price
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product) => (
                          <tr key={product.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium">{product.id}</td>
                            <td className="px-4 py-3">{product.name}</td>
                            <td className="px-4 py-3">{product.category}</td>
                            <td className="px-4 py-3">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  product.stock > 50
                                    ? "bg-green-100 text-green-800"
                                    : product.stock > 20
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-red-100 text-red-800"
                                }`}
                              >
                                {product.stock}
                              </span>
                            </td>
                            <td className="px-4 py-3">${product.price.toFixed(2)}</td>
                            <td className="px-4 py-3">
                              <div className="flex items-center space-x-2">
                                <button className="text-blue-600 hover:text-blue-900">
                                  <Edit className="h-4 w-4" />
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-gray-900">Orders</h1>

              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input type="text" placeholder="Search orders..." className="pl-10" />
                </div>
                <select
                  className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  defaultValue="all"
                >
                  <option value="all">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                </select>
              </div>

              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" className="px-4 py-3">
                            Order ID
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Customer
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Date
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Status
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Total
                          </th>
                          <th scope="col" className="px-4 py-3">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order) => (
                          <tr key={order.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium">{order.id}</td>
                            <td className="px-4 py-3">{order.customer}</td>
                            <td className="px-4 py-3">{order.date}</td>
                            <td className="px-4 py-3">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  order.status === "Delivered"
                                    ? "bg-green-100 text-green-800"
                                    : order.status === "Shipped"
                                      ? "bg-blue-100 text-blue-800"
                                      : order.status === "Processing"
                                        ? "bg-yellow-100 text-yellow-800"
                                        : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {order.status}
                              </span>
                            </td>
                            <td className="px-4 py-3">${order.total.toFixed(2)}</td>
                            <td className="px-4 py-3">
                              <div className="flex items-center space-x-2">
                                <button className="text-blue-600 hover:text-blue-900">
                                  <Edit className="h-4 w-4" />
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "customers" && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-gray-900">Customers</h1>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input type="text" placeholder="Search customers..." className="pl-10" />
              </div>

              <Card>
                <CardContent className="p-6">
                  <p className="text-center text-gray-500">Customer management interface coming soon...</p>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

              <Card>
                <CardHeader>
                  <CardTitle>Store Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="storeName" className="text-sm font-medium">
                      Store Name
                    </label>
                    <Input id="storeName" defaultValue="Quikko Stationery" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="storeEmail" className="text-sm font-medium">
                      Store Email
                    </label>
                    <Input id="storeEmail" type="email" defaultValue="support@quikko.com" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="storePhone" className="text-sm font-medium">
                      Store Phone
                    </label>
                    <Input id="storePhone" type="tel" defaultValue="+1 (123) 456-7890" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="storeAddress" className="text-sm font-medium">
                      Store Address
                    </label>
                    <Input id="storeAddress" defaultValue="123 Stationery St, School District" />
                  </div>

                  <div className="pt-4">
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

