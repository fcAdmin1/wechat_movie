Page({
  data: {
    swiperConfig: {
      indicatorDots: true,
      indicatorColor: 'rgba(0, 0, 0, 0.3)',
      indicatorActiveColor: "#0491FF",
      autoplay: true,
      interval: 5000,
      duration: 1000,
      circular: true,
    },
    imgUrls: [
      '/images/banner/banner.png',
      '/images/banner/banner.png',
      '/images/banner/banner.png'
    ],
  },
  swiperChange() {
    // console.log(111);
  }
})
