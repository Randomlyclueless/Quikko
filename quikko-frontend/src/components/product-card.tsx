import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            {category}
          </span>
        </div>
        <Link href={`/products/${id}`}>
          <h3 className="font-medium text-lg mb-1 hover:text-primary transition-colors">{name}</h3>
        </Link>
        <p className="font-bold text-lg text-primary">${price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

