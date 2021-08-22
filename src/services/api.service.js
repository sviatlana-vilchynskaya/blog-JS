class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl
    }

    async createPost(post) {
        try {
            const request = new Request(this.url + '/posts.json', {
                method: 'post',
                body: JSON.stringify(post)
            })
            const response = await fetch(request)
            return await response.JSON
        } catch (error) {
            console.error(error)
        }
    }
}



export const apiService = new ApiService('https://blog-js-001001-default-rtdb.europe-west1.firebasedatabase.app')