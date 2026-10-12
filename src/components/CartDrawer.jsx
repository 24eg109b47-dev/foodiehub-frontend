import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  restaurant,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  onProceedToCheckout
}) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal >= 299 ? 0 : 40;
  const platformFee = subtotal > 0 ? 10 : 0;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + platformFee + gst;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ justifyContent: 'flex-end', padding: 0 }}>
      <div
        style={{
          width: '100%',
          maxWidth: '440px',
          height: '100vh',
          background: 'white',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          flexDirection: 'column',
          animation: 'slideInRight 0.25s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '800' }}>Your Order</h2>
            {restaurant && (
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                From: {restaurant.name}
              </span>
            )}
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
              background: 'var(--bg-main)',
              color: 'var(--text-secondary)'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)' }}>
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'var(--primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'var(--primary)'
              }}>
                <ShoppingBag size={32} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px' }}>
                Your cart is empty
              </h3>
              <p style={{ fontSize: '0.88rem' }}>
                Add dishes from your favorite restaurants to start ordering.
              </p>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      background: 'var(--bg-main)',
                      border: '1px solid var(--border)'
                    }}
                  >
                    <div>
                      <h4 style={{ fontSize: '0.92rem', fontWeight: '700', marginBottom: '4px' }}>
                        {item.name}
                      </h4>
                      <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--primary)' }}>
                        ₹{item.price * item.quantity}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: 'white',
                        border: '1px solid var(--border)',
                        borderRadius: '9999px',
                        padding: '4px 8px',
                        gap: '8px'
                      }}>
                        <button
                          onClick={() => onUpdateQty(item.id, -1)}
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <Minus size={14} />
                        </button>
                        <span style={{ fontSize: '0.85rem', fontWeight: '800', minWidth: '16px', textAlign: 'center' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQty(item.id, 1)}
                          style={{ color: 'var(--primary)' }}
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        style={{ color: '#ef4444', padding: '6px' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bill Details */}
              <div style={{
                background: 'var(--bg-main)',
                borderRadius: '14px',
                padding: '18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontSize: '0.88rem',
                border: '1px solid var(--border)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                  <span>Item Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                  <span>Delivery Fee</span>
                  <span>{deliveryFee === 0 ? <strong style={{ color: '#16a34a' }}>FREE</strong> : `₹${deliveryFee}`}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                  <span>Platform & Govt Taxes (5%)</span>
                  <span>₹{platformFee + gst}</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingTop: '10px',
                  borderTop: '1px solid var(--border)',
                  fontSize: '1.05rem',
                  fontWeight: '800',
                  color: 'var(--text-primary)'
                }}>
                  <span>Total Amount</span>
                  <span>₹{total}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div style={{ padding: '20px 24px', borderTop: '1px solid var(--border)', display: 'flex', gap: '12px' }}>
            <button
              onClick={onClearCart}
              style={{
                padding: '12px 18px',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                fontWeight: '700',
                color: 'var(--text-secondary)',
                fontSize: '0.88rem'
              }}
            >
              Clear
            </button>
            <button
              onClick={onProceedToCheckout}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: 'var(--primary)',
                color: 'white',
                padding: '12px',
                borderRadius: '12px',
                fontWeight: '800',
                fontSize: '0.95rem',
                boxShadow: '0 4px 14px rgba(255, 71, 87, 0.35)'
              }}
            >
              <span>Checkout (₹{total})</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
