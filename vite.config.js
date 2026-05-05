export default {
    server: {
        proxy: {
            '/services': 'http://localhost:3001',
        },
    },
    build: {
        outDir: '../back/public',
        emptyOutDir: true,
    },
};
