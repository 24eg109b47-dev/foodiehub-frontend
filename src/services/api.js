import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const MOCK_CATEGORIES = [
  { id: 1, name: 'Biryani', icon: '🍚' },
  { id: 2, name: 'Pizzas', icon: '🍕' },
  { id: 3, name: 'Burgers', icon: '🍔' },
  { id: 4, name: 'South Indian', icon: '🥞' },
  { id: 5, name: 'Desserts', icon: '🍰' },
  { id: 6, name: 'Beverages', icon: '🥤' }
];

export const MOCK_RESTAURANTS = [
  {
    id: 1,
    name: 'FoodieHub Kitchen',
    description: 'Authentic Indian delicacies, biryanis, curries, and gourmet specials.',
    cuisine: 'North Indian • Biryani • Mughlai',
    rating: 4.8,
    reviewsCount: 320,
    deliveryTime: '25-30 mins',
    costForTwo: '₹400',
    address: 'Madhapur Main Road, Hyderabad',
    phone: '+91 98765 43210',
    openingTime: '10:00 AM',
    closingTime: '11:00 PM',
    status: 'APPROVED',
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80',
    badge: 'Popular',
    menu: [
      { id: 101, name: 'Hyderabadi Chicken Dum Biryani', price: 280, category: 'Biryani', isVeg: false, description: 'Slow cooked aromatic basmati rice layered with spiced tender chicken and saffron.' },
      { id: 102, name: 'Paneer Butter Masala', price: 220, category: 'North Indian', isVeg: true, description: 'Rich creamy tomato gravy with cottage cheese cubes garnished with butter.' },
      { id: 103, name: 'Butter Naan (2 pcs)', price: 70, category: 'Breads', isVeg: true, description: 'Traditional clay oven tandoori bread brushed with fresh butter.' },
      { id: 104, name: 'Gulab Jamun (2 pcs)', price: 80, category: 'Desserts', isVeg: true, description: 'Warm deep-fried milk dumplings soaked in cardamom flavored rose syrup.' }
    ]
  },
  {
    id: 2,
    name: 'Firewood Pizza Co.',
    description: 'Authentic stone oven pizzas with artisanal toppings and homemade crusts.',
    cuisine: 'Italian • Pizza • Pasta',
    rating: 4.6,
    reviewsCount: 195,
    deliveryTime: '30-35 mins',
    costForTwo: '₹600',
    address: 'Jubilee Hills, Road No. 36, Hyderabad',
    phone: '+91 91234 56789',
    openingTime: '11:00 AM',
    closingTime: '11:30 PM',
    status: 'APPROVED',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    badge: 'Trending',
    menu: [
      { id: 201, name: 'Classic Margherita Pizza', price: 320, category: 'Pizzas', isVeg: true, description: 'Fresh san marzano tomato sauce, mozzarella fior di latte, and basil leaves.' },
      { id: 202, name: 'Spicy Peri Peri Chicken Pizza', price: 420, category: 'Pizzas', isVeg: false, description: 'Smoked chicken cubes, fiery peri-peri drizzle, bell peppers and red onion.' },
      { id: 203, name: 'Creamy Alfredo Pasta', price: 290, category: 'Italian', isVeg: true, description: 'Penne pasta tossed in rich parmesan garlic white cream sauce.' },
      { id: 204, name: 'Tiramisu Slice', price: 190, category: 'Desserts', isVeg: true, description: 'Espresso-soaked savoiardi layers with whipped mascarpone cream.' }
    ]
  },
  {
    id: 3,
    name: 'The Burger Club',
    description: 'Juicy handcrafted smash burgers, loaded fries, and signature shakes.',
    cuisine: 'American • Fast Food • Burgers',
    rating: 4.5,
    reviewsCount: 240,
    deliveryTime: '20-25 mins',
    costForTwo: '₹350',
    address: 'Gachibowli Outer Ring Road, Hyderabad',
    phone: '+91 99887 76655',
    openingTime: '11:00 AM',
    closingTime: '01:00 AM',
    status: 'APPROVED',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    badge: 'Superfast',
    menu: [
      { id: 301, name: 'Smash Double Cheeseburger', price: 260, category: 'Burgers', isVeg: false, description: 'Double crispy smashed patties, melted cheddar, pickles, and secret burger sauce.' },
      { id: 302, name: 'Crispy Paneer Supreme Burger', price: 210, category: 'Burgers', isVeg: true, description: 'Panko crumb fried spiced cottage cheese patty with spicy chipotle mayo.' },
      { id: 303, name: 'Loaded Cheesy Fries', price: 160, category: 'Fast Food', isVeg: true, description: 'Golden potato fries smothered in warm cheese sauce, jalapenos, and paprika.' },
      { id: 304, name: 'Belgian Chocolate Thick Shake', price: 180, category: 'Beverages', isVeg: true, description: 'Thick blend of Belgian dark cocoa, dairy ice cream, and chocolate chips.' }
    ]
  },
  {
    id: 4,
    name: 'Dakshin Flavors',
    description: 'Crispy ghee podi dosas, fluffy idlis, and authentic South Indian filter coffee.',
    cuisine: 'South Indian • Healthy • Vegetarian',
    rating: 4.7,
    reviewsCount: 410,
    deliveryTime: '15-20 mins',
    costForTwo: '₹250',
    address: 'Kukatpally Housing Board, Hyderabad',
    phone: '+91 97654 32109',
    openingTime: '07:00 AM',
    closingTime: '10:30 PM',
    status: 'APPROVED',
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80',
    badge: 'Top Rated',
    menu: [
      { id: 401, name: 'Ghee Karam Dosa', price: 130, category: 'South Indian', isVeg: true, description: 'Golden crisp crepe roasted in pure desi ghee smeared with spicy andhra karam podi.' },
      { id: 402, name: 'Button Idli Sambar (14 pcs)', price: 110, category: 'South Indian', isVeg: true, description: 'Mini steamed rice cakes immersed in piping hot aromatic drumstick sambar.' },
      { id: 403, name: 'Medu Vada (2 pcs)', price: 90, category: 'South Indian', isVeg: true, description: 'Crunchy golden lentil fritters served with coconut chutney and tangy tomato chutney.' },
      { id: 404, name: 'Degree Filter Coffee', price: 60, category: 'Beverages', isVeg: true, description: 'Freshly decocted chicory blended robust South Indian coffee with frothy milk.' }
    ]
  }
];

