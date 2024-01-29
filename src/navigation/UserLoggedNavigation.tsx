import 'react-native-gesture-handler'
import { HomeScreen } from '../screens/HomeScreen'
import { ProjectsScreen } from '../screens/projects/ProjectsScreen'
import { AboutScreen } from '../screens/about/AboutScreen'
import { ProfileScreen } from '../screens/profiles/ProfileScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { InstagramIcon } from '../assets/icons/InstagramIcon'
import { theme } from '../styles/theme'

export const UserLoggedNavigation = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      initialRouteName="WelcomeScreen"
      backBehavior="history"
      screenOptions={{
        tabBarStyle: {
          width: '100%',
        },
        header: () => <></>,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarIcon: ({ focused }) => <InstagramIcon focused={focused} />,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Projects" component={ProjectsScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}
