import { Car } from "../types";

export const cars: Car[] = [
  {
    id: "1",
    slug: "tesla-model-s-plaid",
    name: "Model S Plaid",
    brand: "Tesla",
    model: "2024",
    year: 2024,
    type: "Electric",
    pricePerDay: 250,
    transmission: "Automatic",
    seats: 5,
    fuel: "Electric",
    mileage: "0 km (New)",
    description: "The quickest accelerating car in production today. Model S Plaid has the quickest acceleration of any vehicle in production.",
    images: [
      "https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?q=80&w=1200&auto=format&fit=crop"
    ],
    features: ["Autopilot", "Full Self-Driving", "Ludicrous Mode", "Premium Audio"],
    rating: 4.9,
    reviews: 124,
    status: "Available"
  },
  {
    id: "2",
    slug: "porsche-911-carrera",
    name: "911 Carrera",
    brand: "Porsche",
    model: "992",
    year: 2023,
    type: "Sports",
    pricePerDay: 350,
    transmission: "Automatic",
    seats: 2,
    fuel: "Gasoline",
    mileage: "5,000 km",
    description: "The icon. A timeless design, interpreted in a contemporary way. The Silhouette of the 911 is unmistakable.",
    images: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200&auto=format&fit=crop"
    ],
    features: ["Sport Chrono Package", "Bose Surround Sound", "Adaptive Cruise Control"],
    rating: 5.0,
    reviews: 86,
    status: "Available"
  },
  {
    id: "3",
    slug: "mercedes-benz-s-class",
    name: "S-Class",
    brand: "Mercedes-Benz",
    model: "S 580",
    year: 2024,
    type: "Luxury",
    pricePerDay: 300,
    transmission: "Automatic",
    seats: 5,
    fuel: "Hybrid",
    mileage: "2,000 km",
    description: "The pinnacle of luxury. The S-Class is more than just a car; it's a statement of sophistication and comfort.",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1200&auto=format&fit=crop"
    ],
    features: ["Burmester 4D Sound", "Rear Seat Entertainment", "Air Balance Package"],
    rating: 4.8,
    reviews: 52,
    status: "Available"
  },
  {
    id: "4",
    slug: "bmw-m4-competition",
    name: "M4 Competition",
    brand: "BMW",
    model: "2023",
    year: 2023,
    type: "Sports",
    pricePerDay: 280,
    transmission: "Automatic",
    seats: 4,
    fuel: "Gasoline",
    mileage: "8,000 km",
    description: "Pure performance. The BMW M4 Competition Coupe offers performance-bred engineering and design.",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607853202273-fae517c2a3c2?q=80&w=1200&auto=format&fit=crop"
    ],
    features: ["M Carbon Bucket Seats", "Head-Up Display", "Harman Kardon Sound"],
    rating: 4.7,
    reviews: 45,
    status: "Rented"
  },
  {
    id: "5",
    slug: "audi-rs-etron-gt",
    name: "RS e-tron GT",
    brand: "Audi",
    model: "2024",
    year: 2024,
    type: "Electric",
    pricePerDay: 320,
    transmission: "Automatic",
    seats: 4,
    fuel: "Electric",
    mileage: "1,500 km",
    description: "The future is here. The Audi RS e-tron GT is a masterpiece of electric performance and design.",
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606148664166-70868f0cb98f?q=80&w=1200&auto=format&fit=crop"
    ],
    features: ["quattro all-wheel drive", "Matrix LED Headlights", "Bang & Olufsen Sound"],
    rating: 4.9,
    reviews: 38,
    status: "Available"
  },
  {
    id: "6",
    slug: "range-rover-autobiography",
    name: "Range Rover",
    brand: "Land Rover",
    model: "Autobiography",
    year: 2024,
    type: "SUV",
    pricePerDay: 400,
    transmission: "Automatic",
    seats: 5,
    fuel: "Diesel",
    mileage: "3,000 km",
    description: "Leading by example. The Range Rover is the most desirable SUV in the world, combining luxury with capability.",
    images: [
      "https://images.unsplash.com/photo-1567818735868-e71b99932e29?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?q=80&w=1200&auto=format&fit=crop"
    ],
    features: ["Executive Class Rear Seats", "Meridian Signature Sound", "All-Wheel Steering"],
    rating: 4.9,
    reviews: 67,
    status: "Available"
  }
];
