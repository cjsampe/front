export default class API {
    constructor(url) {
      this.url = url
    }
  
    
    async getRouteById(id) {
      let result = await fetch(`${this.url}/routes/${id}`,
        {
          headers: {
            'Content-type': 'application/json'
          }
        })
  
      return await result.json()
    }
    async getPostsByRoute(id) {
      let result = await fetch(`${this.url}/posts?route=${id}`,
        {
          headers: {
            'Content-type': 'application/json'
          }
        })
  
      return await result.json()
    }
    async getLevelsByRoute(id) {
      let result = await fetch(`${this.url}/p?route=${id}`,
        {
          headers: {
            'Content-type': 'application/json'
          }
        })
  
      return await result.json()
    }
    async postCommnet(data) {
      let result = await fetch(`${this.url}/posts`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          //convierte un objeto en String
          body: JSON.stringify(data) 
        })
  
      return await result.json()
    }


  }