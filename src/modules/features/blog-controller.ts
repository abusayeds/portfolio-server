import httpStatus from "http-status";
import sendResponse from "../../app/middlwares/responseHandle";
import catchAsync from "../../app/utils/catechAsync-funtion";
import { blogSeervise } from "./blog-service";

const createBlog = catchAsync(async (req, res) => {
  const result = await blogSeervise.createBlogDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog created successfully ! ",
    data: result,
  });
});
const allBlog = catchAsync(async (req, res) => {
  const result = await blogSeervise.allBlogDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get Blog  successfully ! ",
    data: result,
  });
});
const singleBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await blogSeervise.singleBlogDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " Get Single Blog  successfully ! ",
    data: result,
  });
});
const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await blogSeervise.updateBlogDB(req.body, id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog Update successfully ! ",
    data: result,
  });
});
const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await blogSeervise.deleteBlogDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog deleted successfully ! ",
    data: result,
  });
});
const updateBlogConttent = catchAsync(async (req, res) => {
  const { blogId } = req.params;
  const { contentId } = req.params;
  const result = await blogSeervise.updateBlogContentDB(
    blogId,
    contentId,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog Content Update successfully ! ",
    data: result,
  });
});

export const blogController = {
  createBlog,
  allBlog,
  singleBlog,
  updateBlog,
  updateBlogConttent,
  deleteBlog,
};
