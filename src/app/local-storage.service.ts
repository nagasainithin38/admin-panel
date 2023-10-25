import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

set(key:string,data:string){
  localStorage.setItem(key,data)
}
get(key:string){
  return localStorage.getItem(key)
}

clear(){
  localStorage.clear()
}

}
