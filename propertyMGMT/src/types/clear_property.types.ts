export interface IClearProperty {
  id?: number;
  form_no: string;
  prop_date: Date;
  property_name: string;
  property_type: string;
  for_property: string;
  membership: string;
  project_name: string;
  State: string;
  city: string;
  location: string;
  video_url: string;
  tour_link: string;
  content: string;
  status: '0' | '1';
  admin_del: '0' | '1';
  display_order: number;
  url: string;
  hit: number;
}

export interface IClearPropertyResponse {
  success: boolean;
  message: string;
  data?: IClearProperty;
  error?: {
    field: string;
    issue: string;
  };
}

export interface IClearPropertyListResponse {
  success: boolean;
  message: string;
  data: {
    properties: IClearProperty[];
    total: number;
    page: number;
    limit: number;
  };
} 