import styled, { css } from 'styled-components';

import * as Typography from 'styles/typography';
import * as Spacing from 'styles/spacing';
import * as Colors from 'styles/colors';
import OriginalWrapper from 'components/Wrapper';
import OriginalSignUpForm from 'containers/SignUpForm';

export const Wrapper = styled(OriginalWrapper)`
  text-align: center;
  padding-top: ${Spacing.base * 10}px;
`;

export const Title = styled.h2`
  ${Typography.title};
`;

export const SignUpForm = styled(OriginalSignUpForm)`
  margin: 0 auto ${Spacing.base * 20}px;
`;

export const WarningTitle = styled.div`
  color: ${Colors.pastelRed};
  display: block;
  margin-bottom: ${Spacing.base}px;
`;

export const Infos = styled.div`
  display: flex;
  justify-content: center;
  padding: ${Spacing.base * 2}px 0;
`;

const ItemCss = css`
  color: ${Colors.lightGrey};
  font-size: 0.825rem;
  padding: ${Spacing.base}px;
  margin: 0 ${Spacing.base * 2}px;
`;

export const Copyright = styled.span`
  ${ItemCss};
`;

export const Contact = styled.a`
  ${ItemCss};
  text-decoration: none;

  &:hover {
    color: ${Colors.azure};
  }
`;
