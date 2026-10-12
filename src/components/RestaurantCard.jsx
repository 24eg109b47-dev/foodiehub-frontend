import React from 'react';
import { Star, Clock, MapPin } from 'lucide-react';

export default function RestaurantCard({ restaurant, onSelect }) {
  return (
    <div
      onClick={() => onSelect(restaurant)}
      style={{
        background: 'var(--surface)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      {/* Image container */}
      <div style={{ position: 'relative', height: '190px', overflow: 'hidden' }}>
        <img
          src={restaurant.image}
          alt={restaurant.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {restaurant.badge && (
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            background: 'rgba(15, 23, 42, 0.8)',
            color: 'white',
            backdropFilter: 'blur(6px)',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: '700'
          }}>
            {restaurant.badge}
          </div>
        )}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          right: '12px',
          background: 'white',
          padding: '4px 10px',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '0.8rem',
          fontWeight: '700',
          color: '#16a34a',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
        }}>
          <Star size={14} fill="#16a34a" />
          <span>{restaurant.rating || '4.8'}</span>
        </div>
      </div>

      {/* Info Container */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '6px', color: 'var(--text-primary)' }}>
          {restaurant.name}
        </h3>
        
        <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '14px', lineHeight: 1.4 }}>
          {restaurant.cuisine || 'Multi-Cuisine • Gourmet Foods'}
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 'auto',
          paddingTop: '14px',
          borderTop: '1px solid #f1f5f9',
          fontSize: '0.84rem',
          color: 'var(--text-secondary)',
          fontWeight: '600'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={15} color="var(--primary)" />
            <span>{restaurant.deliveryTime || '25-30 mins'}</span>
          </div>
          <div>
            <span>{restaurant.costForTwo || '₹400 for two'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
