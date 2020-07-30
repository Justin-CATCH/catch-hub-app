export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  People: undefined;
  Library: undefined;
  Me: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Person = {
  photo?: string;
  askAbout?: string;
  bio?: string;
  birthday?: string;
  email?: string;
  github?: string;
  joined?: string;
  name?: string;
  role?: string;
  slack?: string;
};
