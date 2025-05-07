import { Component, Input } from '@angular/core';
import { BusinessCategory } from '../../models/directory.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-directory-category',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './directory-category.component.html',
  styleUrls: ['./directory-category.component.scss'],
})
export class DirectoryCategoryComponent {
  @Input() category!: BusinessCategory;
}
