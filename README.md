[![TDD Approved](https://img.shields.io/badge/TDD-Approved-green.svg)]()
# Enzyme Drivers

* [What](#say-what)
* [Why](#but-why)
* [How](#how)
* [API](#api)

### Say What??

Enzyme Drivers is a library that will help you write [enzyme](https://github.com/airbnb/enzyme)-based tests in a way that is much cleaner and better organized than you might without it.

*Note: Do you write your apps in angular? No problem, we've got you covered. Check out [turnerjs](https://github.com/wix/turnerjs), which implements a similar concept for angular components.*

### But, Why??

[Enzyme](https://github.com/airbnb/enzyme) is a great tool for writing component tests for React components. The only problem is the amount of bolierplate involved...especially once you try to write tests for React Native components. (You are testing your React Native app, right? Right.) That's because you can't render anything that includes native binaries in node, so any component that relies on native code must use mocks. Lots of them.

But you know you must test, so what can you do? **Enzyme Drivers** to the resuce!

Enzyme Drivers introduces a new way of organazing your enzyme tests, using test drivers. Of course, the concept is not really new. Test drivers have been with us for a long time now and we like them a lot. Now we have them for React components as well.

Not sure what a test driver is for? Think of it as a cool way to organize your tests and make them more readable than ever. How, you ask? Read on...

## How

First, let's install:
```shell
npm install enzyme-drivers --save-dev
```

Now, let's look at some examples:

Consider the following React Native component:
```jsx
export default function DummyReactNativeComponent({text, onTap}) {
  return (
    <View>
      <Text testID="myText">Some Text</Text>
      <Text testID="textFromProp" onPress={onTap}>{text}</Text>
    </View>
  );
}
```

We can test it using Enzyme Drivers:

```jsx
it('should render component', () => {
  //given
  driver.render({text: 'It works!'});

  //then
  expect(driver.text).toBe('It works!');
});
```

Looks neat, right? The test is very readable and clear. Let's write another one. Let's test that tap is working:

```jsx
it('should tapOn', () => {
  const tapSpy = jasmine.createSpy('tap');
  //given
  driver.render({text: 'yoba', onTap: tapSpy});
  //when
  driver.tap();
  //then
  expect(tapSpy).toHaveBeenCalled();
});
```

What's `driver`? I'm glad you asked.

```jsx
// setup the driver in the beforeEach
beforeEach(() => {
  driver = new MyDriver({
    //the path is relative to the src/ folder (you can change it if you need. see api section)
    path: 'components/dummy-react-native-component',
    mocks: {},
  });
});

//The driver extends the React Native Driver. We also support regular react with BaseDriver
class MyDriver extends RNDriver {
  get text() {
    return this.childrenOf('textFromProp');
  }

  tap() {
    this.tapOn('textFromProp');
  }
}
```

That's it. Now checkout the full [api](#api).

## API

For a better looking API check out our tests ;)


| Method      | Parameters      | Comment                                                                                                                                                                                                                                                                                                                                                     |
|-------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| constructor | options: object | **path**: string relative path from the project root/src folder <br> **mocks**: object - set of key / value.<br> The key is the import you want to mock and the value is the mocked value<br> **isRelativePathFromRoot**: boolean / optional / default to true<br> **rootFolder**: string / optional / default to 'src/' <br> **targetImport** default to 'default'<br> **commonjs**: boolean / optional / support commonjs exports (`module.exports = MyComponent`) |
| byId        | testId: string  | returns enzyme element by testID property                                                                                                                                                                                                                                                                                                                   |
| childrenOf  | testId: string  | returns .props().children of the given element                                                                                                                                                                                                                                                                                                              |
| propsOf     | testId: string  | returns .props() of the given element                                                                                                                                                                                                                                                                                                                       |
| tapOn       | testId: string  | react native only: simulate press on the given element                                                                                                                                                                                                                                                                                                      |
| stylesById  | testId: string  | react native only: returns a merged object of all of the styles on the given element                                                                                                                                                                                                                                                                        |
| state       |                 | returns the component's state                                                                                                                                                                                                                                                                      |
| setState    |                 | sets the component's state                                                                                                                                                                                                                                                                      |











