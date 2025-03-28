"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"

// Sample cart data
const initialCartItems = [
  {
    id: "1",
    name: "Premium Notebook",
    price: 12.99,
    image: "/placeholder.svg?height=400&width=400",
    quantity: 2,
  },
  {
    id: "2",
    name: "Colorful Pen Set",
    price: 8.49,
    image: "/placeholder.svg?height=400&width=400",
    quantity: 1,
  },
  {
    id: "3",
    name: "Geometric Pencil Case",
    price: 15.99,
    image: "/placeholder.svg?height=400&width=400",
    quantity: 1,
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")
  const [promoApplied, setPromoApplied] = useState(false)

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  // Apply discount if promo code is applied
  const discount = promoApplied ? subtotal * 0.1 : 0 // 10% discount

  // Calculate shipping (free over $50)
  const shipping = subtotal > 50 ? 0 : 5.99

  // Calculate total
  const total = subtotal - discount + shipping

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  // Apply promo code
  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "school15") {
      setPromoApplied(true)
    } else {
      alert("Invalid promo code")
    }
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Items ({cartItems.reduce((total, item) => total + item.quantity, 0)})</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <li key={item.id} className="py-6 flex">
                        <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>

                        <div className="ml-4 flex-1 flex flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <Link href={`/products/${item.id}`} className="hover:text-primary">
                                  {item.name}
                                </Link>
                              </h3>
                              <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                          </div>

                          <div className="flex-1 flex items-end justify-between text-sm">
                            <div className="flex items-center border rounded-md">
                              <button
                                type="button"
                                className="p-2 text-gray-600 hover:text-primary"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="px-4 py-2">{item.quantity}</span>
                              <button
                                type="button"
                                className="p-2 text-gray-600 hover:text-primary"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>

                            <button
                              type="button"
                              className="font-medium text-red-600 hover:text-red-500"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href="/products">
                    <Button variant="outline" className="flex items-center gap-2">
                      <ShoppingBag className="h-4 w-4" />
                      Continue Shopping
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            {/* Order summary */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <p className="text-gray-600">Subtotal</p>
                      <p className="font-medium">${subtotal.toFixed(2)}</p>
                    </div>

                    {promoApplied && (
                      <div className="flex justify-between text-green-600">
                        <p>Discount (10%)</p>
                        <p>-${discount.toFixed(2)}</p>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <p className="text-gray-600">Shipping</p>
                      <p className="font-medium">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</p>
                    </div>

                    <div className="border-t pt-4 flex justify-between">
                      <p className="text-lg font-semibold">Total</p>
                      <p className="text-lg font-bold text-primary">${total.toFixed(2)}</p>
                    </div>

                    <div className="pt-4">
                      <p className="text-sm font-medium mb-2">Promo Code</p>
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          placeholder="Enter code"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          disabled={promoApplied}
                        />
                        <Button variant="outline" onClick={applyPromoCode} disabled={promoApplied || !promoCode}>
                          Apply
                        </Button>
                      </div>
                      {promoApplied && <p className="text-sm text-green-600 mt-2">Promo code applied successfully!</p>}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/checkout" className="w-full">
                    <Button className="w-full">Proceed to Checkout</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-block p-6 rounded-full bg-gray-100 mb-6">
              <ShoppingBag className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link href="/products">
              <Button size="lg">Start Shopping</Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  )
}

