const bundles = {
  emailpassword: ["./emailpassword.mjs", "./dashboard.mjs"],
  dummy: ["./dummy.mjs"],
  fakesocial: ["./fakesocial.mjs"],
};

export const load = async (key: keyof typeof bundles) => {
  const bundle = bundles[key];
  for (const file of bundle) {
    const wrapper = await import(file);
    wrapper.load();
  }
};

(window as any).ST = (window as any).ST || {};

(window as any).ST = {
  ...(window as any).ST,
  loader: {
    load,
  },
};
