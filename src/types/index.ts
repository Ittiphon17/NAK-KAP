export type CarType = "Sedan" | "SUV" | "Luxury" | "Sports" | "Electric";
export type FuelType = "Gasoline" | "Diesel" | "Electric" | "Hybrid";
export type TransmissionType = "Automatic" | "Manual";

export interface Car {
  id: string;
  slug: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  type: CarType;
  pricePerDay: number;
  transmission: TransmissionType;
  seats: number;
  fuel: FuelType;
  mileage: string;
  description: string;
  images: string[];
  features: string[];
  rating: number;
  reviews: number;
  status: "Available" | "Rented" | "Maintenance";
}

export interface Booking {
  id: string;
  carId: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  totalPrice: number;
  status: "Pending" | "Approved" | "Cancelled" | "Completed";
  createdAt: string;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  totalBookings: number;
  status: "Active" | "Inactive";
}
