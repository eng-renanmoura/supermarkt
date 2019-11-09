
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorsService } from './servicos/errors.service';
import { NotificationService } from './servicos/notification.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {

    constructor(
        private injector: Injector,
        private ngZone: NgZone
    ) {}

    handleError(error: Error | HttpErrorResponse): void {
        const notificaoServico = this.injector.get(NotificationService);
        const errorsService = this.injector.get(ErrorsService);
        const router = this.injector.get(Router);

        if (error instanceof HttpErrorResponse) {
            // Erro servidor
            if (!navigator.onLine) {
                notificaoServico.notify({severity: 'error', summary: 'Erro', detail: 'Sem conexão.'});
                return;
            }
            errorsService
                .log(error)
                .subscribe(errorWithContextInfo => {
                    this.ngZone.run(() => router.navigate(['/error'], { queryParams: errorWithContextInfo })).then();
                });

            notificaoServico.notify({severity: 'error', summary: 'Erro', detail: `${error.status} - ${error.message}`});
        } else {
            // Erro cliente
            errorsService
                .log(error)
                .subscribe(errorWithContextInfo => {
                    router.navigate(['/error'], { queryParams: errorWithContextInfo });
                });
        }

    }
}

