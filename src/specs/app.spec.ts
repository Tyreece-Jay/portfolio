import { name, headlines, icons, down_arrow, about_title, about_text, skills_title, experience_and_education_title, experience_place, experience_dates, experience_text, footer_text, clickable_linkedin_icon, clickable_github_icon, javascript_and_typescript, react, html_and_css, education_place, education_dates, education_text, contact_title, contact_button, experience_occupation, education_occupation } from './app.steps'

describe('renders header and footer', () => {
  test('name', name);
  test('headlines', headlines);
  test('down arrow', down_arrow);
  test('footer text', footer_text);
})

describe('renders about', () => {
  test('title', about_title);
  test('text', about_text);
  test('icons', icons);
})

describe('renders skills', () => {
  test('title', skills_title);
  test('javascript & typescript', javascript_and_typescript);
  test('react', react);
  test('html & css', html_and_css);
})

describe('renders experience and education', () => {
  test('title', experience_and_education_title);
  test('experience place', experience_place);
  test('experience occupation', experience_occupation);
  test('experience dates', experience_dates);
  test('experience text', experience_text);
  test('education place', education_place);
  test('education occupation', education_occupation);
  test('education dates', education_dates);
  test('education text', education_text);
})

describe('renders contact', () => {
  test('title', contact_title);
  test('button', contact_button);
})

describe('interactions', () => {
  test('clickable LinkedIn icon', clickable_linkedin_icon);
  test('clickable GitHub icon', clickable_github_icon);
})