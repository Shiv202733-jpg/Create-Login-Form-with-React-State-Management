// File: src/components/LoginForm.jsx
// A simple React login form using useState. Default export component.
// Copy this file into src/components/LoginForm.jsx and import it in src/App.jsx

import React, { useState } from 'react';

export default function LoginForm() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (!form.username.trim() || !form.password) {
      setError('Both username and password are required.');
      console.warn('Validation failed: empty fields');
      return;
    }

    // Successful submit — log to console (for assignment/testing)
    console.log('Login submitted:', { username: form.username, password: form.password });

    // reset for demo purposes (optional)
    setForm({ username: '', password: '' });
    setError('');
  }

  return (
    <div style={{ maxWidth: 420, margin: '48px auto', fontFamily: 'system-ui, -apple-system, Roboto, sans-serif' }}>
      <h2 style={{ marginBottom: 12 }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: 8 }}>
          <div style={{ fontSize: 13, marginBottom: 6 }}>Username</div>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter username"
            style={{ width: '100%', padding: '8px 10px', borderRadius: 6, border: '1px solid #ccc' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: 12 }}>
          <div style={{ fontSize: 13, marginBottom: 6 }}>Password</div>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
            style={{ width: '100%', padding: '8px 10px', borderRadius: 6, border: '1px solid #ccc' }}
          />
        </label>

        {error && (
          <div role="alert" style={{ color: '#b90000', marginBottom: 12 }}>{error}</div>
        )}

        <button
          type="submit"
          style={{ padding: '8px 14px', borderRadius: 8, border: 'none', cursor: 'pointer', background: '#2563eb', color: 'white' }}
        >
          Submit
        </button>

        {submitted && !error && (
          <div style={{ marginTop: 12, color: '#065f46' }}>Form submitted — check console for logged data.</div>
        )}
      </form>
    </div>
  );
}

/*
Quick notes / usage:
- This component uses useState to track username & password and shows a validation message
  when either field is empty on submit.
- It logs the username & password object to the browser console on successful submit (for testing only).
- To include in your app, import into src/App.jsx: `import LoginForm from './components/LoginForm'` and render <LoginForm />.
*/
