import { TBlog, TContentDetails } from "./blog-interface";
import { blogModel } from "./blog-modal";

const createBlogDB = async (payload: TBlog) => {
  const result = await blogModel.create(payload);

  return result;
};

const allBlogDB = async () => {
  const result = await blogModel.find();
  return result;
};

const singleBlogDB = async (id: string) => {
  const result = await blogModel.findById(id);

  return result;
};

const updateBlogDB = async (payload: TBlog, id: string) => {
  const result = await blogModel.findByIdAndUpdate(id, payload, { new: true });
  return result;
};
const updateBlogContentDB = async (
  blogId: string,
  contentId: string,
  updatedContent: TContentDetails
) => {
  const result = await blogModel.findOneAndUpdate(
    { _id: blogId, "contentDetails._id": contentId },
    { $set: { "contentDetails.$": updatedContent } },
    { new: true }
  );

  return result;
};
const deleteBlogDB = async (id: string) => {
  const result = await blogModel.findByIdAndDelete(id);
  return result;
};
export const blogSeervise = {
  createBlogDB,
  allBlogDB,
  singleBlogDB,
  updateBlogDB,
  updateBlogContentDB,
  deleteBlogDB,
};
