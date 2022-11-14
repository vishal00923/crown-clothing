import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';

import { AuthContainer } from './AuthStyles';

export default function Auth() {
  return (
    <AuthContainer>
      <SignIn />
      <SignUp />
    </AuthContainer>
  );
}
