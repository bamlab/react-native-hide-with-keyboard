# Hide Components when keyboard is shown

Devices screen are small especially when the keyboard takes half the space,
when you're working with forms for instance.  
One of the best way to handle that is to hide part of the view when the keyboard
shows up.

## Install it
```
npm install -S react-native-hide-with-keyboard
```

## Use it
```javascript
import HideWithKeyboard from 'react-native-hide-with-keyboard';

...

render() {
  return (
      <View>
        <HideWithKeyboard>
          <Text>Hidden when keyboard is shown</Text>
        </HideWithKeyboard>
        <Text>Never hidden</Text>
      </View>
    )
}
```
