"use client"

import { useState } from "react"
import Image from "next/image"
import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { User, ShoppingBag, Heart, LogOut, Edit, CreditCard } from "lucide-react"

// Sample data
const orders = [
  { id: "ORD-001", date: "2023-03-15", status: "Delivered", total: 78.99, items: 3 },
  { id: "ORD-002", date: "2023-03-28", status: "Processing", total: 124.5, items: 5 },
  { id: "ORD-003", date: "2023-04-05", status: "Shipped", total: 43.25, items: 2 },
]

const wishlistItems = [
  {
    id: "1",
    name: "Premium Notebook",
    price: 12.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "2",
    name: "Colorful Pen Set",
    price: 8.49,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "3",
    name: "Geometric Pencil Case",
    price: 15.99,
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function CustomerPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (123) 456-7890",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Save profile data
    console.log("Saving profile:", profileData)
    alert("Profile updated successfully!")
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold">
                    {profileData.firstName} {profileData.lastName}
                  </h2>
                  <p className="text-sm text-gray-500">{profileData.email}</p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-1">
              <button
                onClick={() => setActiveTab("profile")}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === "profile" ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <User className="mr-3 h-5 w-5" />
                My Profile
              </button>

              <button
                onClick={() => setActiveTab("orders")}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === "orders" ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <ShoppingBag className="mr-3 h-5 w-5" />
                My Orders
              </button>

              <button
                onClick={() => setActiveTab("wishlist")}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === "wishlist" ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Heart className="mr-3 h-5 w-5" />
                Wishlist
              </button>

              <button
                onClick={() => setActiveTab("payment")}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === "payment" ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <CreditCard className="mr-3 h-5 w-5" />
                Payment Methods
              </button>

              <button className="w-full flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100">
                <LogOut className="mr-3 h-5 w-5" />
                Logout
              </button>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {activeTab === "profile" && (
              <Card>
                <CardHeader>
                  <CardTitle>My Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First Name
                        </label>
                        <Input id="firstName" name="firstName" value={profileData.firstName} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last Name
                        </label>
                        <Input id="lastName" name="lastName" value={profileData.lastName} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" name="email" type="email" value={profileData.email} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone
                        </label>
                        <Input id="phone" name="phone" type="tel" value={profileData.phone} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="address" className="text-sm font-medium">
                        Address
                      </label>
                      <Input id="address" name="address" value={profileData.address} onChange={handleChange} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="city" className="text-sm font-medium">
                          City
                        </label>
                        <Input id="city" name="city" value={profileData.city} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="state" className="text-sm font-medium">
                          State
                        </label>
                        <Input id="state" name="state" value={profileData.state} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="zipCode" className="text-sm font-medium">
                          ZIP Code
                        </label>
                        <Input id="zipCode" name="zipCode" value={profileData.zipCode} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button type="submit">Save Changes</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {activeTab === "orders" && (
              <Card>
                <CardHeader>
                  <CardTitle>My Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  {orders.length > 0 ? (
                    <div className="space-y-6">
                      {orders.map((order) => (
                        <div key={order.id} className="border rounded-lg p-4">
                          <div className="flex flex-col md:flex-row justify-between mb-4">
                            <div>
                              <h3 className="font-medium">Order #{order.id}</h3>
                              <p className="text-sm text-gray-500">Placed on {order.date}</p>
                            </div>
                            <div className="mt-2 md:mt-0">
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
                            </div>
                          </div>

                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div>
                              <p className="text-sm">{order.items} items</p>
                              <p className="font-medium">${order.total.toFixed(2)}</p>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900">No orders yet</h3>
                      <p className="mt-1 text-gray-500">When you place an order, it will appear here.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {activeTab === "wishlist" && (
              <Card>
                <CardHeader>
                  <CardTitle>My Wishlist</CardTitle>
                </CardHeader>
                <CardContent>
                  {wishlistItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {wishlistItems.map((item) => (
                        <div key={item.id} className="border rounded-lg overflow-hidden">
                          <div className="relative h-48 w-full">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-primary font-bold mt-1">${item.price.toFixed(2)}</p>
                            <div className="flex gap-2 mt-4">
                              <Button size="sm" className="flex-1">
                                Add to Cart
                              </Button>
                              <Button size="sm" variant="outline" className="p-2">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900">Your wishlist is empty</h3>
                      <p className="mt-1 text-gray-500">Save items you like to your wishlist.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {activeTab === "payment" && (
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-gray-100 p-2 rounded-md">
                          <CreditCard className="h-6 w-6 text-gray-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-medium">Visa ending in 4242</h3>
                          <p className="text-sm text-gray-500">Expires 12/25</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Add Payment Method
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

