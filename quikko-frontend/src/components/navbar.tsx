"use client"

import Link from "next/link"
import { ShoppingCart, User, Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">Quikko</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                href="/"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-primary"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-primary hover:text-gray-900"
              >
                Products
              </Link>
              <Link
                href="/categories"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-primary hover:text-gray-900"
              >
                Categories
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-primary hover:text-gray-900"
              >
                About
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Link href="/cart" className="p-2 rounded-full text-gray-600 hover:text-primary hover:bg-gray-100 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
            <Link href="/login" className="ml-4 p-2 rounded-full text-gray-600 hover:text-primary hover:bg-gray-100">
              <User className="h-6 w-6" />
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <Link
              href="/cart"
              className="p-2 rounded-full text-gray-600 hover:text-primary hover:bg-gray-100 relative mr-2"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
              Home
            </Link>
            <Link
              href="/products"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href="/login"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

