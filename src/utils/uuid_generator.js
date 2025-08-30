import crypto from "crypto"

export const generateUUID = () => {
    const uuid = crypto.randomUUID()
    return uuid
}