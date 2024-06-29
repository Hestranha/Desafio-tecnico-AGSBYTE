import PropTypes from 'prop-types';

ButtonSimple.propTypes = {
    typeButton: PropTypes.string.isRequired,
    textButton: PropTypes.string.isRequired,
    actionButton: PropTypes.func,
    color: PropTypes.string,
};

export default function ButtonSimple({ typeButton, textButton, actionButton, color = "primary" }) {
    return (
        <button
            type={typeButton}
            className={`select-none w-full rounded-md ${color === "primary" ? "text-[#effef7] bg-[#1a1acd] hover:bg-[#0b0b54]" : "text-[#1a1acd] bg-[#c3c3ff] hover:bg-[#a6a6d6]"} px-4 py-2 transition-colors duration-300`}
            onClick={actionButton}
        >
            {textButton}
        </button>
    );
}