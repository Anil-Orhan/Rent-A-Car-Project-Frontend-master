import { ResponseModel } from './responseModel';

export interface SingleEntityResponseModel<T> extends ResponseModel {
  data: T;
}
