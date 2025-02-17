import PropTypes from 'prop-types';
import React, { useState } from "react";

InputSimple.propTypes = {
    typeInput: PropTypes.string.isRequired,
    maxLengthInput: PropTypes.number,
    textPlaceHolderInput: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
};

export default function InputSimple({ maxLengthInput, textPlaceHolderInput, typeInput, onChange, error }) {
    const [value, setValue] = useState(''); // Obtener y mostrar el texto ingresado por el uusario
    const [reveal, setReveal] = useState(false); // Cambiar la visibilidad de la contraseña (mostrar y ocultar)

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        onChange(newValue);
    };

    const togglePasswordVisibility = () => {
        setReveal(!reveal)
    }

    return (
        <div>
            <div className={`relative${error && " animate-shake"}`}>
                <input
                    type={typeInput === "password" ? (reveal ? "text" : "password") : typeInput}
                    maxLength={maxLengthInput}
                    placeholder={textPlaceHolderInput}
                    className={`w-full rounded-md border text-sm lg:text-base border-[#070734] ${error ? "bg-red-400 placeholder:text-white" : "placeholder:text-[#070734] "} focus:ring-[#070734] focus:border-[#070734] px-3 py-2 outline-none focus:shadow-outline-input-blue`}
                    value={value}
                    onChange={handleChange}
                    required
                />
                {typeInput === "password" &&
                    <React.Fragment>
                        {reveal ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#070734"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                                <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#070734"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                            </svg>
                        )}
                    </React.Fragment>
                }
            </div>

            {error ? (
                <p className="text-xs text-white">
                    *{error}
                </p>
            ) : (
                <p className="opacity-0 text-xs">
                    ㅤ
                </p>
            )}
        </div>
    );
}