import axios from "axios"
import {API_URL, JPA_API_URL} from '../../Constants'

class TodoDataService{

    retrieveAllTodos(name){
        //console.log('executed service')

        return axios.get(`${JPA_API_URL}/user/${name}/todos`);
    }

    retrieveTodos(name, id){
        //console.log('executed service')

        return axios.get(`${JPA_API_URL }/user/${name}/todos/${id}`);
    }

    deleteTodo(name, id){
        //console.log('executed service')

        return axios.delete(`${API_URL}/user/${name}/todos/${id}`);
    }
    updateTodo(name, id, todo){
        //console.log('executed service')

        return axios.put(`${API_URL}/user/${name}/todos/${id}`, todo);
    }

    createTodo(name, todo){
        //console.log('executed service')

        return axios.post(`${API_URL}/user/${name}/todos/}`, todo);
    }


}
export default new TodoDataService()