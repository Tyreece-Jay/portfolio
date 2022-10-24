import { name, headlines, icons, down_arrow, about_title, about_text, skills_title, experience_title, experience_place, experience_dates, experience_text, footer_text, clickable_linkedin_icon, clickable_github_icon, javascript_and_typescript, react, html_and_css } from './app.steps'

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
  test('title', experience_title);
  test('place', experience_place);
  test('dates', experience_dates);
  test('text', experience_text);
})

describe('interactions', () => {
  test('clickable LinkedIn icon', clickable_linkedin_icon);
  test('clickable GitHub icon', clickable_github_icon);
})