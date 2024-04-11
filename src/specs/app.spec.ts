import {
  clickable_linkedin_icon, clickable_github_icon,
  clickable_figma_icon, clickable_email_button, clickable_down_arrow} from './app.steps'

describe('interactions', () => {
  test('clickable down arrow', clickable_down_arrow);
  test('clickable LinkedIn icon', clickable_linkedin_icon);
  test('clickable GitHub icon', clickable_github_icon);
  test('clickable Figma icon', clickable_figma_icon);
  test('clickable Email button', clickable_email_button);
})
