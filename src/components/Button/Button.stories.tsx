import React, { Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Button from './Button';
import { Themes } from './styles';

const Container = (storyFn: any) => (
  <View style={styles.container}>{storyFn()}</View>
);

const ButtonDemo = ({ theme }: { theme: Themes }) => (
  <Fragment>
    <Button theme={theme} size="small">
      Small button
    </Button>
    <Button theme={theme} size="medium">
      Medium Button
    </Button>
    <Button theme={theme} size="big">
      Big button
    </Button>
  </Fragment>
);

storiesOf('Button/Themes', module)
  .addDecorator(Container)
  .add('primary', () => <ButtonDemo theme="primary" />)
  .add('secondary', () => <ButtonDemo theme="secondary" />)
  .add('grey', () => <ButtonDemo theme="grey" />);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    flexGrow: 1,
    padding: 8,
    justifyContent: 'space-evenly',
  },
});