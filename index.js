import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, Platform, View } from 'react-native';

class HideWithKeyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboardUp: false,
    };
  }

  componentWillMount() {
    this._keyboardDidShowListener =
      Keyboard.addListener(
        Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow',
        this.keyboardDidShow.bind(this)
      );
    this._keyboardDidHideListener =
      Keyboard.addListener(
        Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide',
        this.keyboardDidHide.bind(this)
      );
  }

  componentWillUnmount() {
    this._keyboardDidShowListener.remove();
    this._keyboardDidHideListener.remove();
  }

  keyboardDidShow() {
    this.setState({
      keyboardUp: true,
    });
  }

  keyboardDidHide() {
    this.setState({
      keyboardUp: false,
    });
  }

  render() {
    if (this.state.keyboardUp) {
      return (<View />);
    }

    return (
      <View {...this.props}>
        {this.props.children}
      </View>
    );
  }
}

HideWithKeyboard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

class ShowWithKeyboard extends HideWithKeyboard {
  render() {
    if (!this.state.keyboardUp) {
      return (<View />);
    }

    return (
      <View {...this.props}>
        {this.props.children}
      </View>
    );
  }
}
export { HideWithKeyboard, ShowWithKeyboard };
export default HideWithKeyboard;
