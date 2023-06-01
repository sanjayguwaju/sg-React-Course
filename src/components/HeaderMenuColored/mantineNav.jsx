import React from 'react';
import { Header, Menu, Group, Center, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';

const useStyles = () => ({
  header: {
    backgroundColor: 'your primary color',
    borderBottom: 0,
  },

  inner: {
    height: '2.8rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    '@media (max-width: 576px)': {
      display: 'none',
    },
  },

  burger: {
    '@media (min-width: 576px)': {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '0.5rem 0.75rem',
    borderRadius: 'your radius',
    textDecoration: 'none',
    color: 'your text color',
    fontSize: 'your font size',
    fontWeight: 'your font weight',

    '&:hover': {
      backgroundColor: 'your hover background color',
    },
  },

  linkLabel: {
    marginRight: '0.3125rem',
  },
});

const HeaderMenuColored = ({ links }) => {
  const [opened, toggle] = useDisclosure(false);
  const classes = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={56} className={classes.header} mb={120}>
      <Container>
        <div className={classes.inner}>
          <MantineLogo size={28} inverted />
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            color="#fff"
          />
        </div>
      </Container>
    </Header>
  );
};

export default HeaderMenuColored;
