import { ItemEstoque } from '../supermercados/estoque/item-estoque';

export class ItemPedido {
    constructor(
        public id: number,
        public quantidade: number,
        public observacao: string,
        public itemEstoque: ItemEstoque
    ) {}
}
