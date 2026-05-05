class ServiceUrls {
    constructor() {
        this.baseUrl = 'http://localhost:3005';
    }

    getServices(title, page = 1, limit = 10) {
        const params = new URLSearchParams();
        if (title) params.append('title', title);
        params.append('page', page);
        params.append('limit', limit);
        return `${this.baseUrl}/services?${params.toString()}`;
    }

    getServiceById(id) {
        return `${this.baseUrl}/services/${id}`;
    }

    getServiceByPath(servicePath) {
        return `${this.baseUrl}/services/by-path/${encodeURIComponent(servicePath)}`;
    }

    createService() {
        return `${this.baseUrl}/services`;
    }

    removeServiceById(id) {
        return `${this.baseUrl}/services/${id}`;
    }

    updateServiceById(id) {
        return `${this.baseUrl}/services/${id}`;
    }
}

export const serviceUrls = new ServiceUrls();