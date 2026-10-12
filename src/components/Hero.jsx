import React from 'react';
import { Search, Sparkles, Clock, ShieldCheck, Flame } from 'lucide-react';

export default function Hero({ searchTerm, onSearchChange }) {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #2f3542 0%, #1e272e 100%)',
      color: 'white',
      padding: '60px 0 70px',
      borderRadius: '0 0 32px 32px',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: '40px'
    }}>
      {/* Decorative background glow */}
      <div style={{
        position: 'absolute',
        top: '-40%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255, 71, 87, 0.25) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '680px' }}>
          {/* Promo Tag */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            padding: '6px 14px',
            borderRadius: '9999px',
            fontSize: '0.82rem',
            fontWeight: '700',
            color: '#ffa502',
            marginBottom: '20px'
          }}>
            <Sparkles size={14} />
            <span>SPECIAL OFFER: Use code FOODIE20 for 20% off</span>
          </div>

          <h1 style={{
            fontSize: '2.8rem',
            fontWeight: '800',
            lineHeight: 1.18,
            letterSpacing: '-1px',
            marginBottom: '16px'
          }}>
            Delicious meals delivered straight to your door.
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#cbd5e1',
            marginBottom: '32px',
            lineHeight: 1.5
          }}>
            Explore top restaurants, crave-worthy biryanis, gourmet burgers, and fresh local flavors in minutes.
          </p>

          {/* Search bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'white',
            borderRadius: '16px',
            padding: '8px 16px',
            boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
            maxWidth: '560px'
          }}>
            <Search size={22} color="var(--text-secondary)" style={{ marginRight: '12px' }} />
            <input
              type="text"
              placeholder="Search for restaurants, cuisines, or dishes..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                fontSize: '1rem',
                color: 'var(--text-primary)',
                fontWeight: '500'
              }}
            />
          </div>

          {/* Value Props */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            marginTop: '36px',
            fontSize: '0.85rem',
            color: '#94a3b8'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={16} color="var(--primary)" />
              <span>30 Min Delivery</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} color="#2ed573" />
              <span>100% Hygienic</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Flame size={16} color="#ffa502" />
              <span>Hot & Fresh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
