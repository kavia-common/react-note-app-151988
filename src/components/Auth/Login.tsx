import React, { useState } from 'react';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Fake authentication for demo purposes
        await new Promise((res) => setTimeout(res, 1200));

        if (email === 'test@example.com' && password === 'password') {
            alert('Login successful!');
        } else {
            setError('Invalid email or password');
        }

        setLoading(false);
    };

    return (
        <div className="max-w-sm mx-auto mt-12 p-6 bg-white rounded shadow border border-gray-300">
            <h2 className="text-2xl font-semibold mb-4 text-black">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-900" htmlFor="email">
                        Email:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-400 rounded bg-white text-black"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="username"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-gray-900" htmlFor="password">
                        Password:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-400 rounded bg-white text-black"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                </div>
                {error && <div className="mb-4 text-gray-800 bg-gray-100 border border-gray-400 rounded p-2">{error}</div>}
                <button
                    className="w-full py-2 bg-black text-white font-semibold rounded hover:bg-white hover:text-black border border-black disabled:opacity-60"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default Login;
