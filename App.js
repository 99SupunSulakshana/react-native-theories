import * as React from 'react';
import 'react-native-gesture-handler';
import Navigation from './Navigation';


function App() {
  return <Navigation />;
}

// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Components: ComponentsScreen,
//     List: ListScreen
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOption: {
//       title: 'App'
//     }
//   }
// );

export default App;

// export default function App() {
//   return (
//     <CustomButtons/>
//   );
// };
