import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import SplashScreen from './src/Screens/SplashScreen/SplashScreen';
import OnBoardingScreens from './src/Screens/OnBoardingScreens/OnBoardingScreens';
import Home from './src/Screens/Home/Home';
import SignUp from './src/Screens/SignUp/SignUp';
import Login from './src/Screens/Login/Login';
import Authentication from './src/Components/Authentication/Authentication';
import { ContextHandlerProvider } from './src/Context/ContextHandler';
import Description from './src/Screens/Description/Description';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnBoardingScreens"
        component={OnBoardingScreens}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Authentication"
        component={Authentication}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Description"
        component={Description}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function Navigation() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextHandlerProvider>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </ContextHandlerProvider>
    </QueryClientProvider>
  );
}
export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#153f69" />
      <Navigation />
    </>
  );
}
