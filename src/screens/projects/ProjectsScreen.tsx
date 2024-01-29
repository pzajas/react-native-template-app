import { StyleSheet, Text, View } from 'react-native'

export const ProjectsScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Projects Screen</Text>
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
