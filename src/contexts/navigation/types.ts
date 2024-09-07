export type RootStackParamList = {
  "/": undefined;
  "/example": {
    params: ExampleParams;
  };
};

type ExampleParams = {
  test?: string | string[];
};

export type NavigationParams = ExampleParams;
