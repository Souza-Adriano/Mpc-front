import http from '@/config/http';

export default {
    methods: {
        async $GET(resource) {
            return await http.get(resource);
        },

        async $POST(resource, data) {
            return await http.post(resource, data);
        },
    }
}