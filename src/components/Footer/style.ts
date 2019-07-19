import styled, { css } from 'styled-components';

import * as Typography from 'styles/typography';
import * as Spacing from 'styles/spacing';
import * as Colors from 'styles/colors';
import * as Responsive from 'styles/responsive';
import { Wrapper as OriginalWrapper, Section } from 'components/Grid';
import OriginalPreSignUpForm from 'containers/PreSignUpForm';

export const Container = styled(Section)`
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  padding-bottom: 0 !important;
`;

export const Wrapper = styled(OriginalWrapper)`
  text-align: center;
`;

export const Title = styled.h2`
  ${Typography.title};

  margin-bottom: ${Spacing.base * 2}px;
`;

export const PreSignUpForm = styled(OriginalPreSignUpForm)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${Spacing.base * 4}px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  min-height: ${Spacing.base * 30}px;
`;

export const Content = styled.div``;

export const WarningTitle = styled.div`
  color: ${Colors.darkGrey};
  display: block;
  margin-bottom: ${Spacing.base * 2}px;
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
