import React from 'react';
import { UtensilsCrossed, Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: '#1e293b',
      color: '#cbd5e1',
      padding: '50px 0 30px',
      marginTop: '80px',
      borderTop: '1px solid rgba(255,255,255,0.08)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Brand info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <UtensilsCrossed size={18} />
              </div>
              <span style={{ fontSize: '1.3rem', fontWeight: '800', color: 'white' }}>
                Foodie<span style={{ color: 'var(--primary)' }}>Hub</span>
              </span>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.6, maxWidth: '320px' }}>
              A full-stack, enterprise-grade online food ordering and restaurant management platform with real-time order tracking and secure role-based access.
            </p>
          </div>

          {/* Academic Info */}
          <div>
            <h4 style={{ color: 'white', fontSize: '0.95rem', fontWeight: '700', marginBottom: '14px' }}>
              Academic Project
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: '#94a3b8' }}>
              <li>B.Tech Computer Science & Engineering</li>
              <li>Anurag University</li>
              <li>Architecture: Decoupled REST & SPA</li>
              <li>Backend: Spring Boot 3 + MySQL 8</li>
              <li>Frontend: React 19 + Vite</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', fontSize: '0.95rem', fontWeight: '700', marginBottom: '14px' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: '#94a3b8' }}>
              <li>Browse Restaurants</li>
              <li>Special Discount Offers</li>
              <li>Order Tracking</li>
              <li>Customer Support</li>
            </ul>
          </div>

          {/* Developer */}
          <div>
            <h4 style={{ color: 'white', fontSize: '0.95rem', fontWeight: '700', marginBottom: '14px' }}>
              Developer
            </h4>
            <a
              href="https://github.com/24eg109b47-dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                padding: '8px 16px',
                borderRadius: '8px',
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.86rem',
                fontWeight: '600'
              }}
            >
              <Github size={16} />
              <span>@24eg109b47-dev</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.82rem',
          color: '#64748b',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
            © 2026 FoodieHub. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Built with <Heart size={14} color="var(--primary)" fill="var(--primary)" /> by 24eg109b47-dev
          </div>
        </div>
      </div>
    </footer>
  );
}
