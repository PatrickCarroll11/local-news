import { Component, Input } from '@angular/core';
import { BusinessListing } from '../../models/directory.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directory-listing',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './directory-listing.component.html',
  styleUrls: ['./directory-listing.component.scss'],
})
export class DirectoryListingComponent {
  @Input() listing!: BusinessListing;
}
