import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
  }
}

export const lightTheme: DefaultTheme = {
	primaryColor: "blue",
	secondaryColor: "red",
    backgroundColor: "white"
};

export const darkTheme: DefaultTheme = {
	primaryColor: " #fbfcfc",
	secondaryColor: " #d2b4de ",
    backgroundColor: "#212f3c"
};