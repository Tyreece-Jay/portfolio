import { page } from './app.page';

beforeEach(() => {
  page.render();
});

export async function name() {
  expect(page.name).toBeInTheDocument();
};

export async function headlines() {
  expect(page.headline1).toBeInTheDocument();
  expect(page.headline2).toBeInTheDocument();
};

export async function icons() {
  expect(page.github).toBeInTheDocument();
  expect(page.linkedin).toBeInTheDocument();
  expect(page.email).toBeInTheDocument();
};

export async function down_arrow() {
  expect(page.downarrow).toBeInTheDocument();
};

export async function about_title() {
  expect(page.abouttitle).toBeInTheDocument();
};

export async function about_text() {
  expect(page.abouttext).toBeInTheDocument();
};

export async function skills_title() {
  expect(page.skillstitle).toBeInTheDocument();
};

export async function javascript_and_typescript() {
  expect(page.skillname("JAVASCRIPT & TYPESCRIPT")).toBeInTheDocument();
  expect(page.skillprogress("javascript & typescript")).toBeInTheDocument();
};

export async function react() {
  expect(page.skillname("REACT")).toBeInTheDocument();
  expect(page.skillprogress("react")).toBeInTheDocument();
};

export async function html_and_css() {
  expect(page.skillname("HTML & CSS")).toBeInTheDocument();
  expect(page.skillprogress("html & css")).toBeInTheDocument();
};

export async function experience_title() {
  expect(page.experiencetitle).toBeInTheDocument();
};

export async function experience_place() {
  expect(page.experienceplace).toBeInTheDocument();
};

export async function experience_dates() {
  expect(page.experiencedates).toBeInTheDocument();
};

export async function experience_text() {
  expect(page.experiencetext).toBeInTheDocument();
};

export async function footer_text() {
  expect(page.footertext).toBeInTheDocument();
};

export async function clickable_linkedin_icon() {
  expect(page.linkedinlink).toHaveAttribute('href', 'https://linkedin.com/in/tyreece-simpson-287912160')
}

export async function clickable_github_icon() {
  expect(page.githublink).toHaveAttribute('href', 'https://github.com/Tyreece-Jay')
}