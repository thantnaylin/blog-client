import exp from "constants";

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
      caption?: string;
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

export interface IStoryDetailsAttributes {
  title: string;
  content: string;
  isPinned: boolean;
  excerpt: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  mainImage: IBannerImage;
  category: {
    data: {
      id: number;
      attributes: {
        categoryName: string;
      };
    };
  };
}

export interface IStoryDetails {
  data: {
    id: number;
    attributes: IStoryDetailsAttributes;
  };
}
