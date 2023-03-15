import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import Home from '../screens/Home';
import User from '../screens/User';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator();
function MyDrawer() {
    return (
      <Drawer.Navigator drawerContent={props=><CustomDrawer{...props}/>} screenOptions={{
        headerShown:false ,
        drawerLabelStyle:{marginLeft:-25},
        drawerActiveBackgroundColor:'#7b2cbf',
        drawerInactiveTintColor:'#333',
        drawerActiveTintColor:'#fff'
        }}>
        <Drawer.Screen name="Home" component={Home} options={{
            drawerIcon:({color})=>(
                <Ionicons name="home-outline" size={22} Color={color} />
            )
        }} />
        <Drawer.Screen name="User" component={User} options={{
            drawerIcon:({color})=>(
                <Ionicons name="person-outline" size={22} Color={color} />
            )
        }} />
        
        
      </Drawer.Navigator>
    );
  };

  export default MyDrawer;