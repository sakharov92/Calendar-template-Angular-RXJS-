import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class ModalWindowAndFormService {
    isLoading = true;
    isFormSHown = false;
    modalStream$: Subject<object> = new Subject();

    constructor() {
    }

    setLoadingState(newState: boolean): void {
        this.isLoading = newState;
    }

    updateState(): void {
        this.modalStream$.next({
            isLoading: this.isLoading,
            isFormShown: this.isFormSHown
        });
    }

    showForm = (): void => {
        this.isFormSHown = true;
        this.isLoading = false;
        this.modalStream$.next(
            {
                isLoading: this.isLoading,
                isFormShown: this.isFormSHown
            }
        );
    };

    hideModalWindow = (): void => {
        this.isFormSHown = false;
        this.isLoading = false;
        this.modalStream$.next(
            {
                isLoading: this.isLoading,
                isFormShown: this.isFormSHown
            }
        );
    };
}
