import styled from 'styled-components';
import { Link } from 'gatsby';

import Wrapper from 'components/Wrapper';

import * as Spacing from 'styles/spacing';
import * as Colours from 'styles/colours';
import * as Typography from 'styles/typography';

const StyledWrapper = styled(Wrapper)`
  width: 100%;
`;

export { StyledWrapper as Wrapper };

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${Colours.lightGrey};
  padding: ${Spacing.base * 3}px 0 ${Spacing.base * 7}px;
`;

export const Copyright = styled.div`
  font-size: ${Typography.size.base};
`;

export const LinksList = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li``;

const StyledLink = styled(Link)`
  font-size: ${Typography.size.base};
  margin-right: ${Spacing.base * 3}px;
  color: ${Colours.darkGrey};

  &:last-child {
    margin-right: 0;
  }

  &:active,
  &:hover {
    color: ${Colours.azure};
  }
`;

export { StyledLink as Link };
