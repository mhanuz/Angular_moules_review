import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name:'addtitle'
})
export class AddNameTitle implements PipeTransform{
    transform(name: string, gender: string ) {
        if(gender=="M"){
            return `Mr. ${name}`
        }else if(gender=='F'){
            return `Mrs. ${name}`
        }
        else{
            return ` ??   ${name}`
        }
    }
}