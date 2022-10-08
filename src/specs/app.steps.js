import { page } from './app.page';

beforeEach(() => {
  page.render();
});

export async function name() {
  expect(page.name).toBeInTheDocument();
};

export async function headline() {
  expect(page.headline1).toBeInTheDocument();
  expect(page.headline2).toBeInTheDocument();
};

export async function down_arrow() {
  expect(page.downarrow).toBeInTheDocument();
};

export async function about_text() {
  expect(page.abouttext).toBeInTheDocument();
};

export async function skills_title() {
  expect(page.skillstitle).toBeInTheDocument();
};

export async function footer_text() {
  expect(page.footertext).toBeInTheDocument();
};