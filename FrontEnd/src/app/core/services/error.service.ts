import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private apiError$$ = new BehaviorSubject<string>('');
  apiError$ = this.apiError$$.asObservable();

  constructor() {}

  setError(errMessage: string): void {
    this.apiError$$.next(errMessage);
  }
}
