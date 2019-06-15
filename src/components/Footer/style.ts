import styled, { css } from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Colors from 'styles/colors';
import OriginalWrapper from 'components/Wrapper';

export const Wrapper = styled(OriginalWrapper)``;

export const WarningTitle = styled.div`
  font-size: 1.125rem;
  color: ${Colors.pastelRed};
  text-align: center;
  display: block;
  margin-bottom: ${Spacing.base * 4}px;
`;

export const Infos = styled.div`
  display: flex;
  justify-content: center;
  padding: ${Spacing.base * 2}px 0;
`;

const ItemCss = css`
  color: ${Colors.lightGrey};
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
