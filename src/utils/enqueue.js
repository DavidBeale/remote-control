let pending = Promise.resolve();

export default function enqueue(func) {
  return (pending = run(func));
}

async function run(func) {
  try {
    await pending;
  } finally {
    return func();
  }
}
