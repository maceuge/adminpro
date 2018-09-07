export class Medico {
    constructor (
        public nombre: string,
        public img?: string,
        public _id?: string,
        public usuario?: {
            nombre: string
        },
        public hospital?: {
            nombre: string
        } 
    ) {}
}
