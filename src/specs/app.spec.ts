import { name, headlines, icons, down_arrow, about_header, about_text, skills_title, skills, footer_text, clickable_linkedin_icon, clickable_github_icon } from './app.steps'

describe('renders', () => {
  test('name', name);
  test('headlines', headlines);
  test('icons', icons);
  test('down arrow', down_arrow);
  test('about title', about_header);
  test('about text', about_text);
  test('skills title', skills_title);
  test('skills', skills);
  test('footer text', footer_text); 
});

describe('interactions', () => {
  test('clickable LinkedIn icon', clickable_linkedin_icon);
  test('clickable GitHub icon', clickable_github_icon);
})