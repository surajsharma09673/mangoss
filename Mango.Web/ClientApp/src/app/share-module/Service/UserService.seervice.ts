import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
 // Import your token service here

@Injectable()
export class UserService {
  private userDataKey = 'userData';
  private userData: { user: any; token: string } | undefined;

  constructor(private tokenService: TokenService) {
    // Retrieve user data from localStorage on service initialization
    
  }

  setUserData(userData: { user: any; token: string }): void {
    this.userData = userData;
    this.tokenService.saveToken(userData.token);

    // Store user data in localStorage
    localStorage.setItem(this.userDataKey, JSON.stringify(userData));
  }

  getUserData(): { user: any; token: string } | undefined {
    
    const storedUserData = localStorage.getItem(this.userDataKey);
    this.userData = storedUserData ? JSON.parse(storedUserData) : undefined;
    return this.userData
  }


  clearUserData(): void {
    this.userData = undefined;
    this.tokenService.removeToken();

    // Remove user data from localStorage
    localStorage.removeItem(this.userDataKey);
  }
}
