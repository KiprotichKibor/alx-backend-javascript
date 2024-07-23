export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const localtask = true;
    const localtask2 = false;
    return [localtask, localtask2];
  }

  return [task, task2];
}
