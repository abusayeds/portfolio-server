import { CvModel } from "./cv-modal";

export type TCV = {
  cv: string;
};

const createCVDB = async (payload: TCV) => {
  const result = await CvModel.create(payload);

  return result;
};

const getCVDB = async () => {
  const result = await CvModel.find();
  return result;
};

const updateCVDB = async (payload: TCV, id: string) => {
  const result = await CvModel.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const CVServise = {
  createCVDB,
  getCVDB,
  updateCVDB,
};
