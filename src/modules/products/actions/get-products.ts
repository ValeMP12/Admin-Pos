import { tesloApi } from '../../api/tesloApi';

export const getProducts = async (number = 1, limit:number = 10) => {
  try {
    const response = await tesloApi.get(`/products`, {
      params: {
        page: number,
        count: limit,
      }, catch (error) {
        console.error('Error fetching products:', error.message);
        throw error;  // rethrow the error to the caller of this function.
      }
    });
    return response.data;
  }
}
