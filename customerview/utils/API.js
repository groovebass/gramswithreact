import axios from 'axios';

export default {
    //Restaurant Routes
    getAllRestaurants: query => (query) ? axios.get(`/api/restaurants/${query}`) : axios.get(`/api/restaurants`),
    createRestaurant: data => axios.post(`/api/restaurants/`, data),
    getRestaurant: restaurantId => axios.get(`/api/restaurants/${restaurantId}`),
        //update Restaurant's general information
    updateRestaurant: (restaurantId, data) => axios.put(`/api/restaurants/${restaurantId}`, data),
    removeRestaurant: restaurantId => axios.delete(`/api/restaurants/${restaurantId}`),
    addOrderToRestaurant: (restaurantId, data) => axios.put(`/api/restaurants/add-orders/${restaurantId}`, data),
    removeOrderFromRestaurant: (restaurantId, data) => axios.put(`/api/restaurants/remove-orders/${restaurantId}`, data),
    addDishToRestaurant: (restaurantId, data) => axios.put(`/api/restaurants/add-dishes/${restaurantId}`, data),
    removeDishFromRestaurant: (restaurantId, data) => axios.put(`/api/restaurants/remove-dishes/${restaurantId}`, data),

    //Dish Routes
    getDishesAcrossRestaurants: query => (query) ? axios.get(`/api/dishes/${query}`) : axios.get(`/api/dishes/`),
    getDish: dishId => axios.get(`/api/dishes/${dishId}`),
    updateDish: (dishId, data) => axios.put(`/api/dishes/${dishId}`, data),
    removeDish: dishId => axios.delete(`/api/dishes/${dishId}`),
    createDish: (restaurantId, data) => axios.post(`/api/dishes/restaurant/${restaurantId}`, data),

    //Table Routes



}