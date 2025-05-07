import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  private apiUrl = 'https://api.maynooth.ie';
  private mailchimpEndpoint =
    'https://<dc>.api.mailchimp.com/3.0/lists/<LIST_ID>/members';

  constructor(private http: HttpClient) {}

  /**
   * Universal subscribe method with multiple provider support
   * @param email
   * @param provider 'mailchimp' | 'convertkit' | 'custom'
   */
  subscribe(email: string, provider: string = 'custom') {
    return this.customApiSubscribe(email);
  }

  // Option 1: Custom API Implementation
  private customApiSubscribe(email: string) {
    return this.http
      .post(`${this.apiUrl}/newsletter`, {
        email,
        timestamp: new Date().toISOString(),
        source: 'maynooth-website',
      })
      .pipe(
        tap(() => {
          this.processPendingSubscriptions();
        })
      );
  }

  public processPendingSubscriptions() {
    const pending = JSON.parse(
      localStorage.getItem('pendingSubscriptions') || '[]'
    );
    pending.forEach((sub: any) => {
      this.customApiSubscribe(sub.email).subscribe();
    });
    localStorage.removeItem('pendingSubscriptions');
  }

  // GDPR compliance methods
  getPrivacyPolicy() {
    return this.http.get(`${this.apiUrl}/privacy?type=newsletter`);
  }

  unsubscribe(email: string) {
    return this.http.post(`${this.apiUrl}/newsletter/unsubscribe`, { email });
  }
}
