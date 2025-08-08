import React from 'react';

const About: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded shadow border border-gray-300">
            <h2 className="text-2xl font-semibold mb-4 text-black">About Derozan</h2>
            <p className="text-gray-700 mb-3">
                Welcome to Derozan, the self-care note taking application. Create an account, make private entries and
                rate your own mood. Over time, you can see how your mood is shifting and track how you've grown over
                time.
            </p>
        </div>
    );
};

export default About;
