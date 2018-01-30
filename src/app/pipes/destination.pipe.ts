import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'destination'
})
export class DestinationPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        const str = value;
        const pieces = str.split(/[\s-]+/);

        return pieces[0] + ' - ' + pieces[pieces.length - 1];
    }

}
