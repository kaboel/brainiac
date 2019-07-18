import Api from 'service';

export default {
    async index() {
        return await Api().get('/TorqueValues');
    }
}
