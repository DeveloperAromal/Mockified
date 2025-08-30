export const SchemaClassifier = (data) => {
  const classified_data = {};

  data.forEach((item) => {
    for (const key in item) {
      const type = item[key];
      if (!classified_data[type]) {
        classified_data[type] = [];
      }
      classified_data[type].push(key);
    }
  });
  return classified_data;
};

const data = [
  {
    name: "string",
    id: "number",
    address: "string",
  },
];

const classified = SchemaClassifier(data);
console.log(classified);