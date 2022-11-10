export const loadingBefore = async (to: string) => {
  window.$store && (window.$store.loading = true);
  const router = await import(`@/views/${to}.vue`);
  window.$store && (window.$store.loading = false);
  return router;
};
