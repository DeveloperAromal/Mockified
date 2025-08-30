import { generateUUID } from "../utils/uuid_generator.js";
import { m_names, f_names, last_names } from "../data/name.js";
import { states, streetNames, cities } from "../data/location_data.js";
import { generateUniqueId } from "../utils/unique_id_generator.js";

const generateField = (value) => {
  switch (value.toLowerCase()) {
    case "fname": {
      const f_first = f_names[Math.floor(Math.random() * f_names.length)];
      const f_last = last_names[Math.floor(Math.random() * last_names.length)];
      return `${f_first} ${f_last}`;
    }

    case "mname": {
      const m_first = m_names[Math.floor(Math.random() * m_names.length)];
      const m_last = last_names[Math.floor(Math.random() * last_names.length)];
      return `${m_first} ${m_last}`;
    }

    case "name": {
      const isMale = Math.random() < 0.5;
      const first = isMale
        ? m_names[Math.floor(Math.random() * m_names.length)]
        : f_names[Math.floor(Math.random() * f_names.length)];
      const last = last_names[Math.floor(Math.random() * last_names.length)];
      return `${first} ${last}`;
    }

    case "address": {
      const street =
        streetNames[Math.floor(Math.random() * streetNames.length)];
      const city = cities[Math.floor(Math.random() * cities.length)];
      const state = states[Math.floor(Math.random() * states.length)];
      return `${street}, ${city}, ${state}`;
    }

    case "uuid":
      return generateUUID();

    case "int4":
      return generateUniqueId(4);

    case "int6":
      return generateUniqueId(6);

    case "phonenumber":
      return generateUniqueId(10);

    default:
      return null;
  }
};

export const generateData = (schema, range = 1) => {
  const result = [];
    const schemaDef = Array.isArray(schema) ? schema[0] : schema;
    
  for (let i = 0; i < range; i++) {
    const row = {};

    for (const key in schemaDef) {
      const type = schemaDef[key];

      row[key] = generateField(type);
    }
    result.push(row);
  }
  return result;
};
