import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import RestaurantCard from './components/RestaurantCard';
import MenuModal from './components/MenuModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import OrderTrackerModal from './components/OrderTrackerModal';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';
import { fetchRestaurants, fetchCategories } from './services/api';

export default function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Cart & Orders
  const [cartItems, setCartItems] = useState([]);
  const [cartRestaurant, setCartRestaurant] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedRestaurantMenu, setSelectedRestaurantMenu] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeOrder, setActiveOrder] = useState(null);

  // Auth
  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const [rData, cData] = await Promise.all([
          fetchRestaurants(),
          fetchCategories()
        ]);
        setRestaurants(rData);
        setCategories(cData);
      } catch (err) {
        console.error('Failed to load initial data:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Filter restaurants
  const filteredRestaurants = restaurants.filter((r) => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (r.cuisine && r.cuisine.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (selectedCategory === 'ALL') return matchesSearch;
    
    // Check if restaurant cuisine or menu matches selected category
    const matchesCategory = (r.cuisine && r.cuisine.toLowerCase().includes(selectedCategory.toLowerCase())) ||
      (r.menu && r.menu.some(m => m.category.toLowerCase().includes(selectedCategory.toLowerCase())));

    return matchesSearch && matchesCategory;
  });

  // Cart Handlers
  const handleAddToCart = (restaurant, item) => {
    if (cartRestaurant && cartRestaurant.id !== restaurant.id && cartItems.length > 0) {
      const confirmReset = window.confirm(
        `Your cart already has items from "${cartRestaurant.name}". Reset cart to add items from "${restaurant.name}"?`
      );
      if (!confirmReset) return;
      setCartItems([{ ...item, quantity: 1 }]);
      setCartRestaurant(restaurant);
      return;
    }

    setCartRestaurant(restaurant);
    setCartItems((prev) => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQty = (itemId, delta) => {
    setCartItems((prev) => {
      return prev.map((item) => {
        if (item.id === itemId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(prev => prev.filter(i => i.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
    setCartRestaurant(null);
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    if (!user) {
      setIsAuthOpen(true);
    } else {
      setIsCheckoutOpen(true);
    }
  };

  const handleOrderPlaced = (order) => {
    setIsCheckoutOpen(false);
    setCartItems([]);
    setCartRestaurant(null);
    setActiveOrder(order);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        user={user}
        onOpenAuth={() => setIsAuthOpen(true)}
        onLogout={() => setUser(null)}
      />

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        <Hero searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <div className="container">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* Restaurant Grid Section */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '1.45rem', fontWeight: '800', letterSpacing: '-0.5px' }}>
                Featured Restaurants ({filteredRestaurants.length})
              </h2>
            </div>

            {loading ? (
              <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-secondary)' }}>
                Loading top restaurants...
              </div>
            ) : filteredRestaurants.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '60px 20px',
                background: 'white',
                borderRadius: '16px',
                border: '1px solid var(--border)'
              }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px' }}>No restaurants found</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Try adjusting your search query or selecting a different category.
                </p>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px'
              }}>
                {filteredRestaurants.map((restaurant) => (
                  <RestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                    onSelect={(r) => setSelectedRestaurantMenu(r)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <MenuModal
        restaurant={selectedRestaurantMenu}
        onClose={() => setSelectedRestaurantMenu(null)}
        onAddToCart={handleAddToCart}
        cartItems={cartItems}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        restaurant={cartRestaurant}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onProceedToCheckout={handleProceedToCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderPlaced={handleOrderPlaced}
      />

      <OrderTrackerModal
        order={activeOrder}
        onClose={() => setActiveOrder(null)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={(userData) => {
          setUser(userData);
          if (cartItems.length > 0) {
            setIsCheckoutOpen(true);
          }
        }}
      />
    </div>
  );
}
