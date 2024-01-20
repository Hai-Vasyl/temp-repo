export const joinClass = (
  ...classNames: (string | boolean | undefined | null)[]
) => {
  return classNames.filter((className) => !!className).join(" ");
};
