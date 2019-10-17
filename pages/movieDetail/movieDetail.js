import Api from '../../utils/api.js';
import util from '../../utils/util.js';


Page({
  data: {
    movie: {}
  },
  onLoad: function (options) {
    var movieId = options.id;
    Api.filmDetail({ id: movieId }).then((res) => {
      const movie = {
        movieImg: res.images.small, // 电影图片
        largeImage: res.images.large,
        title: res.title, // 标题
        country: res.countries[0], // 国家
        year: res.year, // 年份
        wishCount: res.wish_count,  // 
        commentCount: res.comments_count,
        originalTitle: res.original_title,
        summary: res.summary, // 剧情简介
        star: {
          stars: util.convertToStarsArray(res.rating.stars),
          // score: res.rating.average,
        },
        stars: util.convertToStarsArray(res.rating.stars),
        score: res.rating.average,
        director: res.directors[0], // 导演
        casts: res.casts, // 影人
        genres: res.genres.join('/'),
        pubdate: res.pubdates[2],
        photos: res.photos,
        trailer: res.trailer_urls[1],
        reviewsCount: res.reviews_count,
      };
      this.setData({
        movie,
      })
      wx.setNavigationBarTitle({
        title: res.title
      })
      console.log(res);
    });
    
  },
  viewImage(e) {
    var src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: [src] // 需要预览的图片http链接列表
    })
  },
  onShareAppMessage(res) {
    console.log(res);
    return {
      title: '自定义转发标题',
      path: '/pages/movieDetail/movieDetail',
      imageUrl: this.data.movie.movieImg
    }
  }
})