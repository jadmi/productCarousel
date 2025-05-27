function carousel() {
  return {
    currentIndex: 0,
    images: [
      "https://picsum.photos/id/1015/600/300",
      "https://picsum.photos/id/1016/600/300",
      "https://picsum.photos/id/1018/600/300",
    ],
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  };
}
