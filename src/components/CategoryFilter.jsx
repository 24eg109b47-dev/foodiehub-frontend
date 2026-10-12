import React from 'react';

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div style={{ marginBottom: '36px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: '800', letterSpacing: '-0.5px' }}>
          What's on your mind?
        </h2>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
          Select category to filter
        </span>
      </div>

      <div style={{
        display: 'flex',
        gap: '12px',
        overflowX: 'auto',
        paddingBottom: '8px',
        scrollbarWidth: 'none'
      }}>
        <button
          onClick={() => onSelectCategory('ALL')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: '9999px',
            fontWeight: '700',
            fontSize: '0.9rem',
            whiteSpace: 'nowrap',
            background: selectedCategory === 'ALL' ? 'var(--primary)' : 'var(--surface)',
            color: selectedCategory === 'ALL' ? 'white' : 'var(--text-secondary)',
            border: selectedCategory === 'ALL' ? 'none' : '1px solid var(--border)',
            boxShadow: selectedCategory === 'ALL' ? '0 4px 12px rgba(255, 71, 87, 0.3)' : 'var(--shadow-sm)'
          }}
        >
          <span>🔥</span>
          <span>All Items</span>
        </button>

        {categories.map((cat) => {
          const isActive = selectedCategory === cat.name;
          return (
            <button
              key={cat.id || cat.name}
              onClick={() => onSelectCategory(cat.name)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '9999px',
                fontWeight: '700',
                fontSize: '0.9rem',
                whiteSpace: 'nowrap',
                background: isActive ? 'var(--primary)' : 'var(--surface)',
                color: isActive ? 'white' : 'var(--text-secondary)',
                border: isActive ? 'none' : '1px solid var(--border)',
                boxShadow: isActive ? '0 4px 12px rgba(255, 71, 87, 0.3)' : 'var(--shadow-sm)'
              }}
            >
              <span>{cat.icon || '🍽️'}</span>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
