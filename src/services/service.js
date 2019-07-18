import axios from 'axios';

function Api() {
    return axios.create({
        baseURL: `http://wb-predictivemaintenance-api.prsp7vkew2.eu-central-1.elasticbeanstalk.com/api`
    })
}

export default Api;