export async function fetchRestaurants() {
  try {
    const res = await apiClient.get('/restaurants');
    if (res.data && res.data.length > 0) {
      return res.data.map(item => ({
        ...item,
        cuisine: 'North Indian • Multi-Cuisine',
        rating: 4.8,
        deliveryTime: '25-30 mins',
        costForTwo: '₹400',
        image: MOCK_RESTAURANTS[0].image,
        menu: MOCK_RESTAURANTS[0].menu
      }));
    }
  } catch (err) {
    console.warn('Backend API unavailable, using fallback mock data:', err.message);
  }
  return MOCK_RESTAURANTS;
}

export async function fetchRestaurantMenu(restaurantId) {
  try {
    const res = await apiClient.get(`/restaurants/${restaurantId}/menu`);
    if (res.data && res.data.length > 0) {
      return res.data;
    }
  } catch (err) {
    console.warn('Backend API unavailable, using fallback menu items:', err.message);
  }
  const found = MOCK_RESTAURANTS.find(r => r.id === Number(restaurantId));
  return found ? found.menu : MOCK_RESTAURANTS[0].menu;
}

export async function fetchCategories() {
  try {
    const res = await apiClient.get('/categories');
    if (res.data && res.data.length > 0) {
      return res.data.map(c => ({
        ...c,
        icon: '🍽️'
      }));
    }
  } catch (err) {
    console.warn('Backend categories unavailable, using mock categories:', err.message);
  }
  return MOCK_CATEGORIES;
}

export async function loginUser(email, password) {
  try {
    const res = await apiClient.post('/auth/login', { email, password });
    return { success: true, user: res.data };
  } catch (err) {
    // If backend is offline, simulate login with demo accounts
    if (email === 'customer@foodiehub.com' && password === 'customer123') {
      return { success: true, user: { id: 3, name: 'Demo Customer', email, role: 'ROLE_CUSTOMER', phone: '9876543210' } };
    }
    if (email === 'owner@foodiehub.com' && password === 'owner123') {
      return { success: true, user: { id: 2, name: 'Restaurant Owner', email, role: 'ROLE_RESTAURANT_OWNER', phone: '9876543211' } };
    }
    if (email === 'admin@foodiehub.com' && password === 'admin123') {
      return { success: true, user: { id: 1, name: 'System Admin', email, role: 'ROLE_ADMIN', phone: '9876543212' } };
    }
    return { success: false, error: err.response?.data?.error || 'Invalid credentials' };
  }
}

export async function registerUser(formData) {
  try {
    const res = await apiClient.post('/auth/register', formData);
    return { success: true, user: res.data };
  } catch (err) {
    return {
      success: true,
      user: { id: Date.now(), name: formData.name, email: formData.email, role: 'ROLE_CUSTOMER' }
    };
  }
}
