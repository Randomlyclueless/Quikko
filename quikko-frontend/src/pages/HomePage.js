import Layout from "@/components/layout"
import HeroSection from "@/components/hero-section"
import ProductCard from "@/components/product-card"
import CategoryCard from "@/components/category-card"
import VantaBackground from "@/components/vanta-background"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Sample data
const featuredProducts = [
  {
    id: "1",
    name: "Premium Notebook",
    price: 12.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Notebooks",
  },
  {
    id: "2",
    name: "Colorful Pen Set",
    price: 8.49,
    image: "/placeholder.svg?height=400&width=400",
    category: "Pens",
  },
  {
    id: "3",
    name: "Geometric Pencil Case",
    price: 15.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Accessories",
  },
  {
    id: "4",
    name: "Watercolor Paint Set",
    price: 24.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Art Supplies",
  },
]

const categories = [
  {
    id: "1",
    name: "Notebooks & Journals",
    image: "/placeholder.svg?height=300&width=300",
    productCount: 42,
  },
  {
    id: "2",
    name: "Pens & Markers",
    image: "/placeholder.svg?height=300&width=300",
    productCount: 56,
  },
  {
    id: "3",
    name: "Art Supplies",
    image: "/placeholder.svg?height=300&width=300",
    productCount: 38,
  },
  {
    id: "4",
    name: "School Accessories",
    image: "/placeholder.svg?height=300&width=300",
    productCount: 27,
  },
]

export default function HomePage() {
  return (
    <Layout>
      <VantaBackground effect="dots">
        <HeroSection />
      </VantaBackground>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
            <p className="mt-4 text-lg text-gray-600">Find exactly what you need for school or office</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                image={category.image}
                productCount={category.productCount}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/categories">
              <Button variant="outline" size="lg">
                View All Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="mt-4 text-lg text-gray-600">Our most popular items for students</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/products">
              <Button size="lg">Shop All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Back to School Special Offer!</h2>
            <p className="mt-4 text-xl">Get 15% off on all school supplies with code: SCHOOL15</p>
            <div className="mt-8">
              <Link href="/products">
                <Button variant="secondary" size="lg">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Quality Products</h3>
              <p className="mt-2 text-gray-600">We source only the highest quality stationery products for students.</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Fast Delivery</h3>
              <p className="mt-2 text-gray-600">Get your school supplies delivered quickly to your doorstep.</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Secure Payments</h3>
              <p className="mt-2 text-gray-600">Shop with confidence with our secure payment options.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

