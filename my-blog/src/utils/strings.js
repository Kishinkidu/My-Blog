//funcion apra validar si es un correo
export function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
}
export function isPasswordValid(password) {
    return password.length >= 8
}