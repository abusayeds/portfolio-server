export type TContentDetails = {
  contentTitle: string;
  contentImg?: string;
  contentDescription: string;
};

export type TBlog = {
  authorName: string;
  authorImg: string;
  blogImg: string;
  publishedDate: string;
  title: string;
  contentDetails: TContentDetails[];
};
