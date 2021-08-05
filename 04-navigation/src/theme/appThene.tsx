import { StyleSheet } from "react-native";

export const colors = {
  primary: '#5856D6'
}

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10
  },
  bigButton: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  bigButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  avatarContainer: {
    marginTop: 10,
    alignItems: "center"
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 30
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
  menuButton: {
    marginTop: 10
  },
  menuText: {
    fontSize: 20
  }
})