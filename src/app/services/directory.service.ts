import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DirectoryService {
  private categories = [
    { id: 'plumbers', name: 'Plumbers', icon: 'plumbing' },
    { id: 'electricians', name: 'Electricians', icon: 'electrical_services' },
    { id: 'mechanics', name: 'Mechanics', icon: 'car_repair' },
    { id: 'chefs', name: 'Private Chefs', icon: 'restaurant' },
    { id: 'caterers', name: 'Caterers', icon: 'kitchen' },
    { id: 'general', name: 'General Services', icon: 'handyman' },
  ];

  private listings = [
    // Plumbers
    {
      id: '1',
      name: 'Maynooth Plumbing Solutions',
      category: 'plumbers',
      phone: '+353 1 555 1234',
      email: 'contact@maynoothplumbing.ie',
      website: 'https://maynoothplumbing.ie',
      address: '12 Main Street, Maynooth, Co. Kildare',
      description:
        '24/7 emergency plumbing services with 20 years experience serving Maynooth and surrounding areas. Specializing in leak detection and repair.',
      services: [
        'Leak repairs',
        'Boiler installation',
        'Bathroom fitting',
        'Pipe maintenance',
      ],
      isVerified: true,
      imageUrl: 'assets/images/maynooth_plumbing.png',
    },
    {
      id: '2',
      name: 'Kildare Pipeworks',
      category: 'plumbers',
      phone: '+353 1 555 5678',
      address: '34 Railway Road, Maynooth',
      description:
        'Family-run plumbing business since 1995. Affordable rates for all plumbing needs.',
      services: [
        'Drain cleaning',
        'Radiator installation',
        'Emergency callouts',
      ],
      isVerified: true,
      imageUrl: 'assets/images/kildare_plumbing.png',
    },

    // Electricians
    {
      id: '3',
      name: 'Maynooth Electrical Services',
      category: 'electricians',
      phone: '+353 1 555 9012',
      email: 'info@maynoothelectrical.ie',
      website: 'https://maynoothelectrical.ie',
      address: '8 Leinster Street, Maynooth',
      description:
        'Fully certified electricians for domestic and commercial work. PAT testing available.',
      services: ['Rewiring', 'Fuse box upgrades', 'Lighting installation'],
      isVerified: true,
      imageUrl: 'assets/images/electrician.jpg',
    },

    // Mechanics
    {
      id: '4',
      name: 'Maynooth Auto Repairs',
      category: 'mechanics',
      phone: '+353 1 555 3456',
      address: 'Unit 5, Maynooth Business Park',
      description:
        'Complete car service and repairs. Specialists in European vehicles.',
      services: ['NCT preparation', 'Brake repairs', 'Engine diagnostics'],
      isVerified: true,
      imageUrl: 'assets/images/mechanic.jpg',
    },

    // Private Chefs
    {
      id: '5',
      name: 'The Local Chef',
      category: 'chefs',
      phone: '+353 87 123 4567',
      email: 'bookings@thelocalchef.ie',
      description:
        'Private chef for dinner parties and special occasions. Locally sourced ingredients.',
      services: ['Dinner parties', 'Cooking lessons', 'Wedding catering'],
      isVerified: true,
      imageUrl: 'assets/images/private_chef.jpg',
    },

    // Caterers
    {
      id: '6',
      name: 'Maynooth Feast Catering',
      category: 'caterers',
      phone: '+353 1 555 7890',
      website: 'https://maynoothfeast.ie',
      address: '16 Parson Street, Maynooth',
      description:
        'Wedding and event catering specialists. Custom menus available.',
      services: ['Weddings', 'Corporate events', 'Buffet service'],
      isVerified: true,
      imageUrl: 'assets/images/catering.png',
    },
  ];

  getCategories() {
    return of(this.categories);
  }

  getListingsByCategory(categoryId: string) {
    return of(
      this.listings.filter((business) => business.category === categoryId)
    );
  }

  getFeaturedListings() {
    return of(this.listings.filter((business) => business.isVerified));
  }

  getListingById(id: string) {
    return of(this.listings.find((business) => business.id === id));
  }

  searchListings(query: string) {
    const lowerQuery = query.toLowerCase();
    return of(
      this.listings.filter(
        (business) =>
          business.name.toLowerCase().includes(lowerQuery) ||
          business.description.toLowerCase().includes(lowerQuery) ||
          business.services?.some((service) =>
            service.toLowerCase().includes(lowerQuery)
          )
      )
    );
  }
}
