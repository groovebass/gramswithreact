import axios from 'axios';

export default {
    //Restaurant Routes
    getAllRestaurants: query => (query) ? axios.get(`/api/restaurants/${query}`) : axios(`/api/restaurants`),
    createRestaurant: data => axios.post(`/api/restaurants/`, data),
    getRestaurant: restaurantId => axios.get(`/api/restaurants/${restaurantId}`),
        //update Restaurant's general information
    updateRestaurant: (restaurantId, data) => axios.put(`/api/restaurants/${restaurantId}`, data),
    removeRestaurant: restaurantId => axios.delete(`/api/restaurants/${restaurantId}`),
    addOrderToRestaurant: (restaurantId, data) => axios.put(`/api/restaurants/add-orders/${restaurantId}`, data),
    removeOrderFromRestaurant: (restaurantId, data) => axios.put(`/api/restaurants/remove-orders/${restaurantId}`, data),
    addDishToRestaurant: (restaurantId, data) => axios.put(`/api/restaurants/add-dishes/${restaurantId}`, data),
    removeDishFromRestaurant: (restaurantId, data) => axios.put(`/api/restaurants/remove-dishes/${restaurantId}`, data),

    


}