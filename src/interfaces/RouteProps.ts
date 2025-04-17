import React, {LazyExoticComponent} from "react";

export interface RouteProps {
  path?: string;
  element?: LazyExoticComponent<() => JSX.Element> | null;
  layout?: LazyExoticComponent<(props: { children: React.ReactNode }) => JSX.Element> | null;
  guard?: LazyExoticComponent<(props: { children: React.ReactNode }) => JSX.Element> | null;
  children?: RouteProps[];
}