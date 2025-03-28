"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, Clock } from "lucide-react"

export default function PaymentStatusPage() {
  const [status, setStatus] = useState("processing")
  const [orderDetails, setOrderDetails] = useState({
    orderId: "12345678",
    date: new Date().toLocaleDateString(),
    total: 42.47,
    items: 3,
  })

  // Simulate payment processing
  useEffect(() => {
    const timer = setTimeout(() => {
      // Randomly choose success or failure for demo purposes
      const result = Math.random() > 0.2 ? "success" : "failed"
      setStatus(result)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card>
          <CardHeader className="text-center">
            {status === "processing" && (
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
            )}

            {status === "success" && (
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            )}

            {status === "failed" && (
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <XCircle className="h-8 w-8 text-red-600" />
              </div>
            )}

            <CardTitle className="text-2xl">
              {status === "processing" && "Processing Payment..."}
              {status === "success" && "Payment Successful!"}
              {status === "failed" && "Payment Failed"}
            </CardTitle>
          </CardHeader>

          <CardContent className="text-center">
            {status === "processing" && (
              <div className="space-y-4">
                <p className="text-gray-600">Please wait while we process your payment. This may take a few moments.</p>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary animate-pulse rounded-full"></div>
                </div>
              </div>
            )}

            {status === "success" && (
              <div className="space-y-4">
                <p className="text-gray-600 mb-6">
                  Your payment has been successfully processed. Thank you for your order!
                </p>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Order Details</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <p className="text-gray-500">Order ID:</p>
                    <p className="text-right font-medium">{orderDetails.orderId}</p>

                    <p className="text-gray-500">Date:</p>
                    <p className="text-right font-medium">{orderDetails.date}</p>

                    <p className="text-gray-500">Items:</p>
                    <p className="text-right font-medium">{orderDetails.items}</p>

                    <p className="text-gray-500">Total:</p>
                    <p className="text-right font-medium">${orderDetails.total.toFixed(2)}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mt-6">A confirmation email has been sent to your email address.</p>
              </div>
            )}

            {status === "failed" && (
              <div className="space-y-4">
                <p className="text-gray-600 mb-6">
                  We're sorry, but there was an issue processing your payment. Please try again or use a different
                  payment method.
                </p>

                <div className="bg-red-50 p-4 rounded-lg text-left">
                  <h3 className="font-medium text-red-800 mb-2">Possible reasons:</h3>
                  <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                    <li>Insufficient funds</li>
                    <li>Card expired or invalid</li>
                    <li>Bank declined the transaction</li>
                    <li>Network or connection issues</li>
                  </ul>
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex flex-col sm:flex-row justify-center gap-4">
            {status === "processing" && (
              <Button variant="outline" disabled>
                Please wait...
              </Button>
            )}

            {status === "success" && (
              <>
                <Link href="/">
                  <Button variant="outline">Return to Home</Button>
                </Link>
                <Link href="/orders">
                  <Button>View Order Status</Button>
                </Link>
              </>
            )}

            {status === "failed" && (
              <>
                <Link href="/checkout">
                  <Button variant="outline">Try Again</Button>
                </Link>
                <Link href="/contact">
                  <Button>Contact Support</Button>
                </Link>
              </>
            )}
          </CardFooter>
        </Card>
      </div>
    </Layout>
  )
}

