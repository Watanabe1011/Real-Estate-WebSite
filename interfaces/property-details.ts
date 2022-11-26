export interface PropertyDetails {
  id: number;
  objectID: number;
  ownerID: number;
  userExternalID: string;
  sourceID: number;
  state: string;
  geography: Geography;
  purpose: string;
  price: number;
  product: string;
  productLabel: string;
  rentFrequency?: any;
  referenceNumber: string;
  permitNumber: string;
  projectNumber?: any;
  title: string;
  title_l1: string;
  title_l2: string;
  description: string;
  description_l1: string;
  description_l2: string;
  externalID: string;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  location: Location[];
  category: Category[];
  createdAt: number;
  approvedAt: number;
  updatedAt: number;
  touchedAt: number;
  reactivatedAt: number;
  rooms: number;
  baths: number;
  area: number;
  score: number;
  score_l1: number;
  score_l2: number;
  coverPhoto: CoverPhoto;
  photoCount: number;
  videoCount: number;
  panoramaCount: number;
  photos: Photo[];
  floorPlans: any[];
  videos: any[];
  panoramas: any[];
  amenities: any[];
  phoneNumber: PhoneNumber;
  contactName: string;
  agency: Agency;
  active: boolean;
  hasExactGeography: boolean;
  verification: Verification;
  isVerified: boolean;
  completionStatus: string;
  randBoostScore: number;
  randBoostScore_l1: number;
  randBoostScore_l2: number;
  furnishingStatus?: any;
  extraFields: ExtraFields;
  type: string;
  cityLevelScore: number;
  indyScore: number;
  indyScore_l1: number;
  indyScore_l2: number;
  hasMatchingFloorPlans: boolean;
  hidePrice: boolean;
  locationPurposeTier: number;
}

export interface ExtraFields {
  dldBuildingNK: string;
  dldPropertySK: string;
}

export interface Verification {
  status: string;
  type?: any;
  eligible: boolean;
  comment?: any;
  updatedAt: number;
  verifiedAt?: any;
  visitedAt?: any;
}

export interface Agency {
  id: number;
  objectID: number;
  name: string;
  name_l1: string;
  name_l2: string;
  externalID: string;
  product: string;
  productScore: number;
  licenses: License[];
  logo: Logo;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  tr: number;
  tier: number;
  roles: any[];
  active: boolean;
  createdAt: string;
  commercialNumber?: any;
  shortNumber?: any;
}

export interface Logo {
  id: number;
  url: string;
}

export interface License {
  number: string;
  authority: string;
}

export interface PhoneNumber {
  mobile: string;
  phone: string;
  whatsapp: string;
  phoneNumbers: string[];
  mobileNumbers: string[];
}

export interface Photo {
  id: any;
  externalID: string;
  title?: any;
  orderIndex: number;
  nimaScore: number;
  url: string;
}

export interface CoverPhoto {
  id: number;
  externalID: string;
  title?: any;
  orderIndex: number;
  nimaScore: number;
  url: string;
  main: boolean;
}

export interface Category {
  id: number;
  level: number;
  externalID: string;
  name: string;
  name_l1: string;
  name_l2: string;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  nameSingular: string;
  nameSingular_l1: string;
  nameSingular_l2: string;
}

export interface Location {
  id: number;
  level: number;
  externalID: string;
  name: string;
  name_l1: string;
  name_l2: string;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  type?: string;
}

export interface Geography {
  lat: number;
  lng: number;
}
