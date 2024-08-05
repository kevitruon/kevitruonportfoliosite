import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
    const { theme } = useTheme();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID!,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
                e.target as HTMLFormElement,
                process.env.REACT_APP_EMAILJS_USER_ID!
            );
            setSubmitStatus('success');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={`min-h-screen py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`} id="Contact">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-3xl font-bold text-center mb-12 ${
            theme === "dark" ? "text-white" : "text-primary"
          }`}>Contact Me</h2>
                <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} shadow-lg rounded-lg p-8`}>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`mt-1 block w-full rounded-md ${theme === 'dark' ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-900'} border border-transparent focus:border-primary focus:ring-primary focus:ring-opacity-50`}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`mt-1 block w-full rounded-md ${theme === 'dark' ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-900'} border border-transparent focus:border-primary focus:ring-primary focus:ring-opacity-50`}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={4}
                                className={`mt-1 block w-full rounded-md ${theme === 'dark' ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-900'} border border-transparent focus:border-primary focus:ring-primary focus:ring-opacity-50`}
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${theme === 'dark' ? 'bg-primary hover:bg-primary-dark' : 'bg-accent hover:bg-accent-dark'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                    {submitStatus === 'success' && (
                        <div className="mt-4 text-green-600 text-center">Message sent successfully!</div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="mt-4 text-red-600 text-center">An error occurred. Please try again.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
