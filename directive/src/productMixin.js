export const productMixin = {

    data() {
        return {
            msg: "Hello everyone ",
            products: ["Iphone", "Nokia", "Samsum", "Sony", "HTC"],
            filterProdut: "",
        };
    },
    filters: {
        toLowerCase(text) {
            return text.toLowerCase();
        },
    },
    computed: {
        filterProduct() {
            return this.products.filter((x) => {
                return x.match(this.filterProdut);
            });
        },
    },
};