import React from 'react';
import { ShoppingBag, User, LogOut, MapPin, UtensilsCrossed } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, user, onOpenAuth, onLogout }) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '74px'
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', cursor: 'pointer' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #ff4757, #ff6b81)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              boxShadow: '0 4px 12px rgba(255, 71, 87, 0.35)'
            }}>
              <UtensilsCrossed size={22} />
            </div>
            <div>
              <span style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
                Foodie<span style={{ color: 'var(--primary)' }}>Hub</span>
              </span>
            </div>
          </div>

          {/* Location selector */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            background: 'var(--bg-main)',
            borderRadius: '9999px',
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            fontWeight: '600'
          }}>
            <MapPin size={15} color="var(--primary)" />
            <span>Hyderabad, Telangana</span>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              padding: '10px 18px',
              borderRadius: '9999px',
              fontWeight: '700',
              fontSize: '0.9rem',
              color: 'var(--text-primary)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <ShoppingBag size={18} color="var(--primary)" />
            <span>Cart</span>
            {cartCount > 0 && (
              <span style={{
                background: 'var(--primary)',
                color: 'white',
                fontSize: '0.75rem',
                fontWeight: '800',
                padding: '2px 8px',
                borderRadius: '9999px',
                marginLeft: '2px'
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* User / Auth */}
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'var(--primary-light)',
                borderRadius: '9999px',
                fontWeight: '700',
                fontSize: '0.88rem',
                color: 'var(--primary)'
              }}>
                <User size={16} />
                <span>{user.name.split(' ')[0]}</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.8, textTransform: 'uppercase' }}>
                  ({user.role === 'ROLE_ADMIN' ? 'Admin' : user.role === 'ROLE_RESTAURANT_OWNER' ? 'Owner' : 'Customer'})
                </span>
              </div>
              <button
                onClick={onLogout}
                title="Log Out"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)'
                }}
              >
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--primary)',
                color: 'white',
                padding: '10px 22px',
                borderRadius: '9999px',
                fontWeight: '700',
                fontSize: '0.9rem',
                boxShadow: '0 4px 14px rgba(255, 71, 87, 0.35)'
              }}
            >
              <User size={16} />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
