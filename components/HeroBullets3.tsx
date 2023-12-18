import {
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  Stack,
  Image,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './HeroBullets.module.css';

export function HeroBullets3() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <span className={classes.highlight}>Noted App</span> <br />{' '}
          </Title>
          <Text mt="md">
            My very first full stack application using React Vite! Functionality is a bit simple,
            but it allowed me to dip my toes into a massive tech stack from the ground up. Learn
            more in my Github readme file!{' '}
          </Text>
          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Backend</b> – axios, REST, CRUD functionality, promises , Node.js, Express and
              express-async-errors, MongoDB, Mongoose, token auth, app deployment, and so much
              middleware.
            </List.Item>
            <List.Item>
              <b>Tools and Testing</b> – Postman, VSC REST client, automated testing (jest,
              @testing-library, babel, supertest, Cypress)
            </List.Item>
            <List.Item>
              <b>Frontend</b> – React, React Redux, React Query, React Router
            </List.Item>
            <List.Item>
              <b>Styling and Deployment</b> – Lightly styled with mantine and deployed on Fly.io
            </List.Item>
          </List>
          <Group mt={30}>
            <Button
              radius="xl"
              size="md"
              className={classes.control}
              onClick={() => window.open('https://summer-glitter-2194.fly.dev/', '_blank')}
            >
              View App
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
              onClick={() => window.open('https://github.com/eotssa/Noted', '_blank')}
            >
              Source code
            </Button>
          </Group>
        </div>
        <Stack align="center">
          <Image
            fit="contain"
            src="/icons/MongoDB_Fores-Green.svg" // Adjust the path as needed
            className={classes.image}
            style={{ maxWidth: '70%', height: 'auto' }}
          />
          <Image
            src="/icons/cypress.svg" // Adjust the path as needed
            className={classes.image}
            style={{ maxWidth: '30%', height: 'auto' }}
          />
          <Image
            fit="contain"
            src="/icons/react.svg" // Adjust the path as needed
            className={classes.image}
            style={{ maxWidth: '25%', height: 'auto' }}
          />
          <Image
            fit="contain"
            src="/icons/jest.svg" // Adjust the path as needed
            className={classes.image}
            style={{ maxWidth: '25%', height: 'auto' }}
          />
          <Image
            fit="contain"
            src="/icons/node-js.svg" // Adjust the path as needed
            className={classes.image}
            style={{ maxWidth: '25%', height: 'auto' }}
          />
        </Stack>
      </div>
    </Container>
  );
}
