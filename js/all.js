var app = new Vue({
    el: "#app",
    data: {
        product_list: [
            {
                title: "Switch",
                category: "掌上主機",
                content: "商品敘述 - string",
                description: "商品說明 - string",
                imageUrl: "商品圖片 - string",
                enabled: true,
                origin_price: 20000,
                price: 9980,
                unit: "單位 - string",
            },
            {
                title: "PS5 Wifi",
                category: "主機",
                content: "商品敘述 - string",
                description: "商品說明 - string",
                imageUrl: "商品圖片 - string",
                enabled: false,
                origin_price: 29999,
                price: 9487,
                unit: "單位 - string",
            },
        ],
    },
    methods: {

    }
});