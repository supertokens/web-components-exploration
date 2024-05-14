declare namespace JSX {
  interface IntrinsicElements {
    "st-shell": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    "st-email-password": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    "st-dashboard": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}

interface HTMLElement {
  navigate?: null | ((path: string) => void);
}
