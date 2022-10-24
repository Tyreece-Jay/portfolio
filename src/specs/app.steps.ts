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

export async function about_header() {
  expect(page.aboutheader).toBeInTheDocument();
};

export async function about_text() {
  expect(page.abouttext).toBeInTheDocument();
};

export async function skills_title() {
  expect(page.skillstitle).toBeInTheDocument();
};

export async function skills() {
  skill("javascript & typescript")
  skill("react")
  skill("html & css")
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

async function skill(name: string) {
  expect(page.skillname(name.toUpperCase())).toBeInTheDocument();
  expect(page.skillprogress(name)).toBeInTheDocument();
}