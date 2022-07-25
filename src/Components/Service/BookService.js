import axios from "axios";

class BookService{
    baseUrl ="http://localhost:8080/bookstoreapp"

    addPerson(data) {
        return axios.post(`${this.baseUrl}/create`, data);
      }

    getAll() {
        return axios.get(`${this.baseUrl}`);
      }

    getPersonById(personId) {
        return axios.get(`${this.baseUrl}/get/${personId}`);
      }

    updatePerson(personId,data) {
        return axios.put(`${this.baseUrl}/put/${personId}`, data);
      }

    deletePerson(personId) {
        return axios.delete(`${this.baseUrl}/delete/${personId}`);
      }
    sortPriceHighToLow() {
        return axios.get(`${this.baseUrl}/sortByPriceHighToLow`);
      }
    sortPriceLowToHigh() {
        return axios.get(`${this.baseUrl}/sortByPriceLowToHigh`);
      }
}

export default new BookService();