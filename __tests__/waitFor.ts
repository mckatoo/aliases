export async function waitFor(
  condition: () => boolean,
  options?: {
    timeout_ms?: number,
    interval_ms?: number
  }
): Promise<void> {
  return new Promise((resolve, reject) => {
    const timeout_ms = options?.timeout_ms ?? 5000;
    const interval_ms = options?.interval_ms ?? 500;
    let timeout = 0;

    const interval = setInterval(() => {
      if (condition() || (timeout >= timeout_ms)) {
        clearInterval(interval);
        if (timeout >= timeout_ms)
          return reject(new Error("Timeout waiting for condition"));
        return resolve();
      }
      timeout += interval_ms;
    }, interval_ms);
  });
}

