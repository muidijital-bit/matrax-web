export type DbProduct = {
  id: number;
  slug: string;
  name: string;
  code: string | null;
  category: string;
  category_key: string;
  badge: string | null;
  price: string;
  image: string | null;
  images: string[];
  description: string | null;
  long_desc: string | null;
  features: string[];
  specs: { label: string; value: string }[];
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

export type DbCategory = {
  id: string;
  key: string;
  name: string;
  color: string;
  image: string | null;
  sort_order: number;
  created_at: string;
};

export type DbSpareCategory = {
  id: string;
  key: string;
  title: string;
  short: string | null;
  cover: string | null;
  badge: string | null;
  accent: string | null;
  sort_order: number;
  created_at: string;
};

export type DbSparePart = {
  id: string;
  key: string;
  category_key: string;
  title: string;
  description: string | null;
  image: string | null;
  gallery: string[];
  sort_order: number;
  created_at: string;
};

export type SiteSetting = {
  id: string;
  key: string;
  value: string | null;
  updated_at: string;
};
