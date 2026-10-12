import React, { useState } from 'react';
import { X, Lock, Mail, User as UserIcon, Phone, Shield } from 'lucide-react';
import { loginUser, registerUser } from '../services/api';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  if (!isOpen) return null;

  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'login') {
        const res = await loginUser(email, password);
        if (res.success) {
          onLoginSuccess(res.user);
          onClose();
        } else {
          setError(res.error || 'Invalid credentials');
        }
      } else {
        const res = await registerUser({ name, email, password, phone, role: 'ROLE_CUSTOMER' });
        if (res.success) {
          onLoginSuccess(res.user);
          onClose();
        } else {
          setError(res.error || 'Registration failed');
        }
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemo = (demoEmail, demoPass) => {
    setEmail(demoEmail);
    setPassword(demoPass);
    loginUser(demoEmail, demoPass).then((res) => {
      if (res.success) {
        onLoginSuccess(res.user);
        onClose();
      }
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '460px' }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: '800' }}>
              {mode === 'login' ? 'Sign In to FoodieHub' : 'Create an Account'}
            </h2>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              {mode === 'login' ? 'Welcome back! Choose a demo role or login.' : 'Join to place orders and track delivery.'}
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--bg-main)'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '24px' }}>
          {error && (
            <div style={{
              background: '#fee2e2',
              color: '#dc2626',
              padding: '10px 14px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: '600',
              marginBottom: '16px'
            }}>
              {error}
            </div>
          )}

          {/* Quick Demo Shortcuts */}
          {mode === 'login' && (
            <div style={{
              background: 'var(--bg-main)',
              borderRadius: '12px',
              padding: '14px',
              marginBottom: '20px',
              border: '1px solid var(--border)'
            }}>
              <span style={{ display: 'block', fontSize: '0.78rem', fontWeight: '800', color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase' }}>
                🚀 Quick 1-Click Demo Login
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => handleQuickDemo('customer@foodiehub.com', 'customer123')}
                  style={{
                    flex: 1,
                    background: 'white',
                    border: '1px solid var(--border)',
                    padding: '8px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: '700'
                  }}
                >
                  Customer
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDemo('owner@foodiehub.com', 'owner123')}
                  style={{
                    flex: 1,
                    background: 'white',
                    border: '1px solid var(--border)',
                    padding: '8px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: '700'
                  }}
                >
                  Owner
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDemo('admin@foodiehub.com', 'admin123')}
                  style={{
                    flex: 1,
                    background: 'white',
                    border: '1px solid var(--border)',
                    padding: '8px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: '700'
                  }}
                >
                  Admin
                </button>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {mode === 'register' && (
              <>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '6px' }}>Full Name</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--border)', padding: '10px 14px', borderRadius: '10px' }}>
                    <UserIcon size={16} color="var(--text-secondary)" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.9rem' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '6px' }}>Phone Number</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--border)', padding: '10px 14px', borderRadius: '10px' }}>
                    <Phone size={16} color="var(--text-secondary)" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.9rem' }}
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '6px' }}>Email Address</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--border)', padding: '10px 14px', borderRadius: '10px' }}>
                <Mail size={16} color="var(--text-secondary)" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.9rem' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '6px' }}>Password</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--border)', padding: '10px 14px', borderRadius: '10px' }}>
                <Lock size={16} color="var(--text-secondary)" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.9rem' }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: '10px',
                background: 'var(--primary)',
                color: 'white',
                padding: '12px',
                borderRadius: '10px',
                fontWeight: '800',
                fontSize: '0.95rem',
                boxShadow: '0 4px 14px rgba(255, 71, 87, 0.35)',
                opacity: loading ? 0.7 : 1
              }}
            >
              {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Toggle mode */}
          <div style={{ textAlign: 'center', marginTop: '18px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            {mode === 'login' ? (
              <span>
                Don't have an account?{' '}
                <button
                  onClick={() => setMode('register')}
                  style={{ color: 'var(--primary)', fontWeight: '700' }}
                >
                  Register here
                </button>
              </span>
            ) : (
              <span>
                Already have an account?{' '}
                <button
                  onClick={() => setMode('login')}
                  style={{ color: 'var(--primary)', fontWeight: '700' }}
                >
                  Sign in here
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
