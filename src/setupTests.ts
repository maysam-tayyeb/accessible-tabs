// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import {axe, JestAxeConfigureOptions, toHaveNoViolations} from 'jest-axe';
import {act, render, RenderResult} from "@testing-library/react";

const getContainer = (renderResult: RenderResult | null) => {
  if (renderResult) return renderResult.container;
  throw new Error('Container is not initialised');
}

expect.extend(toHaveNoViolations);

export const runAxeCheck = async (
  reactElement: React.ReactElement,
  options: JestAxeConfigureOptions = {}
) => {
  let renderResult: RenderResult | null = null;

  await act(async () => {
    renderResult = render(reactElement)
  })

  expect(await axe(getContainer(renderResult), options)).toHaveNoViolations();
}
