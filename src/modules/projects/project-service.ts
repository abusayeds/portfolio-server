import { TProject } from "./project-interface";
import { ProjectModel } from "./project-model";

const createProjectDB = async (payload: TProject) => {
  const result = await ProjectModel.create(payload);
  return result;
};
const AllProjectDB = async () => {
  const result = await ProjectModel.find();
  return result;
};
const singleProjectDB = async (id: string) => {
  const result = await ProjectModel.findById(id);
  return result;
};
const deleteProjectDB = async (id: string) => {
  const result = await ProjectModel.findByIdAndDelete(id);
  return result;
};
const updateProjectDB = async (payload: TProject, id: string) => {
  const result = await ProjectModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const projectService = {
  createProjectDB,
  AllProjectDB,
  singleProjectDB,
  updateProjectDB,
  deleteProjectDB,
};
