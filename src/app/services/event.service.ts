import { Injectable } from '@angular/core';
import { Event, TicketInfo } from '../models/event.model';
import { Sponsor } from '../models/sponsor.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private events: Event[] = [
    {
      id: 'event1',
      emoji: '🎤',
      title: 'Christy Moore Live in Concert',
      date: 'Saturday, May 10, 2025',
      time: '8:00 PM',
      location: 'Keadeen Hotel, Newbridge',
      description:
        "Renowned Irish folk singer Christy Moore is set to perform live at the Keadeen Hotel in Newbridge. Known for his emotive storytelling and powerful performances, Moore's concert promises an evening of traditional Irish music that resonates with fans old and new.",
      ticketInfo: {
        type: 'paid',
        link: '[https://www.ticketmaster.ie](https://www.ticketmaster.ie)',
      },
    },
    {
      id: 'event2',
      emoji: '🌈',
      title: 'Kildare Inclusivity Festival 2025',
      date: 'Sunday, May 11, 2025',
      time: '11:00 AM – 4:00 PM',
      location: 'The Curragh Racecourse',
      description:
        "Join the community at the Curragh Racecourse for the Kildare Inclusivity Festival 2025. This free, family-friendly event celebrates diversity and inclusion with live music, workshops, and various community activities. It's an opportunity to engage with initiatives promoting accessibility and unity within the county.",
      ticketInfo: {
        type: 'free',
        moreInfoLink: '[https://www.ckan.ie](https://www.ckan.ie)',
      },
    },
    {
      id: 'event3',
      emoji: '🤼',
      title: 'No Limit Wrestling: “MAYHEM”',
      date: 'Sunday, May 11, 2025',
      time: '3:00 PM',
      location: 'The Moat Theatre, Naas',
      description:
        'Experience the thrill of professional wrestling with "MAYHEM" by No Limit Wrestling at The Moat Theatre. This action-packed event features a lineup of dynamic matches suitable for all ages, promising an evening of entertainment and excitement for wrestling enthusiasts.',
      ticketInfo: {
        type: 'paid',
        link: '[https://www.moattheatre.com](https://www.moattheatre.com)',
      },
    },
    {
      id: 'event4',
      emoji: '🌅',
      title: 'Dawn Chorus in Monasterevin',
      date: 'Saturday, May 10, 2025',
      time: '7:30 AM',
      location: 'Monasterevin Playground, R424',
      description:
        'Embrace the serenity of nature with the Dawn Chorus event in Monasterevin. Meet at the playground on the R424 to join local birdwatchers in experiencing the harmonious sounds of morning birdsong. This peaceful gathering offers a unique opportunity to connect with the natural environment.',
      ticketInfo: {
        type: 'free',
        moreInfoLink: '[https://www.allevents.in](https://www.allevents.in)',
      },
    },
    {
      id: 'event5',
      emoji: '🚴',
      title: 'National Bike Week 2025 Kick-Off',
      date: 'Saturday, May 10, 2025',
      time: null,
      location: 'Various locations across County Kildare',
      description:
        'Kildare County Council launches National Bike Week 2025 with a series of events promoting cycling throughout the county. Activities include group rides, safety workshops, and family-friendly events aimed at encouraging a healthier, more sustainable mode of transportation.',
      ticketInfo: {
        type: 'free',
        moreInfoLink:
          '[https://www.transportforireland.ie](https://www.transportforireland.ie)',
      },
    },
    {
      id: 'event6',
      emoji: '🍽️',
      title: 'Lunch with Luca Line',
      date: 'Saturday, May 10, 2025',
      time: '2:00 PM – 4:00 PM',
      location: 'Glennons of Allenwood',
      description:
        'Join Luca Line Services for a special lunch event at Glennons of Allenwood. This gathering offers culinary delights and live entertainment, providing attendees with an enjoyable afternoon of food and community engagement.',
      ticketInfo: {
        type: 'paid',
        link: '[https://www.eventbrite.ie](https://www.eventbrite.ie)',
      },
    },
    {
      id: 'event7',
      emoji: '📖',
      title: 'Rhyme & Sign Storytime',
      date: 'Thursday, May 8, 2025',
      time: '10:30 AM',
      location: 'Naas Library',
      description:
        'Naas Library hosts an interactive Rhyme & Sign Storytime session, incorporating sign language into storytelling. This event is ideal for young children and their caregivers, promoting early language development and inclusivity through engaging activities.',
      ticketInfo: {
        type: 'free',
        moreInfoLink: 'https://www.allevents.in',
      },
    },
  ];

  // Add all other events from your JSON model here
  // ...

  // ======================
  // Core Methods
  // ======================

  getAllEvents() {
    return of(this.events);
  }

  getEventById(id: string) {
    return of(this.events.find((event) => event.id === id));
  }

  getUpcomingEvents(limit?: number) {
    // Note: In a real app, you'd implement proper date comparison
    const upcoming = this.events.slice(); // Clone array
    if (limit) {
      return of(upcoming.slice(0, limit));
    }
    return of(upcoming);
  }

  getFeaturedEvents() {
    return of(this.events.slice(0, 3)); // First 3 as featured (or add isFeatured property)
  }

  // ======================
  // Filter Methods
  // ======================

  getFreeEvents() {
    return of(this.events.filter((event) => event.ticketInfo.type === 'free'));
  }

  getPaidEvents() {
    return of(this.events.filter((event) => event.ticketInfo.type === 'paid'));
  }

  // ======================
  // Utility Methods
  // ======================

  getEventsByDateRange(startDate: string, endDate: string) {
    // Implement date comparison logic if needed
    return of(this.events); // Placeholder
  }
}
