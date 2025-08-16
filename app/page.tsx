"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { ListingsCarousel } from "@/components/listings-carousel"
import {
  Star,
  MapPin,
  Phone,
  Mail,
  Home,
  Users,
  DollarSign,
  ArrowRight,
  Calendar,
  Network,
  ShoppingCart,
  TrendingUp,
  Handshake,
  Building2,
  ChevronDown,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section with Search Listings */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/assets/header-image.png')]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-primary/30"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight">
              FIND YOUR DREAM HOME
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-sans leading-relaxed">
              Local insight. 3 decades of experience. Seamless buying & selling.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="elegant-button bg-accent hover:bg-primary hover:border-accent hover:border-2 text-white px-8 py-4 text-lg font-mono font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                onClick={() => document.querySelector("#listings")?.scrollIntoView({ behavior: "smooth" })}
              >
                Browse Featured Homes
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-mono font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg bg-transparent"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Talk to Marci
              </Button>
            </div>

            {/* Trust micro-row */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-white/80">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <span className="font-medium">Top Producer</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-accent" />
                <span className="font-medium">90+ clients served in a year</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-accent" />
                <span className="font-medium">$28.5M closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Marci Bio Section */}
      <section id="about" className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-8">
                <img
                  src="/assets/marci-image.png"
                  alt="Marci Metzger - Pahrump Realtor"
                  className="w-56 h-56 rounded-full object-cover shadow-2xl border-4 border-background"
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-accent/20"></div>
              </div>
              <h2 className="heading-1 text-foreground mb-8">Why Marci</h2>
              <p className="body-large text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                Hi, I'm Marci—your local Realtor. For nearly three decades I've helped buyers and sellers make
                confident moves with clear guidance, strong negotiation, and a trusted network.
              </p>
            </div>

            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <Card className="elegant-card p-8 text-center group">
                  <CardContent className="p-0">
                    <div className="bg-accent/10 rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Calendar className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-foreground mb-3">3 Decades</h3>
                    <p className="text-muted-foreground font-medium">in Real Estate</p>
                  </CardContent>
                </Card>

                <Card className="elegant-card p-8 text-center group">
                  <CardContent className="p-0">
                    <div className="bg-accent/10 rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <DollarSign className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-foreground mb-3">$28.5M</h3>
                    <p className="text-muted-foreground font-medium">Closed in 2021</p>
                  </CardContent>
                </Card>

                <Card className="elegant-card p-8 text-center group">
                  <CardContent className="p-0">
                    <div className="bg-accent/10 rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Users className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-foreground mb-3">90+</h3>
                    <p className="text-muted-foreground font-medium">Clients Served</p>
                  </CardContent>
                </Card>

                <Card className="elegant-card p-8 text-center group">
                  <CardContent className="p-0">
                    <div className="bg-accent/10 rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Network className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-foreground mb-3">Local</h3>
                    <p className="text-muted-foreground font-medium">Experts & Network</p>
                  </CardContent>
                </Card>
              </div>

              <Button
                size="lg"
                className="elegant-button bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-foreground mb-6">Our Services</h2>
            <p className="body-large text-muted-foreground max-w-3xl mx-auto">
              Comprehensive real estate services tailored to your unique needs and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="elegant-card p-8 text-center group">
              <CardContent className="p-0">
                <div className="bg-accent/10 rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <ShoppingCart className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Buying Representation</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Expert guidance through every step of your home purchase with personalized market insights.
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-accent hover:text-accent-foreground hover:bg-accent font-medium"
                >
                  Learn more <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="elegant-card p-8 text-center group">
              <CardContent className="p-0">
                <div className="bg-accent/10 rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <TrendingUp className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Selling & Home Valuation</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Strategic marketing and accurate pricing to maximize your home's value and sell quickly.
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-accent hover:text-accent-foreground hover:bg-accent font-medium"
                >
                  Learn more <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="elegant-card p-8 text-center group">
              <CardContent className="p-0">
                <div className="bg-accent/10 rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Building2 className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Investment Guidance</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Identify profitable investment opportunities with detailed market analysis and ROI projections.
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-accent hover:text-accent-foreground hover:bg-accent font-medium"
                >
                  Learn more <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="elegant-card p-8 text-center group">
              <CardContent className="p-0">
                <div className="bg-accent/10 rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Handshake className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Lender & Contractor Referrals</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Trusted network of local professionals to support your real estate and home improvement needs.
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-accent hover:text-accent-foreground hover:bg-accent font-medium"
                >
                  Learn more <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Gallery Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-foreground mb-6">Discover Pahrump</h2>
            <p className="body-large text-muted-foreground max-w-3xl mx-auto">
              Experience the natural beauty and peaceful lifestyle that makes Pahrump a special place to call home.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { src: "/assets/gallery/pahrump-desert-sunset.png", alt: "Scenic desert sunsets", caption: "Scenic desert sunsets" },
              { src: "/assets/gallery/pahrump-residential.png", alt: "Quiet neighborhoods", caption: "Quiet neighborhoods" },
              { src: "/assets/gallery/placeholder-0q2bn.png", alt: "Mountain views", caption: "Stunning mountain views" },
              { src: "/assets/gallery/placeholder-lklqe.png", alt: "Outdoor recreation", caption: "Outdoor recreation" },
              { src: "/assets/gallery/image.png", alt: "Local amenities", caption: "Local amenities" },
              { src: "/assets/gallery/pahrump-residential.png", alt: "Community spaces", caption: "Family-friendly spaces" },
            ].map((image, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-medium">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get It Sold Section */}
      <section className="section-padding bg-muted/20">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">GET IT SOLD</h2>
          </div>

          {/* Top Content - Sales Performance */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <img
                src="/assets/modern-kitchen-interior.png"
                alt="Modern kitchen interior with white countertops and pendant lights"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="heading-2 text-foreground mb-8">Top Residential Sales Last 5 Years</h3>
              <p className="body-large text-muted-foreground mb-6 leading-relaxed">
                We helped nearly 90 clients in 2021, and closed 28.5 million in sales!
              </p>
              <p className="body-large text-muted-foreground leading-relaxed">
                Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our
                clients deserve our best, & we want to make sure our best is better every year.
              </p>
            </div>
          </div>

          {/* Bottom Content - Don't Just List It */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left lg:order-1">
              <h3 className="heading-2 text-foreground mb-8">Don't Just List it...</h3>
              <p className="body-large text-muted-foreground leading-relaxed">
                Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible
                buyer, getting you top dollar for your home.
              </p>
            </div>
            <div className="lg:order-2">
              <img
                src="/assets/luxury-home-exterior.png"
                alt="Luxury home exterior with pool and mountain views"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section id="listings" className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-foreground mb-6">Featured Properties</h2>
            <p className="body-large text-muted-foreground max-w-3xl mx-auto">
              Discover exceptional homes in prime locations, carefully selected for their quality and value.
            </p>
          </div>

          <ListingsCarousel />

          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="elegant-button border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-semibold shadow-lg"
            >
              View all listings
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Search Listings Section */}
      <section className="section-padding bg-muted/20">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-1 text-foreground mb-6">Search Listings</h2>
              <p className="body-large text-muted-foreground max-w-3xl mx-auto">
                Find your perfect home with our comprehensive search tools and filters.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Location */}
                <div>
                  <label htmlFor="search-location" className="block text-sm font-mono font-medium text-foreground mb-3">Location</label>
                  <div className="relative">
                    <select id="search-location" className="w-full p-4 border border-border rounded-lg bg-white text-foreground appearance-none cursor-pointer focus:ring-2 focus:ring-accent focus:border-accent">
                      <option value="">Select Location</option>
                      <option value="pahrump">Pahrump</option>
                      <option value="las-vegas">Las Vegas</option>
                      <option value="henderson">Henderson</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                {/* Type */}
                <div>
                  <label htmlFor="search-type" className="block text-sm font-mono font-medium text-foreground mb-3">Type</label>
                  <div className="relative">
                    <select id="search-type" className="w-full p-4 border border-border rounded-lg bg-white text-foreground appearance-none cursor-pointer focus:ring-2 focus:ring-accent focus:border-accent">
                      <option value="">Property Type</option>
                      <option value="house">House</option>
                      <option value="condo">Condo</option>
                      <option value="townhouse">Townhouse</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <label htmlFor="search-sort" className="block text-sm font-mono font-medium text-foreground mb-3">Sort By</label>
                  <div className="relative">
                    <select id="search-sort" className="w-full p-4 border border-border rounded-lg bg-white text-foreground appearance-none cursor-pointer focus:ring-2 focus:ring-accent focus:border-accent">
                      <option value="">Sort Options</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="newest">Newest First</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {/* Bedrooms */}
                <div>
                  <label htmlFor="search-bedrooms" className="block text-sm font-mono font-medium text-foreground mb-3">Bedrooms</label>
                  <div className="relative">
                    <select id="search-bedrooms" className="w-full p-4 border border-border rounded-lg bg-white text-foreground appearance-none cursor-pointer focus:ring-2 focus:ring-accent focus:border-accent">
                      <option value="">Any Number</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                {/* Baths */}
                <div>
                  <label htmlFor="search-baths" className="block text-sm font-mono font-medium text-foreground mb-3">Baths</label>
                  <div className="relative">
                    <select id="search-baths" className="w-full p-4 border border-border rounded-lg bg-white text-foreground appearance-none cursor-pointer focus:ring-2 focus:ring-accent focus:border-accent">
                      <option value="">Any Number</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                {/* Min Price */}
                <div>
                  <label className="block text-sm font-mono font-medium text-foreground mb-3">Min Price</label>
                  <Input
                    type="text"
                    placeholder="$0"
                    className="p-4 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                </div>

                {/* Max Price */}
                <div>
                  <label className="block text-sm font-mono font-medium text-foreground mb-3">Max Price</label>
                  <Input
                    type="text"
                    placeholder="No Max"
                    className="p-4 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-accent hover:bg-primary hover:border-accent hover:border-2 text-white px-12 py-4 text-lg font-mono font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  SEARCH NOW
                </Button>
                <p className="text-sm text-muted-foreground mt-4">Advanced filters available after first search.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-padding bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-foreground mb-6">What Clients Say</h2>
            <p className="body-large text-muted-foreground">
              Don't just take our word for it - hear from satisfied homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "First-time Homebuyer",
                content:
                  "Marci made buying our first home stress-free. Her knowledge of the local market was invaluable, and she guided us through every step.",
                rating: 5,
              },
              {
                name: "Mike & Lisa Chen",
                role: "Sellers",
                content:
                  "We sold our home in just 10 days thanks to Marci's marketing expertise and pricing strategy. Couldn't be happier with the results!",
                rating: 5,
              },
              {
                name: "Robert Williams",
                role: "Investor",
                content:
                  "As a real estate investor, I need an agent who understands the market. Marci has helped me find several profitable properties.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="elegant-card p-8">
                <CardContent className="p-0">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-1 text-foreground mb-6">Get In Touch</h2>
              <p className="body-large text-muted-foreground">
                Ready to start your real estate journey? Let's discuss your needs.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h3 className="heading-3 text-foreground mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-accent/10 p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-muted-foreground">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-accent/10 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-muted-foreground">marci@metzgerhomes.com</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-accent/10 p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-muted-foreground">123 Main Street, Your City, ST 12345</span>
                  </div>
                </div>
                <div className="mt-12">
                  <h4 className="text-lg font-semibold text-foreground mb-6">Office Hours</h4>
                  <div className="text-muted-foreground space-y-2">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 10:00 AM - 5:00 PM</p>
                    <p>Sunday: 12:00 PM - 4:00 PM</p>
                  </div>
                </div>
              </div>
              <div>
                <Card className="elegant-card p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                        <Input placeholder="John" className="rounded-lg" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                        <Input placeholder="Doe" className="rounded-lg" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <Input type="email" placeholder="john@example.com" className="rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                      <Input type="tel" placeholder="(555) 123-4567" className="rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <Textarea
                        placeholder="Tell me about your real estate needs..."
                        className="min-h-[120px] rounded-lg"
                      />
                    </div>
                    <Button className="w-full elegant-button bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Contact Information */}
      <footer className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Home className="h-8 w-8 text-accent" />
                <span className="text-2xl font-serif font-bold">Marci Metzger Homes</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed font-sans">
                Your trusted partner in finding the perfect home. Serving Pahrump with integrity and expertise for over
                3 decades.
              </p>
            </div>

            <div>
              <h4 className="font-mono font-semibold mb-6 text-accent">Contact Info</h4>
              <div className="space-y-4 text-primary-foreground/80">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-accent" />
                  <span>(775) 555-0123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-accent" />
                  <span>marci@ridgerealty.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>123 Main St, Pahrump, NV</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-mono font-semibold mb-6 text-accent">Services</h4>
              <ul className="space-y-3 text-primary-foreground/80 font-sans">
                <li>Home Buying</li>
                <li>Home Selling</li>
                <li>Market Analysis</li>
                <li>Investment Properties</li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono font-semibold mb-6 text-accent">Areas Served</h4>
              <ul className="space-y-3 text-primary-foreground/80 font-sans">
                <li>Pahrump Valley</li>
                <li>Mountain Falls</li>
                <li>Calvada Valley</li>
                <li>Homestead Road</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/80 font-sans">
            <p>&copy; 2024 Marci Metzger Homes - The Ridge Realty Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
