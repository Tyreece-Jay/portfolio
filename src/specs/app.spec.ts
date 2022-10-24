import { name, headlines, icons, down_arrow, about_title, about_text, skills_title, skills, experience_title, experience_place, experience_dates, experience_text, footer_text, clickable_linkedin_icon, clickable_github_icon } from './app.steps'

describe('renders', () => {
  test('name', name);
  test('headlines', headlines);
  test('icons', icons);
  test('down arrow', down_arrow);
  test('about title', about_title);
  test('about text', about_text);
  test('skills title', skills_title);
  test('skills', skills);
  test('experience title', experience_title);
  test('experience place', experience_place);
  test('experience dates', experience_dates);
  test('experience text', experience_text);
  test('footer text', footer_text); 
});

describe('interactions', () => {
  test('clickable LinkedIn icon', clickable_linkedin_icon);
  test('clickable GitHub icon', clickable_github_icon);
})