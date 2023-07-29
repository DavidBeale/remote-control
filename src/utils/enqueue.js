let pending = Promise.resolve();

export default function enqueue(func) {
  // eslint-disable-next-line no-return-assign
  return (pending = run(func));
}

async function run(func) {
  try {
    await pending;
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return func();
  }
}
