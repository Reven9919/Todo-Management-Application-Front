import axios from "axios"

class HelloWorkdService {

    executeHelloWoeldService(){
        //console.log('executed service')

        return axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWoeldBeanService(){
        //console.log('executed service')

        return axios.get('http://localhost:8080/hello-world-bean');
    }
    executeHelloWoeldPathVariableService(name){
        //console.log('executed service')
        //let username = 'in28minutes'
        //let password = 'dummy'

        //let basicAuthHeader =  'Basic ' + window.btoa(username + ":" + password)

        return axios.get('http://localhost:8080/hello-world/path-variable/${name}'),
            /* {
                headers : {
                    //authorization : YOUR_HEADER
                }

            } */
    }

}
export default new HellpWorldService()