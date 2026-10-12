import React from 'react';
import { X, Star, Clock, MapPin, Plus, Check } from 'lucide-react';

export default function MenuModal({ restaurant, onClose, onAddToCart, cartItems }) {
  if (!restaurant) return null;

  const menu = restaurant.menu || [];

  const getItemCartQty = (itemId) => {
    const item = cartItems.find(i => i.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '720px' }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
          <img
            src={restaurant.image}
            alt={restaurant.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 80%)'
          }} />
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              background: 'rgba(0,0,0,0.5)',
              color: 'white',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={18} />
          </button>
          <div style={{ position: 'absolute', bottom: '16px', left: '20px', color: 'white' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '4px' }}>
              {restaurant.name}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.85rem', opacity: 0.9 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Star size={14} fill="#f59e0b" color="#f59e0b" />
                <span>{restaurant.rating || '4.8'}</span>
              </div>
              <span>•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={14} />
                <span>{restaurant.deliveryTime || '25-30 mins'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu list */}
        <div style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '18px', color: 'var(--text-primary)' }}>
            Recommended Menu Items ({menu.length})
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {menu.map((item) => {
              const qty = getItemCartQty(item.id);
              return (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border)',
                    background: 'var(--surface)'
                  }}
                >
                  <div style={{ flex: 1, paddingRight: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span style={{
                        display: 'inline-block',
                        width: '14px',
                        height: '14px',
                        border: item.isVeg ? '2px solid #16a34a' : '2px solid #dc2626',
                        borderRadius: '3px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          top: '2px',
                          left: '2px',
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: item.isVeg ? '#16a34a' : '#dc2626'
                        }} />
                      </span>
                      <span style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--text-primary)' }}>
                        {item.name}
                      </span>
                    </div>

                    <div style={{ fontWeight: '800', fontSize: '0.98rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
                      ₹{item.price}
                    </div>

                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                      {item.description}
                    </p>
                  </div>

                  {/* Add button */}
                  <div>
                    <button
                      onClick={() => onAddToCart(restaurant, item)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: qty > 0 ? '#10b981' : 'var(--primary)',
                        color: 'white',
                        padding: '10px 18px',
                        borderRadius: '9999px',
                        fontWeight: '700',
                        fontSize: '0.88rem',
                        boxShadow: 'var(--shadow-sm)',
                        minWidth: '94px',
                        justifyContent: 'center'
                      }}
                    >
                      {qty > 0 ? (
                        <>
                          <Check size={16} />
                          <span>Added ({qty})</span>
                        </>
                      ) : (
                        <>
                          <Plus size={16} />
                          <span>Add</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
