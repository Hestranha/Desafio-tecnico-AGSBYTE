import PropTypes from 'prop-types';

ButtonSimple.propTypes = {
    typeButton: PropTypes.string.isRequired,
    textButton: PropTypes.string.isRequired,
    actionButton: PropTypes.func,
    color: PropTypes.string,
};

ButtonImg.propTypes = {
    typeButton: PropTypes.string.isRequired,
    textButton: PropTypes.string.isRequired,
    srcButtonImg: PropTypes.string.isRequired,
    altButtonImg: PropTypes.string.isRequired,
    actionButton: PropTypes.func,
};

export function ButtonSimple({ typeButton, textButton, actionButton, color = "primary" }) {
    return (
        <button
            type={typeButton}
            className={`select-none w-full rounded-md ${color === "primary" ? "text-[#effef7] bg-[#0e0e65] hover:bg-[#070734]" : "text-[#1a1acd] bg-[#c3c3ff] hover:bg-[#a6a6d6]"} px-4 py-2 transition-colors duration-300`}
            onClick={actionButton}
        >
            {textButton}
        </button>
    );
}

export function ButtonImg({ typeButton, textButton, srcButtonImg, altButtonImg, actionButton }) {
    return (
        <button
            type={typeButton}
            className="flex justify-center items-center rounded-md bg-gray-200 hover:bg-gray-300 py-2 gap-2 transition-colors duration-300 ease-in-out"
            onClick={actionButton}
        >
            <img className="w-4 h-4" src={srcButtonImg} alt={altButtonImg} />
            {textButton}
        </button>
    );
}