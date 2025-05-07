import { Component, OnInit } from '@angular/core';
import { DirectoryService } from '../../services/directory.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [CommonModule, RouterModule], // Removed ArticleCardComponent
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  categories: any[] = [];
  listings: any[] = []; // Changed from featuredListings to listings
  isLoading = true;
  activeCategory: string | null = null;

  constructor(private directoryService: DirectoryService) {}

  // ngOnInit(): void {
  //   this.loadDirectoryData();
  // }
  ngOnInit(): void {
    console.log('DirectoryComponent initialized'); // Check if this logs
    this.directoryService.getFeaturedListings().subscribe({
      next: (listings) => {
        console.log('Listings loaded:', listings); // Check if data appears
        this.listings = listings;
        this.isLoading = false;
      },
      error: (err) => console.error('Error loading listings:', err),
    });
  }

  loadDirectoryData(): void {
    this.directoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });

    this.directoryService.getFeaturedListings().subscribe((listings) => {
      this.listings = listings;
      this.isLoading = false;
    });
  }

  getListingsByCategory(categoryId: string): void {
    this.isLoading = true;
    this.directoryService
      .getListingsByCategory(categoryId)
      .subscribe((listings) => {
        this.listings = listings;
        this.activeCategory = categoryId;
        this.isLoading = false;
      });
  }

  loadAllListings(): void {
    this.isLoading = true;
    this.directoryService.getFeaturedListings().subscribe((listings) => {
      this.listings = listings;
      this.activeCategory = null;
      this.isLoading = false;
    });
  }
}
