import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JjService {
private userSubject:BehaviorSubject<any>=new BehaviorSubject(null);
public user$:Observable<any>=this.userSubject.asObservable();
setUser(user:any){
this.userSubject.next(user)
}
  constructor() { }
}
