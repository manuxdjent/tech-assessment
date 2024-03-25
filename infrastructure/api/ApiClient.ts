export default class ApiClient {
    private baseUrl: string
    private baseParams: string

    constructor(baseUrl: string, baseParams: string) {
        this.baseUrl = baseUrl
        this.baseParams = baseParams
    }

    async get<T>(endpoint: string, params?: T) {
        try {
            const urlSearchParams = params ? `&${new URLSearchParams(params).toString()}` : ''
            const finalParams = `${this.baseParams}${urlSearchParams}`
            const response = await fetch(`${this.baseUrl}${endpoint}${finalParams}`)
            if (!response.ok) {
                console.error(response.statusText);
            }
            return await response.json()
        } catch (error) {
            console.error(error.message)
            throw error
        }
    }
}
