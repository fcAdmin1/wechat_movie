import ajax from './ajax.js';

class Api extends ajax {
  constructor() {
    super();
  }
  filmTheaters(params) {
    return this.request({ url: '/v2/movie/in_theaters', method: 'get', params });
  }
  filmComingSoon(params) {
    return this.request({ url: '/v2/movie/coming_soon', method: 'get', params });
  }
  filmTop(params) {
    return this.request({ url: '/v2/movie/top250', method: 'get', params });
  }
  filmDetail(params) {
    return this.request({ url: '/v2/movie/subject/' + params.id, method: 'get', params });
  }
}

export default Api;