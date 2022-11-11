export interface ForRent {
  hits: Hit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustive: Exhaustive;
  query: string;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: ProcessingTimingsMS;
}

export interface ProcessingTimingsMS {
  afterFetch: AfterFetch;
  fetch: Fetch;
  total: number;
}

export interface Fetch {
  scanning: number;
  total: number;
}

export interface AfterFetch {
  total: number;
}

export interface Exhaustive {
  nbHits: boolean;
}

export interface Hit {
  id: number;
  ownerID: number;
  userExternalID: string;
  sourceID: number;
  state: string;
  _geoloc: Geoloc;
  geography: Geoloc;
  purpose: string;
  price: number;
  product: string;
  productLabel: string;
  productScore: number;
  rentFrequency: string;
  referenceNumber: string;
  permitNumber?: string;
  projectNumber?: any;
  title: string;
  title_l1: string;
  title_l2: string;
  externalID: string;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  location: Location[];
  category: Category[];
  createdAt: number;
  updatedAt: number;
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
  phoneNumber: PhoneNumber;
  contactName: string;
  agency: Agency;
  hash: string;
  keywords: string[];
  isVerified: boolean;
  verification: Verification;
  verifiedScore: number;
  completionStatus: string;
  randBoostScore: number;
  randBoostScore_l1: number;
  randBoostScore_l2: number;
  floorPlanID?: number;
  furnishingStatus: string;
  extraFields: ExtraFields;
  type: string;
  hasTransactionHistory: boolean;
  cityLevelScore: number;
  indyScore: number;
  indyScore_l1: number;
  indyScore_l2: number;
  hasMatchingFloorPlans: boolean;
  photoIDs: number[];
  hidePrice: boolean;
  locationPurposeTier: number;
  objectID: string;
  _highlightResult: HighlightResult;
  coverVideo?: CoverVideo;
}

export interface CoverVideo {
  externalID: number;
  title?: any;
  host: string;
  url: string;
  orderIndex: number;
}

export interface HighlightResult {
  referenceNumber: ReferenceNumber;
  title: ReferenceNumber;
  externalID: ReferenceNumber;
  agency: Agency2;
  keywords: ReferenceNumber[];
}

export interface Agency2 {
  name: ReferenceNumber;
}

export interface ReferenceNumber {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface ExtraFields {
  dldBuildingNK: string;
  dldPropertySK: string;
}

export interface Verification {
  updatedAt: number;
  eligible: boolean;
  status: string;
  verifiedAt: number;
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
  proxyMobile?: string;
  phoneNumbers: string[];
  mobileNumbers: string[];
  proxyPhone?: string;
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

export interface Geoloc {
  lat: number;
  lng: number;
}
