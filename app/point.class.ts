export class Point {
    constructor(
        public lat:number,
        public lng:number,
        public address:string,
        public rating:number,
        public avg_price:string,
        public color:string,
        public working_hours:any,
        public products_list:any,
        public delivery_availability:boolean,
        public personnel_languages:any
    ) {
    }
}