export class Task {
    title !: string ;
    done !:boolean;

    constructor(title:string, done:boolean){
        this.title=title;
        this.done=done;
    };

   
}
