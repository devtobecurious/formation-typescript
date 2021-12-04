import axios from 'axios';
import Droid from './droid';
import Wookie from './wookie';

export class ApiServiceAxios {
    async getAll(url: string): Promise<Droid[]> {
        return await axios.get(url);
    }
}