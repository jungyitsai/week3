var app = new Vue({
    el: "#app",
    data: {
        product_list: [
            {
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
    },
    methods: {

    }
});