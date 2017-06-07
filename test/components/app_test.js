import { renderComponent, expect } from  '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests;
describe('App', () => {
  
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a comment box', ()=> {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
  /*
  // Use 'it' to test a single attribute of a target
  it('shows the correct text', () => {

      // create an instance of App(helper function that renders a component)
      const component = renderComponent(App);
      // Use 'expect' to make an 'assertion' atbout a target
      expect(component).to.contain('React simple starter');
  });
  */
});