import styled, { css } from 'styled-components';

import * as Typography from 'styles/typography';
import * as Spacing from 'styles/spacing';
import * as Colors from 'styles/colors';
import * as Responsive from 'styles/responsive';
import { Wrapper as OriginalWrapper } from 'components/Grid';
import OriginalPreSignUpForm from 'containers/PreSignUpForm';

export const Container = styled.div`
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
`;

export const Wrapper = styled(OriginalWrapper)`
  text-align: center;
  padding-top: ${Spacing.base * 5}px;
`;

export const Title = styled.h2`
  ${Typography.title};
`;

export const PreSignUpForm = styled(OriginalPreSignUpForm)`
  margin: 0 auto ${Spacing.base * 8}px;
`;

export const WarningTitle = styled.div`
  color: ${Colors.darkGrey};
  display: block;
  margin-bottom: ${Spacing.base * 2}px;
  padding-top: ${Spacing.base * 20}px;
`;

export const Infos = styled.div`
  @media (min-width: ${Responsive.phone + 1}px) {
    display: flex;
    justify-content: center;
  }
`;

const ItemCss = css`
  color: ${Colors.pigeonGrey};
  font-size: 0.825rem;
  padding: ${Spacing.base}px;
  margin: 0 ${Spacing.base * 2}px;
  display: block;
`;

export const Copyright = styled.span`
  ${ItemCss};
`;

export const Contact = styled.a`
  ${ItemCss};
  text-decoration: none;

  &:hover {
    color: ${Colors.purple};
  }
`;

export const IllustrationMountains = styled.img`
  z-index: -1;
  position: absolute;
  bottom: -${Spacing.base * 9}px;
  width: auto;
  left: 50%;
  transform: translateX(-50%);
  height: ${Spacing.base * 40}px;
`;
