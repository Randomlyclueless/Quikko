"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, CheckCircle } from "lucide-react"

// Sample cart data
const cartItems = [
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

// Calculate totals
const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
const shipping = 5.99
const tax = subtotal * 0.08
const total = subtotal + shipping + tax

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Shipping info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    // Payment info
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmitShipping = (e) => {
    e.preventDefault()
    setStep(2)
    window.scrollTo(0, 0)
  }

  const handleSubmitPayment = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false)
      setStep(3)
      window.scrollTo(0, 0)
    }, 2000)
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        {/* Checkout steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <div className={`flex items-center ${step >= 1 ? "text-primary" : "text-gray-400"}`}>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? "bg-primary text-white" : "bg-gray-200"}`}
              >
                1
              </div>
              <span className="ml-2 text-sm font-medium">Shipping</span>
            </div>
            <div className={`w-12 h-1 mx-2 ${step >= 2 ? "bg-primary" : "bg-gray-200"}`}></div>
            <div className={`flex items-center ${step >= 2 ? "text-primary" : "text-gray-400"}`}>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? "bg-primary text-white" : "bg-gray-200"}`}
              >
                2
              </div>
              <span className="ml-2 text-sm font-medium">Payment</span>
            </div>
            <div className={`w-12 h-1 mx-2 ${step >= 3 ? "bg-primary" : "bg-gray-200"}`}></div>
            <div className={`flex items-center ${step >= 3 ? "text-primary" : "text-gray-400"}`}>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? "bg-primary text-white" : "bg-gray-200"}`}
              >
                3
              </div>
              <span className="ml-2 text-sm font-medium">Confirmation</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main checkout form */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitShipping} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="address" className="text-sm font-medium">
                        Address
                      </label>
                      <Input id="address" name="address" value={formData.address} onChange={handleChange} required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="city" className="text-sm font-medium">
                          City
                        </label>
                        <Input id="city" name="city" value={formData.city} onChange={handleChange} required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="state" className="text-sm font-medium">
                          State
                        </label>
                        <Input id="state" name="state" value={formData.state} onChange={handleChange} required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="zipCode" className="text-sm font-medium">
                          ZIP Code
                        </label>
                        <Input id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
                      </div>
                    </div>

                    <CardFooter className="px-0 pt-4">
                      <Button type="submit" className="w-full">
                        Continue to Payment
                      </Button>
                    </CardFooter>
                  </form>
                </CardContent>
              </Card>
            )}

            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Payment Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitPayment} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="cardName" className="text-sm font-medium">
                        Name on Card
                      </label>
                      <Input id="cardName" name="cardName" value={formData.cardName} onChange={handleChange} required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="cardNumber" className="text-sm font-medium">
                        Card Number
                      </label>
                      <div className="relative">
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          required
                        />
                        <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="expDate" className="text-sm font-medium">
                          Expiration Date
                        </label>
                        <Input
                          id="expDate"
                          name="expDate"
                          placeholder="MM/YY"
                          value={formData.expDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="cvv" className="text-sm font-medium">
                          CVV
                        </label>
                        <Input
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex items-center">
                      <input
                        id="saveCard"
                        name="saveCard"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="saveCard" className="ml-2 text-sm text-gray-600">
                        Save this card for future purchases
                      </label>
                    </div>

                    <CardFooter className="px-0 pt-4 flex flex-col sm:flex-row gap-4">
                      <Button type="button" variant="outline" className="w-full sm:w-auto" onClick={() => setStep(1)}>
                        Back
                      </Button>
                      <Button type="submit" className="w-full sm:w-auto flex-1" disabled={isLoading}>
                        {isLoading ? "Processing..." : "Complete Order"}
                      </Button>
                    </CardFooter>
                  </form>
                </CardContent>
              </Card>
            )}

            {step === 3 && (
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Order Confirmed!</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Thank you for your order. We've received your payment and will process your order shortly. You will
                    receive an email confirmation with your order details.
                  </p>
                  <p className="font-medium mb-2">Order #: 12345678</p>
                  <p className="text-sm text-gray-500 mb-6">Estimated delivery: 3-5 business days</p>

                  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                    <Link href="/">
                      <Button variant="outline">Return to Home</Button>
                    </Link>
                    <Link href="/orders">
                      <Button>View Order Status</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="divide-y divide-gray-200 mb-4">
                  {cartItems.map((item) => (
                    <li key={item.id} className="py-4 flex">
                      <div className="flex-shrink-0 w-16 h-16 border border-gray-200 rounded-md overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between text-sm font-medium text-gray-900">
                            <h3>{item.name}</h3>
                            <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                          <p className="mt-1 text-xs text-gray-500">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="font-medium">${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p className="text-gray-600">Shipping</p>
                    <p className="font-medium">${shipping.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p className="text-gray-600">Tax</p>
                    <p className="font-medium">${tax.toFixed(2)}</p>
                  </div>
                  <div className="border-t pt-2 flex justify-between">
                    <p className="font-semibold">Total</p>
                    <p className="font-bold text-primary">${total.toFixed(2)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}

