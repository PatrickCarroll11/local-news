// types/event.ts

/**
 * Ticket/Admission information for an event.
 */
export interface TicketInfo {
  type: 'paid' | 'free';
  link?: string; // Required if type === 'paid'
  moreInfoLink?: string; // Required if type === 'free'
}

/**
 * Represents a single local event.
 */
export interface Event {
  id: string;
  emoji: string;
  title: string;
  date: string;
  time: string | null; // Null if no specific time (e.g., all-day events)
  location: string;
  description: string;
  ticketInfo: TicketInfo;
}
