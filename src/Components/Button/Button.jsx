import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  LoadingSpinner,
} from './ButttonStyles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  inverted: 'inverted',
  google: 'google-sign-in',
};

export const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
  }[buttonType]);

export default function Button({
  children,
  buttonType,
  isLoading = false,
  ...otherProps
}) {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <LoadingSpinner /> : children}
    </CustomButton>
  );
}
