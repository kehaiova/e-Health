import {RecipeDrugsBindingModel} from "./recipe-drugs-binding-model";

export interface RecipesBindingModel {

  recipeDrugsList: RecipeDrugsBindingModel[],
  personId: string,
  prescriptionBookletNo: string,
  protocolNo: string,
  outpationListNo: string,
  doctorNames: string,
  uinDoctor: string,
  issueDate: string,

}
