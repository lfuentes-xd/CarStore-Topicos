import { Link } from 'react-router-dom';

function PrimaryButton({ className = '', disabled, children, to, ...props }) {
    return (
        <Link
            {...props}
            to={to}
            className={
                `inline-flex items-center justify-center px-4 py-2 bg-black border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled ? 'opacity-50 cursor-not-allowed' : ''
                } ` + className
            }
            onClick={event => {
                if (disabled) {
                    event.preventDefault();
                }
            }}
        >
            {children}
        </Link>
    );
}

export default PrimaryButton;
