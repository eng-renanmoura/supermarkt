
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { ErrorsService } from './errors.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {

    constructor(
        private injector: Injector,
    ) {}

    handleError(error: Error | HttpErrorResponse) {
        const notificationService = this.injector.get(NotificationService);
        const errorsService = this.injector.get(ErrorsService);
        const router = this.injector.get(Router);

        if (error instanceof HttpErrorResponse) {
            // Server error happened
            if (!navigator.onLine) {
                // No Internet connection
                notificationService.notify('No Internet Connection');
                return;
            }
            // Http Error
            // Send the error to the server
            errorsService.log(error).subscribe();
            // Show notification to the user
            notificationService.notify(`${error.status} - ${error.message}`);
            return;
        } else {
            // Client Error Happend
            // Send the error to the server and then
            // redirect the user to the page with all the info
            errorsService
                .log(error)
                .subscribe(errorWithContextInfo => {
                    router.navigate(['/error'], { queryParams: errorWithContextInfo });
                });
        }
    }
}

