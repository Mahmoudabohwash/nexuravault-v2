import { runTrigger } from "./trigger.js";


const state = new Proxy(
    {
        dashboard: [],
        products: [],
        orders: [],
        loading: false,
        error: null
    },
    {
        set(target, property, value) {
            target[property] = value;
            runTrigger()
            return true;
        }
    }
);

export default state;