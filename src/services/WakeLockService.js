import { signal } from '@preact/signals';

export const screenLockDisabled = signal(false);

// eslint-disable-next-line import/prefer-default-export
export async function disableScreenLock() {
  try {
    console.log('Requesting WakeLock');
    await navigator.wakeLock.request('screen');
    screenLockDisabled.value = true;
  } catch (error) {
    console.error('WakeLock', error);
    screenLockDisabled.value = false;
  }
}
