// Borrowed/modified from https://github.com/jenseng/abuse-the-platform/blob/2993a7e846c95ace693ce61626fa072174c8d9c7/app/utils/singleton.ts

/**
 * Remembers and retrieves a value by a given name, or the value generated by `getValue` if the name doesn't exist.
 * The return type is inferred from the return type of `getValue`.
 *
 * @template Value
 * @param {string} name - The name under which to remember the value.
 * @param {() => Value} getValue - The function that generates the value to remember.
 * @returns {Value} - The remembered value.
 */
export function remember(name, getValue) {
  const thusly = globalThis;
  thusly.__remember_epic_web ??= new Map();
  if (!thusly.__remember_epic_web.has(name)) {
    thusly.__remember_epic_web.set(name, getValue());
  }
  return thusly.__remember_epic_web.get(name);
}

/**
 * Forgets a remembered value by a given name. Does not throw if the name doesn't exist.
 *
 * @param {string} name - The name under which the value was remembered.
 * @return {boolean} - A remembered value existed and has been forgotten.
 */
export function forget(name) {
  const thusly = globalThis;
  thusly.__remember_epic_web ??= new Map();
  return thusly.__remember_epic_web.delete(name);
}