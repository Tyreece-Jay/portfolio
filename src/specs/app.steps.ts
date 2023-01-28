import { SkillPercentage } from '../components/skills/skillpercentage';
import { page } from './app.page';

beforeEach(() => {
  page.render();
});

export async function header_title() {
  expect(page.title("TYREECE SIMPSON")).toBeInTheDocument();
};

export async function header_headline() {
  expect(page.profession).toBeInTheDocument();
};

export async function down_arrow() {
  expect(page.icon("Down Arrow")).toBeInTheDocument();
};

export async function about_headline() {
  expect(page.headline("I’m An Open Book")).toBeInTheDocument();
};

export async function about_title() {
  expect(page.title("ABOUT ME")).toBeInTheDocument();
};

export async function about_text() {
  expect(page.text("about-text")).toBeInTheDocument();
};

export async function icons() {
  expect(page.icon("GitHub")).toBeInTheDocument();
  expect(page.icon("LinkedIn")).toBeInTheDocument();
  expect(page.icon("Figma")).toBeInTheDocument();
};

export async function skills_headline() {
  expect(page.headline("Constantly Curious")).toBeInTheDocument();
};

export async function skills_title() {
  expect(page.title("PROFESSIONAL SKILLS")).toBeInTheDocument();
};

export async function javascript_and_typescript() {
  expect_skill("javascript & typescript", SkillPercentage.JavascriptAndTypescript)
};

export async function react() {
  expect_skill("react", SkillPercentage.React)
};

export async function html_and_css() {
  expect_skill("html & css", SkillPercentage.HtmlAndCss)
};

export async function c_sharp() {
  expect_skill("c#", SkillPercentage.CSharp)
};

export async function sql() {
  expect_skill("sql", SkillPercentage.Sql)
};

export async function dot_net() {
  expect_skill(".net", SkillPercentage.DotNet)
};

export async function experience_and_education_headline() {
  expect(page.headline("My Growth")).toBeInTheDocument();
};

export async function experience_and_education_title() {
  expect(page.title("EXPERIENCE & EDUCATION")).toBeInTheDocument();
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
  expect(page.text("experience-text")).toBeInTheDocument();
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
  expect(page.text("education-text")).toBeInTheDocument();
};

export async function image() {
  expect(page.image).toBeInTheDocument();
};

export async function contact_headline() {
  expect(page.headline("Don’t Be A Stranger")).toBeInTheDocument();
};

export async function contact_title() {
  expect(page.title("GET IN TOUCH")).toBeInTheDocument();
};

export async function contact_button() {
  expect(page.icon("Contact")).toBeInTheDocument();
  expect(page.contactemail).toBeInTheDocument();
};

export async function footer_text() {
  expect(page.footertext).toBeInTheDocument();
};

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

async function expect_skill(skill: string, percentage: SkillPercentage) {
  expect(page.skillname(skill.toUpperCase())).toBeInTheDocument();
  expect(page.skillpercentage(percentage)).toBeInTheDocument();
  expect(page.skillprogress(skill)).toBeInTheDocument();
}
