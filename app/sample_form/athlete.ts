export class Athlete {

    constructor(
        public id : number,
        public name : string,
        public discipline : string,
        public lastPosition? : number
    ) { }
}