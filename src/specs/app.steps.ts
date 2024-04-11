import { page } from './app.page';

beforeEach(() => {
  page.render();
});

export async function clickable_down_arrow() {
  page.icon("Down Arrow").click()
  expect(window.scrollBy).toHaveBeenCalledWith(0, window.innerHeight);
}

export async function clickable_linkedin_icon() {
  page.icon("LinkedIn").click()
  expect(window.open).toHaveBeenCalledWith('https://linkedin.com/in/tyreece-simpson-287912160');
}

export async function clickable_github_icon() {
  page.icon("GitHub").click()
  expect(window.open).toHaveBeenCalledWith('https://github.com/Tyreece-Jay');
}

export async function clickable_figma_icon() {
  page.icon("Figma").click()
  expect(window.open).toHaveBeenCalledWith('https://www.figma.com/@tyreece');
}

export async function clickable_email_button() {
  page.icon("Contact").click()
  expect(window.open).toHaveBeenCalledWith('mailto:tyreece.jay@gmail.com');
}
