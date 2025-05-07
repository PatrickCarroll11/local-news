import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DirectoryService } from '../../services/directory.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directory-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './directory-detail.component.html',
  styleUrls: ['./directory-detail.component.scss'],
})
export class DirectoryDetailComponent implements OnInit {
  listing: any;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private directoryService: DirectoryService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.loadListingDetails(id);
    });
  }

  loadListingDetails(id: string): void {
    this.directoryService.getListingById(id).subscribe((listing) => {
      this.listing = listing;
      this.isLoading = false;
    });
  }
}
