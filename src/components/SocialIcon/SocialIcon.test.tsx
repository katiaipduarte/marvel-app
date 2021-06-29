import 'jest-styled-components';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import SocialIcon from './SocialIcon';
import { render } from '@testing-library/react';

describe('the <SocialIcon /> component', () => {
  it('should not render <SocialIcon /> because of lack of href', () => {
    const { container } = render(<SocialIcon name="github" icon={faGithub} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render <SocialIcon /> because of href been empty', () => {
    const { container } = render(<SocialIcon name="github" icon={faGithub} href="" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render <SocialIcon /> correctly', () => {
    const { container } = render(<SocialIcon name="github" icon={faGithub} href="test" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
