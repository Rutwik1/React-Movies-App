const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'de4c5c02177b6732c3853a7600a3d997',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;