var app = new Vue({
    el: "#app",
    data: {
        product_list: [
            {
                id: 1586934917210,
                title: "神戶一日遊",
                category: "神戶",
                content: "暢遊神戶五個景點",
                description: "商品說明 - string",
                imageUrl: [
                    "https://images.unsplash.com/photo-1561356048-1506f7e0f4b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                ],
                enabled: true,
                origin_price: 1800,
                price: 1400,
                unit: "單位 - string",
            },
            {
                id: 1196934917910,
                title: "大阪一日遊",
                category: "大阪",
                content: "暢遊大阪五個景點",
                description: "商品說明 - string",
                imageUrl: [
                    "https://images.unsplash.com/photo-1537153960513-344d9f2e8216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                ],
                enabled: false,
                origin_price: 3000,
                price: 2500,
                unit: "單位 - string",
            },
        ],
        tempProduct: {},
    },
    methods: {
        openModal(operate, item) {
            switch (operate) {
                case "create":
                    this.tempProduct = {};
                    $('#addProductModal').modal('show');
                    break;

                // 先觸發 model 元件，把要刪除的資料搬進去 tempProduct，最後再由 modal 的確認按鈕呼叫 delProduct 執行
                case "delete":
                    $('#delProductModal').modal('show');
                    this.tempProduct = Object.assign({}, item);
                    break;

            }
        },
        addProduct() {
            console.log(this.tempProduct);
            const id = new Date().getTime();
            this.tempProduct.id = id;
            this.product_list.push(this.tempProduct);
            this.tempProduct = {};
            $('#addProductModal').modal('hide');
        },
        delProduct() {
            if (this.tempProduct.id) {
                const id = this.tempProduct.id;
                this.product_list.forEach((item, index) => {
                    if (item.id === id) {
                        this.product_list.splice(index, 1);
                        this.tempProduct = {};
                    }
                });
            }
            $('#delProductModal').modal('hide');
        }
    }
});