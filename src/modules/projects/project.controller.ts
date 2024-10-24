import httpStatus from "http-status";
import sendResponse from "../../app/middlwares/responseHandle";
import catchAsync from "../../app/utils/catechAsync-funtion";
import { projectService } from "./project-service";

const createProject = catchAsync(async (req, res) => {
  const result = await projectService.createProjectDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project successfully created ! ",
    data: result,
  });
});
const AllProject = catchAsync(async (req, res) => {
  const result = await projectService.AllProjectDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get All Project Retrieved successfully !   ",
    data: result,
  });
});
const singleProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectService.singleProjectDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get Single Project Retrieved successfully !   ",
    data: result,
  });
});
const deleteProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectService.deleteProjectDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " Project Deleted successfully !   ",
    data: result,
  });
});
const updateProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectService.updateProjectDB(req.body, id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " Project Update successfully !   ",
    data: result,
  });
});
export const projectController = {
  createProject,
  AllProject,
  singleProject,
  deleteProject,
  updateProject,
};
