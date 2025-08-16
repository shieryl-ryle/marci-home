"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Bed, Bath, Square, Eye, Heart, Share2, ChevronLeft, ChevronRight } from "lucide-react"

interface Property {
  id: number
  image: string
  price: string
  address: string
  neighborhood: string
  beds: number
  baths: number
  sqft: string
}

const properties: Property[] = [
  {
    id: 1,
    image: "modern two-story home with large windows and manicured lawn",
    price: "$750,000",
    address: "123 Oak Street",
    neighborhood: "Downtown Pahrump",
    beds: 4,
    baths: 3,
    sqft: "2,400",
  },
  {
    id: 2,
    image: "charming colonial style house with white picket fence",
    price: "$625,000",
    address: "456 Maple Avenue",
    neighborhood: "Pahrump Suburbs",
    beds: 3,
    baths: 2,
    sqft: "1,850",
  },
  {
    id: 3,
    image: "contemporary luxury home with pool and mountain views",
    price: "$950,000",
    address: "789 Pine Ridge",
    neighborhood: "Pahrump Hills",
    beds: 5,
    baths: 4,
    sqft: "3,200",
  },
  {
    id: 4,
    image: "cozy ranch style home with desert landscaping",
    price: "$485,000",
    address: "321 Desert View",
    neighborhood: "West Pahrump",
    beds: 3,
    baths: 2,
    sqft: "1,650",
  },
  {
    id: 5,
    image: "spacious family home with large backyard",
    price: "$695,000",
    address: "654 Mountain Vista",
    neighborhood: "East Pahrump",
    beds: 4,
    baths: 3,
    sqft: "2,100",
  },
]

export function ListingsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, properties.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, properties.length - 2)) % Math.max(1, properties.length - 2))
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out gap-6"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {properties.map((property) => (
            <div key={property.id} className="flex-none w-full md:w-1/2 lg:w-1/3">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img
                    src="/assets/listings-carousel/image.png"
                    alt={property.address}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {property.price}
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-background/90 hover:bg-background">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-background/90 hover:bg-background">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1 text-accent" />
                    <span className="text-sm font-medium">{property.address}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">{property.neighborhood}</p>

                  {/* Property Details */}
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>{property.beds} beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span>{property.baths} baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="h-4 w-4" />
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="sm"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 h-12 w-12 rounded-full bg-background/90 border-2 hover:bg-background shadow-lg"
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 h-12 w-12 rounded-full bg-background/90 border-2 hover:bg-background shadow-lg"
        onClick={nextSlide}
        disabled={currentIndex >= Math.max(0, properties.length - 3)}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.max(1, properties.length - 2) }).map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-accent" : "bg-muted-foreground/30"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
