export interface BusinessCategory {
  id: string;
  name: string;
  icon: string;
}

export interface BusinessListing {
  id: string;
  name: string;
  category: string;
  phone: string;
  email?: string;
  website?: string;
  address: string;
  description: string;
  services?: string[];
  isVerified?: boolean;
  imageUrl?: string;
}
