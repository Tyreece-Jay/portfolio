import { name, headline, down_arrow, about_text, skills_title, footer_text } from './app.steps'

describe('renders', () => {
  test('name', name);
  test('headline', headline);
  test('down arrow', down_arrow);
  test('about text', about_text);
  test('skills title', skills_title);
  test('footer text', footer_text); 
});