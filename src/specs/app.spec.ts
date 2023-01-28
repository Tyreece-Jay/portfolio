import { header_headline, header_title, icons, down_arrow, about_title, about_text, skills_title, 
  experience_and_education_title, experience_place, experience_dates, experience_text, footer_text, 
  clickable_linkedin_icon, clickable_github_icon, javascript_and_typescript, react, html_and_css, 
  education_place, education_dates, education_text, contact_title, contact_button, experience_occupation, 
  education_occupation, about_headline, c_sharp, sql, dot_net, skills_headline, experience_and_education_headline, 
  contact_headline, clickable_figma_icon, clickable_email_button, image, clickable_down_arrow } from './app.steps'

describe('renders header', () => {
  test('icons', icons);
  test('headline', header_headline);
  test('title', header_title);
  test('down arrow', down_arrow);
})

describe('renders about', () => {
  test('headline', about_headline);
  test('title', about_title);
  test('text', about_text);
  test('image', image);
})

describe('renders skills', () => {
  test('headline', skills_headline);
  test('title', skills_title);
  test('javascript & typescript', javascript_and_typescript);
  test('react', react);
  test('html & css', html_and_css);
  test('c#', c_sharp);
  test('sql', sql);
  test('.net', dot_net);
})

describe('renders experience and education', () => {
  test('headline', experience_and_education_headline);
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
  test('headline', contact_headline);
  test('title', contact_title);
  test('button', contact_button);
})

describe('renders footer', () => {
  test('footer text', footer_text);
})

describe('interactions', () => {
  test('clickable down arrow', clickable_down_arrow);
  test('clickable LinkedIn icon', clickable_linkedin_icon);
  test('clickable GitHub icon', clickable_github_icon);
  test('clickable Figma icon', clickable_figma_icon);
  test('clickable Email button', clickable_email_button);
})
