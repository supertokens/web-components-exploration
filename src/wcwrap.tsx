import { registerWebComponents, type ComponentKeys } from "./register";

interface RoutePair {
  path: string;
  component: ComponentKeys;
}

export const loadComponents = async (componentsToLoad: ComponentKeys[]) => {
  componentsToLoad.forEach((name) => {
    registerWebComponents(name);
  });
};

export const generateRoutes = (routePairs: RoutePair[]) => {
  console.log("stub for router");
  console.log(routePairs);
};

(window as any).loadComponents = loadComponents;
(window as any).generateRoutes = generateRoutes;
