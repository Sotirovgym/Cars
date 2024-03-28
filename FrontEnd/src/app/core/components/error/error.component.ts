import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../../services/error.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  constructor(private errorService: ErrorService, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.errorService.apiError$.subscribe((error) => {
      this.notificationService.showError(error || '', '');
    });
  }
}
