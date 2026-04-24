export interface Dictionary {
  nav: {
    home: string;
    cars: string;
    about: string;
    contact: string;
    admin: string;
    bookNow: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  home: {
    featuredTitle: string;
    featuredSubtitle: string;
    viewAllCars: string;
    whyTitle: string;
    whySubtitle: string;
  };
  search: {
    pickupLocation: string;
    pickupPlaceholder: string;
    pickupDate: string;
    returnDate: string;
    carType: string;
    carTypeOptions: string[];
    search: string;
  };
  filters: {
    priceRange: string;
    carType: string;
    carTypeOptions: string[];
    transmission: string;
    transmissionOptions: string[];
    seats: string;
    seatOptions: string[];
    apply: string;
  };
  bookingForm: {
    totalPrice: string;
    pickupLocation: string;
    pickupLocationPlaceholder: string;
    pickupDate: string;
    returnDate: string;
    yourName: string;
    yourNamePlaceholder: string;
    phoneNumber: string;
    bookNow: string;
    terms: string;
  };
  carsPage: {
    title: string;
    subtitle: string;
    showing: string;
    sortBy: string;
    sortOptions: string[];
  };
  aboutPage: {
    title: string;
    visionTitle: string;
    premiumCars: string;
    happyClients: string;
  };
  contactPage: {
    title: string;
    subtitle: string;
    cards: {
      emailTitle: string;
      emailAction: string;
      callTitle: string;
      callAction: string;
      visitTitle: string;
      visitAction: string;
    };
    form: {
      fullName: string;
      fullNamePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectOptions: string[];
      message: string;
      messagePlaceholder: string;
      sendMessage: string;
    };
  };
  bookingPage: {
    title: string;
    subtitle: string;
  };
  confirmationPage: {
    title: string;
    subtitle: string;
    bookingDetails: string;
    orderId: string;
    status: string;
    pendingApproval: string;
    estimatedTotal: string;
    backToCars: string;
    returnHome: string;
  };
  carDetailPage: {
    viewAllPhotos: string;
    premiumFeatures: string;
    mileage: string;
  };
  footer: {
    description: string;
    support: string;
    helpCenter: string;
    termsOfService: string;
    privacyPolicy: string;
    contact: string;
    location: string;
    allRightsReserved: string;
  };
  common: {
    perDay: string;
    viewDetails: string;
    rentNow: string;
    transmission: string;
    seats: string;
    fuel: string;
  };
}
