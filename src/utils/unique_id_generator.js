import crypto from "crypto";

export const generateUniqueId = (length) => {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;

  return crypto.randomInt(min, max + 1);
};