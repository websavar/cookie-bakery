import { orderApi } from "./api";

const order = {
    postOrder: async (bodyFormData) => {
        const result = await orderApi
            .post("service.php", bodyFormData)
            .then(res => console.log(res))
            .catch((e) => console.log("[error]", e));

        return result;
    }
};

export default order;

