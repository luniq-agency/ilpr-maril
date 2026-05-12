export type BlogPost = {
  body: string;
  category: string;
  created_at: Date;
  excerpt: string;
  id: number;
  language: string;
  organization: string;
  published_date: Date;
  slug: string;
  status: string;
  title: string;
};

export type ContactInquiry = {
  created_at: Date;
  email: string;
  form: string;
  id: number;
  message: string;
  name: string;
  organization: string;
  phone: string;
};

export type Job = {
  description: string;
  excerpt: string;
  id: number;
  language: string;
  location: string;
  organization: string;
  publish_date: Date;
  slug: string;
  status: string;
  title: string;
};

export type Membership = {
  email: string;
  id: number;
  organization: string;
};

export type News = {
  body: string;
  category: string;
  created_at: Date;
  excerpt: string;
  id: number;
  language: string;
  organization: string;
  published_date: Date;
  slug: string;
  status: string;
  thumbnail: string;
  title: string;
};
