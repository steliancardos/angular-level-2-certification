import { Component, Input } from '@angular/core';
import { Job } from '../../models/jobs';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  @Input('job') job!: Job;
  @Input('showFavorite') showFavorite!: boolean;
}
