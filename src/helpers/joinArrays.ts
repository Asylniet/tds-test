interface HasId {
  id: number | string;
}

export function joinArraysOnId<T extends HasId, U extends HasId>(
  array1: T[],
  array2: U[]
): (T & Partial<U>)[] {
  const map = new Map<T["id"], U>();

  array2.forEach((item) => {
    map.set(item.id, item);
  });

  const result = array1.map((item) => {
    const matchedItem = map.get(item.id);
    return {
      ...item,
      ...(matchedItem as Partial<U>),
    };
  });

  return result;
}
