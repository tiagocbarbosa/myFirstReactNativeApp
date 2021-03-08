import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

// I am using React Props and State in this example
const Cat = (props) => {
  const [timesPetted, setTimesPetted] = useState(0)

  return (
    <View>
      <Text>
        Hi, my name is {props.name}. Number of times you fed me: {timesPetted}!
      </Text>
      <Button
        onPress={() => {
          setTimesPetted(timesPetted + 1)
        }}
        title='Feed me!'
      />
    </View>
  )
}

const Cafe = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'}}>
        <Cat name='Maru' />
    </View>
  )
}

export default Cafe