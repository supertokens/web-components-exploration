declare namespace JSX {
  interface IntrinsicElements {
    "st-shell": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    "st-email-password": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      { navigate: (path: string) => void }
    >;
    "st-dashboard": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      { navigate: (path: string) => void }
    >;
  }
}

interface HTMLElement {
  navigate?: null | ((path: string) => void);
}
