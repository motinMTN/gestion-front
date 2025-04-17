export interface PropsProtectedRoute {
  isAuthenticated: boolean | undefined;
  path: string;
  component: React.ComponentType<any>;
}