/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

interface IAppProps { }
interface IAppState {
  users: {id: number, name: string }[];
}

interface Props {}
export default class App extends Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props)
    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    try {
      let res = await fetch('https://jsonplaceholder.typicode.com/users');
      let users = await res.json();
      this.setState({ users });
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.users.map(user => (
          <Text key={user.id} style={styles.textStyle}>{user.name}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0091ea',
  },
  textStyle: {
    fontSize: 20,
    margin: 5,
    color: 'white'
  }
});
