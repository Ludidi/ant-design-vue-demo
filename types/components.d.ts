declare module 'vue' {
  export interface GlobalComponents {
    component: <T>(props: { is: T } & ExtractComponentProps<T>) => JSX.Element;
  }
}

type ExtractComponentProps<T> = T extends new (...args: any) => { $props: infer P } ? P : {};

export {};
