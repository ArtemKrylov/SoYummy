import {
  Container,
  Link,
  List,
  ListItem,
  SvgIcon,
  Typography,
} from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image } from 'mui-image';
import logo from '../../shared/data/svg/logo.svg';

const Header: React.FC = () => {
  console.log(logo);
  return (
    <Container>
      <Link component={NavLink} to={'/categories'} className="logo">
        <SvgIcon area-aria-label="logo and link to categories page"></SvgIcon>
      </Link>
      <nav>
        <List>
          <ListItem>
            <Link component={NavLink} to={'/categories'}>
              Categories
            </Link>
            <Link component={NavLink} to={'/add_recipes'}>
              Add recipes
            </Link>
            <Link component={NavLink} to={'/my_recipes'}>
              My recipes
            </Link>
            <Link component={NavLink} to={'/favourites'}>
              Favorites
            </Link>
            <Link component={NavLink} to={'/shopping_list'}>
              Shopping list
            </Link>
          </ListItem>
        </List>
      </nav>
      <Image
        src=""
        width={34}
        height={34}
        showLoading
        errorIcon={'../../shared/data/img/default-profile.jpg'}
        fit="cover"
      />
      <Typography>Name</Typography>
      <SvgIcon area-aria-label="menu"></SvgIcon>
    </Container>
  );
};

export default Header;
