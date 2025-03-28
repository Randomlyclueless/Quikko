import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  id: string
  name: string
  image: string
  productCount: number
}

export default function CategoryCard({ id, name, image, productCount }: CategoryCardProps) {
  return (
    <Link href={`/categories/${id}`}>
      <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg group">
        <div className="relative h-40 w-full overflow-hidden bg-gray-100">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <CardContent className="p-4 absolute bottom-0 left-0 right-0 text-white">
          <h3 className="font-medium text-lg">{name}</h3>
          <p className="text-sm text-white/80">{productCount} products</p>
        </CardContent>
      </Card>
    </Link>
  )
}

