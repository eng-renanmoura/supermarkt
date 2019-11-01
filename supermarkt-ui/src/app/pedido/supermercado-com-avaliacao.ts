import { Supermercado } from '../admin/supermercado/supermercado';

export class SupermercadoComAvaliacao {
    constructor(
        public supermercado?: Supermercado,
        public mediaDasAvaliacoes?: number
    ) {}
}
