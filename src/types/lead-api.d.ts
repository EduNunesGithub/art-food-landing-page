export interface LeadApiUser {
  email: string;
  id: string;
  name: string;
  phone: string;
  plan: string;
  plan_active: boolean;
}

export type LeadApiResponse =
  | {
      data: LeadApiUser;
      success: true;
    }
  | {
      details: string[];
      error: string;
      success: false;
    };
