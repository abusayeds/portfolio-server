import express from "express";
import requestValidation from "../../app/middlwares/validation-request";
import { blogValidation } from "./blog-validation";
import { blogController } from "./blog-controller";
const router = express.Router();
router.post(
  "/create-blog",
  requestValidation(blogValidation.createBlogValidationSchema),
  blogController.createBlog
);
router.get("/all-blog", blogController.allBlog);
router.get("/single-blog/:id", blogController.singleBlog);
router.put(
  "/update-blog/:id",

  blogController.updateBlog
);
router.delete(
  "/delete-blog/:id",

  blogController.updateBlog
);
router.put(
  "/update-blog/:blogId/:contentId",

  blogController.updateBlogConttent
);

export const blogsRoutes = router;
