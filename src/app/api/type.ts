import { AxiosRequestConfig } from 'axios';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface ApiError {
  response?: any;
  message?: string;
  status?: number;
  data?: any;
}

export interface AuthResponse {
  access_token: string;
  user: AuthUser;
}

export interface ApiOptions extends Omit<AxiosRequestConfig, 'url' | 'method'> {
  url: string;
  method: HttpMethod;
}

export type ID = string | number;

export interface AuthUser {
  id: ID;
  createdAt?: string;
  isActive: boolean;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: string;
  specialization: string;
  residentialAddress: string;
  gender: string;
  email: string;
  profile: string;
  password: string;
  confirmPassword: string;
  isArtisan: boolean;
  isAdmin: boolean;
  isClient: boolean;
  artisanId: ID;
}
