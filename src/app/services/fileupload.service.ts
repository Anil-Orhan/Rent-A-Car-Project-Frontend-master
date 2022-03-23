import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import{imageUpload} from 'src/app/models/imageUpload'

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
apiUrl="https://localhost:44391/api/CarImages/add";

  constructor(private httpClient:HttpClient) { }



  Upload(imageUpload:FormData):Observable<ListResponseModel<imageUpload>> {
   
    return this.httpClient.post<ListResponseModel<imageUpload>>(this.apiUrl,imageUpload);
  }

  
}
