import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'direction'
})
export class DirectionPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (value === 0) {
            return 'Menossa ';
        } else {
            return 'Tulossa';
        }
    }

}
