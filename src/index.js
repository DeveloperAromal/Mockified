import { generateData } from "./generator/generate_dummy_data.js";

export const Mockified = (data, range) => {
    return generateData(data, range)
};
