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
            name={`button-${textButton.replace(/\s+/g, "-")}`}
            className={`select-none w-full rounded-md ${color !== "secondary" ? "text-[#efeffe] bg-[#0e0e65] hover:bg-[#070734]" : "bg-[#0b0b25] hover:bg-[#0f0f6e] text-[#efeffe] dark:text-[#0e0e65] dark:bg-[#efeffe] dark:hover:bg-[#b8b8ef]"} px-4 py-2 transition-colors duration-300`}
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
            name={`button-${textButton.replace(/\s+/g, "-")}`}
            className="flex justify-center items-center rounded-md bg-gray-200 hover:bg-gray-400 py-2 gap-2 transition-colors duration-300 ease-in-out"
            onClick={actionButton}
        >
            <img
                className="w-4 h-4"
                src={srcButtonImg}
                alt={altButtonImg}
            />
            {textButton}
        </button>
    );
}