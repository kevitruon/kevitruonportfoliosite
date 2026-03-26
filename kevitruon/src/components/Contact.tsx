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
    const isDark = theme === 'dark';

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target as HTMLFormElement,
                import.meta.env.VITE_EMAILJS_USER_ID
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

    const sectionBg = isDark ? '#111827' : '#ffffff';
    const inputBg = isDark ? 'rgba(31,41,55,0.8)' : 'rgba(248,250,252,1)';
    const inputBorder = isDark ? 'rgba(99,102,241,0.2)' : 'rgba(0,0,0,0.12)';
    const labelColor = isDark ? '#D1D5DB' : '#374151';
    const inputColor = isDark ? '#F9FAFB' : '#111827';

    const contactInfo = [
        { icon: '📧', label: 'Email', value: 'kevitruon@gmail.com', href: 'mailto:kevitruon@gmail.com' },
        { icon: '💼', label: 'LinkedIn', value: '/in/kevitruon', href: 'https://www.linkedin.com/in/kevitruon/' },
        { icon: '🐙', label: 'GitHub', value: 'github.com/kevitruon', href: 'https://github.com/kevitruon' },
    ];

    return (
        <div
            id="Contact"
            style={{
                background: sectionBg,
                padding: '5rem 0',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: isDark
                    ? 'radial-gradient(at 80% 80%, rgba(99,102,241,0.07) 0, transparent 50%)'
                    : 'radial-gradient(at 80% 80%, rgba(99,102,241,0.04) 0, transparent 50%)',
            }} />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <span
                        className="text-sm font-semibold tracking-widest uppercase mb-3 block"
                        style={{ color: '#6366F1' }}
                    >
                        Get In Touch
                    </span>
                    <h2
                        className="text-4xl md:text-5xl font-extrabold mb-4"
                        style={{ color: isDark ? '#F9FAFB' : '#111827' }}
                    >
                        Let's{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #6366F1, #A78BFA)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Connect
                        </span>
                    </h2>
                    <p style={{ color: isDark ? 'rgba(255,255,255,0.5)' : '#6B7280', maxWidth: 400, margin: '0 auto' }}>
                        Open to opportunities, collaborations, or just a chat about tech.
                    </p>
                    <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)', marginTop: '2rem' }} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

                    {/* Contact info sidebar */}
                    <div className="md:col-span-2 flex flex-col justify-center gap-4">
                        <p
                            className="text-base mb-2 leading-relaxed"
                            style={{ color: isDark ? 'rgba(255,255,255,0.65)' : '#6B7280' }}
                        >
                            I'm currently open to new opportunities. Whether you have a question,
                            a project idea, or just want to say hi — my inbox is always open!
                        </p>

                        {contactInfo.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '1rem 1.25rem',
                                    background: isDark ? 'rgba(31,41,55,0.7)' : 'rgba(248,250,252,0.9)',
                                    border: `1px solid ${isDark ? 'rgba(99,102,241,0.15)' : 'rgba(0,0,0,0.07)'}`,
                                    borderRadius: '0.875rem',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                    backdropFilter: 'blur(8px)',
                                    WebkitBackdropFilter: 'blur(8px)',
                                }}
                                onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.transform = 'translateX(4px)';
                                    el.style.borderColor = 'rgba(99,102,241,0.4)';
                                    el.style.boxShadow = '0 8px 20px rgba(99,102,241,0.1)';
                                }}
                                onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.transform = '';
                                    el.style.borderColor = isDark ? 'rgba(99,102,241,0.15)' : 'rgba(0,0,0,0.07)';
                                    el.style.boxShadow = '';
                                }}
                            >
                                <span style={{
                                    width: 40, height: 40, borderRadius: '0.625rem',
                                    background: 'rgba(99,102,241,0.12)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.125rem', flexShrink: 0,
                                }}>
                                    {item.icon}
                                </span>
                                <div>
                                    <div style={{ fontSize: 11, fontWeight: 600, color: '#6366F1', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>
                                        {item.label}
                                    </div>
                                    <div style={{ fontSize: '0.8125rem', color: isDark ? '#D1D5DB' : '#374151', fontWeight: 500 }}>
                                        {item.value}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Form */}
                    <div className="md:col-span-3">
                        <div
                            style={{
                                background: isDark ? 'rgba(17,24,39,0.8)' : 'rgba(255,255,255,0.9)',
                                border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)'}`,
                                borderRadius: '1.25rem',
                                padding: '2rem',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                boxShadow: isDark ? '0 8px 30px rgba(0,0,0,0.4)' : '0 8px 30px rgba(0,0,0,0.08)',
                            }}
                        >
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                {[
                                    { id: 'name', label: 'Name', type: 'text', value: name, setter: setName, placeholder: 'Your name' },
                                    { id: 'email', label: 'Email', type: 'email', value: email, setter: setEmail, placeholder: 'your@email.com' },
                                ].map((field) => (
                                    <div key={field.id}>
                                        <label
                                            htmlFor={field.id}
                                            style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: labelColor, marginBottom: '0.5rem' }}
                                        >
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type}
                                            id={field.id}
                                            name={field.id}
                                            value={field.value}
                                            onChange={(e) => field.setter(e.target.value)}
                                            placeholder={field.placeholder}
                                            required
                                            style={{
                                                width: '100%',
                                                background: inputBg,
                                                border: '1px solid ' + inputBorder,
                                                borderRadius: '0.625rem',
                                                padding: '0.75rem 1rem',
                                                color: inputColor,
                                                fontSize: '0.9375rem',
                                                outline: 'none',
                                                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                                                boxSizing: 'border-box',
                                            }}
                                            onFocus={e => {
                                                (e.target as HTMLInputElement).style.borderColor = '#6366F1';
                                                (e.target as HTMLInputElement).style.boxShadow = '0 0 0 3px rgba(99,102,241,0.15)';
                                            }}
                                            onBlur={e => {
                                                (e.target as HTMLInputElement).style.borderColor = inputBorder;
                                                (e.target as HTMLInputElement).style.boxShadow = '';
                                            }}
                                        />
                                    </div>
                                ))}

                                <div>
                                    <label
                                        htmlFor="message"
                                        style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: labelColor, marginBottom: '0.5rem' }}
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Tell me about your project or opportunity..."
                                        rows={5}
                                        required
                                        style={{
                                            width: '100%',
                                            background: inputBg,
                                            border: '1px solid ' + inputBorder,
                                            borderRadius: '0.625rem',
                                            padding: '0.75rem 1rem',
                                            color: inputColor,
                                            fontSize: '0.9375rem',
                                            outline: 'none',
                                            resize: 'vertical',
                                            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                                            boxSizing: 'border-box',
                                        }}
                                        onFocus={e => {
                                            (e.target as HTMLTextAreaElement).style.borderColor = '#6366F1';
                                            (e.target as HTMLTextAreaElement).style.boxShadow = '0 0 0 3px rgba(99,102,241,0.15)';
                                        }}
                                        onBlur={e => {
                                            (e.target as HTMLTextAreaElement).style.borderColor = inputBorder;
                                            (e.target as HTMLTextAreaElement).style.boxShadow = '';
                                        }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    style={{
                                        width: '100%',
                                        padding: '0.875rem',
                                        background: isSubmitting ? 'rgba(99,102,241,0.5)' : 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                                        color: 'white',
                                        fontWeight: 700,
                                        fontSize: '0.9375rem',
                                        borderRadius: '0.75rem',
                                        border: 'none',
                                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: isSubmitting ? 'none' : '0 4px 15px rgba(99,102,241,0.4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                    }}
                                    onMouseEnter={e => {
                                        if (!isSubmitting) {
                                            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                                            (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 25px rgba(99,102,241,0.55)';
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.transform = '';
                                        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 15px rgba(99,102,241,0.4)';
                                    }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg style={{ animation: 'spin 1s linear infinite' }} width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12a8 8 0 018-8" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>

                            {submitStatus === 'success' && (
                                <div style={{
                                    marginTop: '1rem',
                                    padding: '0.875rem 1rem',
                                    background: 'rgba(16,185,129,0.1)',
                                    border: '1px solid rgba(16,185,129,0.3)',
                                    borderRadius: '0.625rem',
                                    color: '#34D399',
                                    fontWeight: 500,
                                    fontSize: '0.9rem',
                                    textAlign: 'center',
                                }}>
                                    ✅ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div style={{
                                    marginTop: '1rem',
                                    padding: '0.875rem 1rem',
                                    background: 'rgba(239,68,68,0.1)',
                                    border: '1px solid rgba(239,68,68,0.3)',
                                    borderRadius: '0.625rem',
                                    color: '#F87171',
                                    fontWeight: 500,
                                    fontSize: '0.9rem',
                                    textAlign: 'center',
                                }}>
                                    ❌ Something went wrong. Please try again or email me directly.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
