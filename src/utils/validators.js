import { z } from 'zod';

export const checkoutSchema = z.object({
  contact: z.object({
    email: z.string().email("Invalid email address"),
    newsletter: z.boolean().optional(),
  }),
  shipping: z.object({
    fullName: z.string().min(2, "Full name is required"),
    phone: z.string().min(10, "Valid phone number is required"),
    address: z.string().min(5, "Street address is required"),
    city: z.string().min(2, "City is required"),
    governorate: z.string().min(2, "Governorate is required"),
    postalCode: z.string().min(3, "Postal code is required"),
    saveInfo: z.boolean().optional(),
  }),
  paymentMethod: z.string().min(1, "Please select a payment method"),
});
