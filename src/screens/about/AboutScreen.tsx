import { StyleSheet, Text, View } from 'react-native'

export const AboutScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>About Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
