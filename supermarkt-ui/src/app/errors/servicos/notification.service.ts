import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { publish, refCount } from 'rxjs/operators';

@Injectable()
export class NotificationService {

  private _notification: BehaviorSubject<Message> = new BehaviorSubject(undefined);
  readonly notification$: Observable<Message> = this._notification.asObservable().pipe(
    publish(),
    refCount()
  );

  constructor() {}

  notify(message: Message): void {
    this._notification.next(message);
  }

}
