import React, { useState } from 'react';
import { X, MapPin, CreditCard, Banknote, ShieldCheck } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose, cartItems, onOrderPlaced }) {
  if (!isOpen) return null;

  const [address, setAddress] = useState('Flat 402, Green Meadows, Madhapur, Hyderabad - 500081');
  const [paymentMethod, setPaymentMethod] = useState('DEMO_ONLINE');
  const [isPlacing, setIsPlacing] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal >= 299 ? 0 : 40;
  const gst = Math.round(subtotal * 0.05) + 10;
  const total = subtotal + deliveryFee + gst;

  const handlePlaceOrder = () => {
    setIsPlacing(true);
    setTimeout(() => {
      setIsPlacing(false);
      onOrderPlaced({
        orderId: 'FH-' + Math.floor(100000 + Math.random() * 900000),
        items: cartItems,
        total,
        address,
        paymentMethod,
        placedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }, 1000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '540px' }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '800' }}>Confirm Checkout</h2>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              Step 2 of 2: Delivery & Payment Details
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
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Address */}
          <div>
            <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', marginBottom: '8px' }}>
              Delivery Address
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              padding: '14px',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              background: 'var(--bg-main)'
            }}>
              <MapPin size={18} color="var(--primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{
                  width: '100%',
                  border: 'none',
                  background: 'none',
                  outline: 'none',
                  fontSize: '0.88rem',
                  fontWeight: '600'
                }}
              />
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', marginBottom: '8px' }}>
              Select Payment Method
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div
                onClick={() => setPaymentMethod('DEMO_ONLINE')}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  border: paymentMethod === 'DEMO_ONLINE' ? '2px solid var(--primary)' : '1px solid var(--border)',
                  background: paymentMethod === 'DEMO_ONLINE' ? 'var(--primary-light)' : 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <CreditCard size={20} color={paymentMethod === 'DEMO_ONLINE' ? 'var(--primary)' : 'var(--text-secondary)'} />
                <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>Demo Online</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Instant simulated checkout</span>
              </div>

              <div
                onClick={() => setPaymentMethod('CASH_ON_DELIVERY')}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  border: paymentMethod === 'CASH_ON_DELIVERY' ? '2px solid var(--primary)' : '1px solid var(--border)',
                  background: paymentMethod === 'CASH_ON_DELIVERY' ? 'var(--primary-light)' : 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <Banknote size={20} color={paymentMethod === 'CASH_ON_DELIVERY' ? 'var(--primary)' : 'var(--text-secondary)'} />
                <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>Cash on Delivery</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Pay cash at your doorstep</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div style={{
            padding: '14px 18px',
            borderRadius: '12px',
            background: 'var(--bg-main)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.92rem'
          }}>
            <span style={{ color: 'var(--text-secondary)', fontWeight: '600' }}>To Pay:</span>
            <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary)' }}>₹{total}</span>
          </div>

          {/* Place order button */}
          <button
            onClick={handlePlaceOrder}
            disabled={isPlacing}
            style={{
              background: 'var(--primary)',
              color: 'white',
              padding: '14px',
              borderRadius: '12px',
              fontWeight: '800',
              fontSize: '1rem',
              boxShadow: '0 4px 14px rgba(255, 71, 87, 0.35)',
              opacity: isPlacing ? 0.7 : 1
            }}
          >
            {isPlacing ? 'Processing Order...' : `Place Order • ₹${total}`}
          </button>
        </div>
      </div>
    </div>
  );
}
