export const validateEmail = (email) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Debe ser un correo válido";
    return "";
}

export const validatePassword = (password) => {
    if (password.length < 4) return "La contraseña debe tener al menos 4 caracteres";
    if (!/[A-Z]/.test(password)) return "La contraseña debe incluir al menos una letra mayúscula";
    if (!/\d/.test(password)) return "La contraseña debe incluir al menos un número";
    return "";
};
