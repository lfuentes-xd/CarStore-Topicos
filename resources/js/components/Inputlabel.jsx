function InputLabel({ value, className = '', ...props }) {
    return (
        <label {...props} className={`block font-medium text-sm text-gray-700 ` + className}>
            {value}
        </label>
    );
}

export default InputLabel;
