export default function multirate(iterator) {
  let done = false;
  let value;
  let resolver;
  let rejector;

  let pending = new Promise((resolve, reject) => {
    resolver = resolve;
    rejector = reject;
  });

  (async () => {
    while (!done) {
      try {
        const result = await iterator.next();
        done = result.done;
        value = result.value;
        resolver(value);
      } catch (error) {
        rejector(error);
      } finally {
        pending = new Promise((resolve, reject) => {
          resolver = resolve;
          rejector = reject;
        });
      }
    }
  })();

  return async function* mutirator() {
    if (!done && value !== undefined) yield value;
    while(!done) yield await pending;
  };
}
