export class ApiService {
    async request(url: string): Promise<any> {
        const response = await fetch(url);

        return await response.json();
    }
}