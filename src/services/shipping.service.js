import api from '../api/axios';

export const shippingService = {
  getShippingMethods: async () => {
    // Mock data based on design since API is not ready
    return [
      {
        _id: "sm_1",
        name: "Standard Delivery",
        description: "Reliable and affordable delivery to your doorstep.",
        price: 0,
        estimatedDays: "3 - 5 business days",
        icon: "truck",
        available: true
      },
      {
        _id: "sm_2",
        name: "Express Delivery",
        description: "Faster delivery for when you need it sooner.",
        price: 120,
        estimatedDays: "1 - 2 business days",
        icon: "zap",
        available: true
      },
      {
        _id: "sm_3",
        name: "Premium Delivery",
        description: "Priority handling and next-day delivery.",
        price: 200,
        estimatedDays: "Next business day",
        icon: "shield",
        available: true
      }
    ];
  },
  saveShippingMethod: async (methodId) => {
    const response = await api.post('/checkout/shipping', { methodId });
    return response.data;
  }
};
