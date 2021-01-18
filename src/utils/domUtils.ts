export function arrayQuerySelector<EL extends Element>(element: HTMLElement, query: string) {
  const foundElements: EL[] = []

  element
    .querySelectorAll<EL>(query)
    .forEach((foundElement) => foundElements.push(foundElement))

  return foundElements;
}
