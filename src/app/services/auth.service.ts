import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IUser } from '../models/user.model';
import { TokenService } from './token.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<IUser | null>(null);
  user$: Observable<IUser | null> = this.userSubject.asObservable();

  constructor(private tokenService: TokenService) {}

  login(email: string, password: string): Observable<IUser> {
    // اینجا باید API call واقعی بزنی
    const fakeUser: IUser = { id: '1', email, roles: ['user'] };
    this.tokenService.setToken({ accessToken: 'FAKE_TOKEN' });
    this.userSubject.next(fakeUser);
    return of(fakeUser);
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.tokenService.getToken();
  }
}
