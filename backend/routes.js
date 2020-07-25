$.router.get('/', (http) => {
    return http.send('<h1>Main Server index page.</h1>')
})