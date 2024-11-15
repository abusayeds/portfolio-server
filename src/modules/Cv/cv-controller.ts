import httpStatus from "http-status";
import sendResponse from "../../app/middlwares/responseHandle";
import catchAsync from "../../app/utils/catechAsync-funtion";
import { CVServise } from "./Cv-servise";

const createCV = catchAsync(async (req, res) => {
  const result = await CVServise.createCVDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "CV created successfully ! ",
    data: result,
  });
});
const getCV = catchAsync(async (req, res) => {
  const result = await CVServise.getCVDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get CV  successfully ! ",
    data: result,
  });
});
const updateCV = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CVServise.updateCVDB(req.body, id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "CV Update successfully ! ",
    data: result,
  });
});
export const CvController = {
  createCV,
  getCV,
  updateCV,
};
