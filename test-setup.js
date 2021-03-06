/*global jest,require*/
console.error = jest.fn();
jest.unmock('Image');
jest.mock('ScrollView', () => 'ScrollView');
jest.mock('TextInput', () => 'TextInput');
jest.mock('ListView', () => {
  return require('react').createClass({
    statics: {
      DataSource: require.requireActual('ListView').DataSource,
    },
    render() {
      return require('react').createElement('ListView', this.props, this.props.children);
    }
  });
});
jest.setMock('./app/utils/api', require('./app/utils/__mocks__/api'));