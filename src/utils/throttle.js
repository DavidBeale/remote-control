export default function throttle(func, delay) {
  let lastCall = 0;
  return function t(...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    func(...args);
  };
}
