export interface Libro {
    id: number;
    name: string;
    author: string;
    portada?: string;
    tema?: string;
    fecha?: Date;
    cantidad: number;
}
