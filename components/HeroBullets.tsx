import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './HeroBullets.module.css';
import image2 from '../components/image2.svg';

export function HeroBullets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <span className={classes.highlight}>Wilson Wu</span> <br />{' '}
          </Title>
          {/* // prettier-ignore */}
          <Text mt="md">Welcome to my space on the web!</Text>
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
              <b>Web Developer</b> – I worked for a real estate company building custom web features
              and ended up really enjoying my day to day!
            </List.Item>
            <List.Item>
              <b>Education</b> – I graduated from John Jay College with a BS in Computer Science and
              Information Security in December 2024. I also have a BA in Biological Sciences from
              Baruch College.
            </List.Item>
            <List.Item>
              <b>Site Info</b> – This site was made using, using Next.js, Typescript, and Mantine.
              If you want to fork it for your own use, you are free to do so!
            </List.Item>
          </List>
          <Group mt={30}>
            <Button
              onClick={() =>
                window.open(
                  'https://github.com/eotssa/homepage/blob/master/WilsonWu%20Resume.pdf/',
                  '_blank'
                )
              }
              radius="xl"
              size="md"
              className={classes.control}
            >
              View Resume
            </Button>
            <Button
              onClick={() => window.open('https://github.com/eotssa/homepage', '_blank')}
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              Source code
            </Button>
          </Group>
        </div>
        <Image src="/icons/image2.svg" className={classes.image} />
      </div>
    </Container>
  );
}
