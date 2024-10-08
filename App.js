import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react'

import Button from './src/components/Button'
import Display from './src/components/Display'
import GlobalStyle from './GlobalStyle';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0,
}

export default class App extends Component {
  state = {
    ...initialState
  }

  addDigit = n => {
    if ( n === '.' && this.state.displayValue.includes('.')){
      return
    }  

    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({displayValue, clearDisplay: false})

    if (n !== '.') {
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({ values })
    }
  }

  clearMemory = () => {
    this.setState({...initialState})
  }


  setOperation = operation => {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true})
    } else {
      const equals = opertation === '='
      const values = {...this.state.values}
    } try {
      values[0] = eval(`${values[0]} ${operation} ${values[1]}`)
    } catch (e) {
      values[0] = this.state.values[0]
    }

    values[1] = 0
    this.setState({
      displayValue: values[0],
      operation: equal ? null : operation,
      current: equals ? 0 : 1,
      clearDisplay: !equals,
      values,
    })
  }

  render() {
  return (
    <View style={[GlobalStyle.safeArea, styles.container]}>
      <Display value={this.state.displayValue}/>
      <View style={styles.button}>
        <Button label='AC' triple onClick={this.clearMemory}/>
        <Button label='/' operation onClick={() => this.setOperation('/')}/>
        <Button label='7' onClick={this.addDigit}/>
        <Button label='8' onClick={() => this.addDigit(8)}/>
        <Button label='9' onClick={() => this.addDigit(9)}/>
        <Button label='*' operation onClick={() => this.setOperation('*')}/>
        <Button label='4' onClick={() => this.addDigit(4)}/>
        <Button label='5' onClick={() => this.addDigit(5)}/>
        <Button label='6' onClick={() => this.addDigit(6)}/>
        <Button label='-' operation onClick={() => this.setOperation('-')}/>
        <Button label='1' onClick={() => this.addDigit(1)}/>
        <Button label='2' onClick={() => this.addDigit(2)}/>
        <Button label='3' onClick={() => this.addDigit(3)}/>
        <Button label='+' operation onClick={() => this.setOperation('+')}/>
        <Button label='0' double onClick={() => this.addDigit(0)}/>
        <Button label='.' onClick={() => this.addDigit('.')}/>
        <Button label='=' operation onClick={() => this.setOperation('=')}/>
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },

  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
