// List of API calls to be used within the application
import axios from "axios";

export default {
  // Gets all chefs
  getChefs: function() {
    return axios.get("/api/chefs");
  },
  // Gets the user with the given id
  getChef: function(id) {
    return axios.get("/api/chefs/" + id);
  },
  // Deletes the user with the given id
  deleteChef: function(id) {
    return axios.delete("/api/chefs/" + id);
  },
  // Saves a user to the database
  saveChef: function(chefData) {
    return axios.post("/api/chefs", chefData);
  },
   // Gets the user with the given id
   getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  getCuisines: function() {
    return axios.get("/api/cuisines");
  }
};
