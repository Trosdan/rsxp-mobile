import AsyncStorage from '@react-native-community/async-storage';

export async function setUser(user) {
  await AsyncStorage.setItem('@rsxp:User', JSON.stringify(user));
}

export async function getUser() {
  const user = await AsyncStorage.getItem('@rsxp:User');
  return JSON.parse(user);
}
