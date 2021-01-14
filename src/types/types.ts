export const SET_TOKEN = 'SET_TOKEN';
type UUID = string;

interface Organisation {
  externalId: UUID;
  name: string;
  orgType: string;
  licences: any[];
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  exp: Date;
  organisations: Organisation[];
  forename: string;
  surname: string;
  email: string;
}

interface Phone {
  phoneType: null;
  countryCode: null;
  countryPrefix: null;
  phoneNumber: string;
  ext: null;
  isPrimary: null;
  priority: null;
  deviceType: null;
  pushToken: null;
}

interface ContactProfile {
  externalId: UUID;
  profileType: string;
  profileValue: string;
}

export interface Customer {
  externalId: UUID;
  tenantId: UUID;
  contactType: string;
  title: string;
  forename: string;
  surname: string;
  email: null;
  createdOn: Date;
  companyName: null;
  avatarUrl: null;
  languagePreference: null;
  registrationType: string;
  address: null;
  phones: Phone[];
  marketingPreferences: null;
  contactGroup: null;
  organisationId: UUID;
  lastVisit: Date;
  contactProfiles: ContactProfile[];
  contactTags: any[];
}

export interface CustomerResponse {
  content: Customer[];
}

export interface RegisterRequest {
  forename: string;
  surname: string;
  gender: string;
  email: string;
  organisationId: UUID;
  trackAndTrace: boolean;
}

export interface UserRequest {
  name: string;
  password: string;
}

export interface SetTokenAction {
  type: typeof SET_TOKEN;
  payload: string;
}
