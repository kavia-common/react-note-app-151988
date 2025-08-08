import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="text-center pt-16">
            <h2 className="text-3xl font-semibold mb-6 text-black">Welcome to Derozan</h2>
            <p className="mb-8 text-gray-700">
                Organize your self-care notes in a private, safe space.
            </p>
            <div className="max-w-md mx-auto bg-white rounded shadow p-6 border border-gray-300">
                <h3 className="text-xl font-bold mb-4 text-black">Get Started</h3>
                <Link
                    to="/login"
                    className="inline-block px-6 py-2 bg-black text-white font-semibold rounded hover:bg-white hover:text-black border border-black"
                >
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Home;
