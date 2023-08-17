class CaixaDaLanchonete {
    constructor() {
        this.cardapio = {
            "cafe": { descricao: "Café", valor: 3.00 },
            "chantily": { descricao: "Chantily (extra do Café)", valor: 1.50 },
            "suco": { descricao: "Suco Natural", valor: 6.20 },
            "sanduiche": { descricao: "Sanduíche", valor: 6.50 },
            "queijo": { descricao: "Queijo (extra do Sanduíche)", valor: 2.00 },
            "salgado": { descricao: "Salgado", valor: 7.25 },
            "combo1": { descricao: "1 Suco e 1 Sanduíche", valor: 9.50 },
            "combo2": { descricao: "1 Café e 1 Sanduíche", valor: 7.50 }
        };

        this.formasDePagamento = {
            "dinheiro": { desconto: 0.05 },
            "debito": { desconto: 0 },
            "credito": { desconto: -0.03 }
        };
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        if (!this.formasDePagamento[metodoDePagamento]) {
            return "Forma de pagamento inválida!";
        }

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

       

        let total = 0;
        let temPrincipal = false;
        let temExtra = false;
        

        for (const itemInfo of itens) {
            const [codigo, quantidade] = itemInfo.split(",");
            const item = this.cardapio[codigo];

            if (!item) {
                return "Item inválido!";
            }

            if(quantidade <= 0){
             
                return "Quantidade inválida!"
            }

            
            
            total += item.valor * parseFloat(quantidade);
            
            if (!item.hasOwnProperty("extra")) {
                temPrincipal = true;
            }

            if (item.descricao.includes("(extra")) {
                temExtra = true;
            } 

           
        }

    
       
        

       

        if (temPrincipal  && total > 0) {
            total -= total * this.formasDePagamento[metodoDePagamento].desconto;
        } else {
            return "Item extra não pode ser pedido sem o principal";
        }

       if(!temPrincipal && temExtra){
        return "Item extra não pode ser pedido sem o principal";
       }
        


        if (total === 0) {
            return "Quantidade inválida!";
        }

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        //total -= total * this.formasDePagamento[metodoDePagamento].desconto;

        return `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
}

export { CaixaDaLanchonete };