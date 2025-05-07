import { Component, Input } from '@angular/core';
import { Sponsor } from '../../models/sponsor.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sponsor-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sponsor-card.component.html',
  styleUrls: ['./sponsor-card.component.scss'],
})
export class SponsorCardComponent {
  @Input() sponsor!: Sponsor;
}
