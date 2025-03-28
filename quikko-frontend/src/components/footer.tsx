import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Quikko</h3>
            <p className="text-sm text-gray-600">
              Your one-stop shop for all stationery needs. Quality products for students and professionals.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-gray-600 hover:text-primary">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-sm text-gray-600 hover:text-primary">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-sm text-gray-600 hover:text-primary">
                  Special Deals
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-sm text-gray-600 hover:text-primary">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/login" className="text-sm text-gray-600 hover:text-primary">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-sm text-gray-600 hover:text-primary">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/orders" className="text-sm text-gray-600 hover:text-primary">
                  Order History
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-sm text-gray-600 hover:text-primary">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">Email: support@quikko.com</li>
              <li className="text-sm text-gray-600">Phone: +1 (123) 456-7890</li>
              <li className="text-sm text-gray-600">Address: 123 Stationery St, School District</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Quikko. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm text-gray-500 hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/faq" className="text-sm text-gray-500 hover:text-primary">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

