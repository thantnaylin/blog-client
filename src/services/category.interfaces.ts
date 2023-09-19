export interface ICategoryResult {
  meta: IMeta;
  data: Array<ICategoryDetails>;
}

export interface IMeta {
  pagination: IPagination;
}

export interface IPagination {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}

export interface ICategoryDetails {
  id: number;
  attribute: ICategoryAttribute;
}

export interface ICategoryAttribute {
  category_name: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}
