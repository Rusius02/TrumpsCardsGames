import { Injectable } from '@angular/core';
import carData from '../../../data/cars.json';


@Injectable({
  providedIn: 'root'
})
export class CarService {


  getCars(): any[] {
    return carData.cars;
  }
}
