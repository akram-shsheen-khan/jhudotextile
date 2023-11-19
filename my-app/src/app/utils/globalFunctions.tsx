export const handleFocus = (
  event: React.FocusEvent<HTMLInputElement>
): void => {
  event.target.select();
};
