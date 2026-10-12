import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Clock, ChefHat, Bike, Home } from 'lucide-react';

const STEPS = [
  { label: 'Order Placed', status: 'PENDING', icon: CheckCircle2 },
  { label: 'Confirmed', status: 'CONFIRMED', icon: Clock },
  { label: 'Food Preparing', status: 'PREPARING', icon: ChefHat },
  { label: 'Out for Delivery', status: 'OUT_FOR_DELIVERY', icon: Bike },
  { label: 'Delivered', status: 'DELIVERED', icon: Home }
];

export default function OrderTrackerModal({ order, onClose }) {
  if (!order) return null;

  const [currentStepIndex, setCurrentStepIndex] = useState(1);

  // Simulate progress
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStepIndex((prev) => (prev < STEPS.length - 1 ? prev + 1 : prev));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '520px' }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '800' }}>Order Tracking</h2>
              <span className="badge badge-success">Live Status</span>
            </div>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              Order ID: #{order.orderId}
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
          {/* Estimated arrival banner */}
          <div style={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: 'white',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <span style={{ fontSize: '0.8rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Estimated Delivery
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>25 - 30 mins</h3>
              <p style={{ fontSize: '0.82rem', opacity: 0.9, marginTop: '2px' }}>
                Rider will reach: {order.address.split(',')[0]}
              </p>
            </div>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Bike size={28} />
            </div>
          </div>

          {/* Stepper Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingLeft: '8px' }}>
            {STEPS.map((step, idx) => {
              const isDone = idx <= currentStepIndex;
              const isCurrent = idx === currentStepIndex;
              const Icon = step.icon;

              return (
                <div key={step.status} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: isDone ? 'var(--primary)' : 'var(--bg-main)',
                    color: isDone ? 'white' : 'var(--text-muted)',
                    border: isDone ? 'none' : '2px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.3s'
                  }}>
                    <Icon size={18} />
                  </div>

                  <div>
                    <h4 style={{
                      fontSize: '0.94rem',
                      fontWeight: isCurrent ? '800' : '600',
                      color: isDone ? 'var(--text-primary)' : 'var(--text-muted)'
                    }}>
                      {step.label}
                    </h4>
                    {isCurrent && (
                      <span style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: '700' }}>
                        In Progress...
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order items preview */}
          <div style={{
            marginTop: '28px',
            paddingTop: '18px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.88rem'
          }}>
            <span style={{ color: 'var(--text-secondary)' }}>
              {order.items.length} item(s) ordered
            </span>
            <span style={{ fontWeight: '800', color: 'var(--text-primary)' }}>
              Total Paid: ₹{order.total}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
