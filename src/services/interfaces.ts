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
  attributes: ICategoryAttribute;
}

export interface ICategoryAttribute {
  categoryName: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

export interface IBannerImage {
  data: {
    id: number;
    attributes: {
      name: string;
      url: string;
    };
  };
}

export interface IStory {
  id: number;
  attributes: {
    title: string;
    excerpt: string;
    createdAt: string;
    mainImage: IBannerImage;
    category: {
      data: ICategoryDetails;
    };
  };
}

export interface IStoryResult {
  data: Array<IStory>;
  meta: IMeta;
}
