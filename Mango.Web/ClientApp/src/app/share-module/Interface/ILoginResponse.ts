export interface LoginResponse {
    user: {
      email: string;
      id: string;
      name: string;
      phoneNumber: string;
    };
    token: string;
  }