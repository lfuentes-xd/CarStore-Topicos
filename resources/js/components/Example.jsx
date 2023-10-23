import React from 'react';
import ReactDOM from 'react-dom/client';

function Example() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center">
                <div className="w-1/2">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="font-bold text-xl mb-2">Example Component</div>

                        <div className="text-gray-700 text-base">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(
        <React.StrictMode>
            <Example/>
        </React.StrictMode>
    )
}
