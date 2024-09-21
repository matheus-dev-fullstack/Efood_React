import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CardapioItem, Restaurant } from '../pages/Home';

type GetHero = Restaurant;

type PurchaseResponse = {
  orderId: string;
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getHeroRestaurant: builder.query<GetHero, number>({
      query: (id) => `restaurantes/${id}`
    }),
    getRestaurantsById: builder.query<Restaurant, number>({
      query: (id) => `restaurantes/${id}`
    }),
    getPratos: builder.query<CardapioItem[], number>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
});

export const {
  useGetRestaurantsQuery,
  useGetPratosQuery,
  useGetHeroRestaurantQuery,
  useGetRestaurantsByIdQuery,
  usePurchaseMutation
} = api;
export default api;
