import { Injectable } from '@angular/core';
import { IToken } from '../models/token.model';

@Injectable({ providedIn: 'root' })
export class TokenService {
  private readonly tokenKey = 'app_token';

  getToken(): IToken | null {
    const raw = localStorage.getItem(this.tokenKey);
    return raw ? JSON.parse(raw) : null;
  }

  setToken(token: IToken) {
    localStorage.setItem(this.tokenKey, JSON.stringify(token));
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }
}
