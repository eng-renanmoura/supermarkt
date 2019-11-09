import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { publish, refCount } from 'rxjs/operators';

@Injectable()
export class NotificacaoService {

  private _notificacao: BehaviorSubject<Message> = new BehaviorSubject(undefined);
  readonly notificacoe$: Observable<Message> = this._notificacao.asObservable().pipe(
    publish(),
    refCount()
  );

  constructor() {}

  notificar(message: Message): void {
    this._notificacao.next(message);
  }

}
