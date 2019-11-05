import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { publish, refCount } from 'rxjs/operators';

@Injectable()
export class NotificationService {

  private _notification: BehaviorSubject<string> = new BehaviorSubject(undefined);
  readonly notification$: Observable<string> = this._notification.asObservable().pipe(
    publish(),
    refCount()
  );

  constructor() {}

  notify(message: string): void {

    console.log("ENTROU");
    this._notification.next(message);
    setTimeout(() => this._notification.next(undefined), 3000);
  }

}
