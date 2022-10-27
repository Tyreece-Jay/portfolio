import { page } from './app.page';

beforeEach(() => {
  page.render();
});

export async function header_headline() {
  expect(page.headerheadline).toBeInTheDocument();
};

export async function header_title() {
  expect(page.headertitle1).toBeInTheDocument();
  expect(page.headertitle2).toBeInTheDocument();
};

export async function icons() {
  expect(page.github).toBeInTheDocument();
  expect(page.linkedin).toBeInTheDocument();
  expect(page.email).toBeInTheDocument();
};

export async function down_arrow() {
  expect(page.downarrow).toBeInTheDocument();
};

export async function about_headline() {
  expect(page.aboutheadline).toBeInTheDocument();
};

export async function about_title() {
  expect(page.abouttitle).toBeInTheDocument();
};

export async function about_text() {
  expect(page.text("about text")).toBeInTheDocument();
};

export async function skills_headline() {
  expect(page.skillsheadline).toBeInTheDocument();
};

export async function skills_title() {
  expect(page.skillstitle).toBeInTheDocument();
};

export async function javascript_and_typescript() {
  expectSkill("javascript & typescript")
};

export async function react() {
  expectSkill("react")
};

export async function html_and_css() {
  expectSkill("html & css")
};

export async function c_sharp() {
  expectSkill("c#")
};

export async function sql() {
  expectSkill("sql")
};

export async function dot_net() {
  expectSkill(".net")
};

export async function experience_and_education_headline() {
  expect(page.experienceandeducationheadline).toBeInTheDocument();
};

export async function experience_and_education_title() {
  expect(page.experienceandeducationtitle).toBeInTheDocument();
};

export async function experience_place() {
  expect(page.place("First Databank")).toBeInTheDocument();
};

export async function experience_occupation() {
  expect(page.place("- Software Developer")).toBeInTheDocument();
};

export async function experience_dates() {
  expect(page.dates("SEPTEMBER 2018 - PRESENT")).toBeInTheDocument();
};

export async function experience_text() {
  expect(page.text("experience text")).toBeInTheDocument();
};

export async function education_place() {
  expect(page.place("The University of Exeter")).toBeInTheDocument();
};

export async function education_occupation() {
  expect(page.place("- BSC, Digital & Technology Solutions with proficiency in Software Engineering")).toBeInTheDocument();
};

export async function education_dates() {
  expect(page.dates("SEPTEMBER 2018 - MAY 2022")).toBeInTheDocument();
};

export async function education_text() {
  expect(page.text("education text")).toBeInTheDocument();
};

export async function contact_headline() {
  expect(page.experienceandeducationheadline).toBeInTheDocument();
};

export async function contact_title() {
  expect(page.contacttitle).toBeInTheDocument();
};

export async function contact_button() {
  expect(page.contactbutton).toHaveAttribute('href', '')
  expect(page.contactemail).toBeInTheDocument();
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

async function expectSkill(skill: string) {
  expect(page.skillname(skill.toUpperCase())).toBeInTheDocument();
  expect(page.skillprogress(skill)).toBeInTheDocument();
}
