Page({
  data: {
    imageURL:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597946942689&di=a34abb6a2b67b7f8da0f445fe398dc21&imgtype=0&src=http%3A%2F%2Fwww.esys.cn%2Fuploads%2Fallimg%2F191001%2F1525213457_0.jpg",
    value1: 0,
    value2: 'a',
    date: '',
    show: false,
    option1: [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ],
    option2: [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' }]
  },

  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
  },
});