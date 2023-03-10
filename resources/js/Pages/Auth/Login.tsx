import { useForm, Head } from '@inertiajs/inertia-react';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import AuthenticationCard from '@/Components/AuthenticationCard';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { Button } from 'react-bootstrap';

interface Props {
  canResetPassword: boolean;
  status: string;
}

export default function Login({ canResetPassword, status }: Props) {
  const route = useRoute();
  const form = useForm({
    email: '',
    password: '',
    remember: '',
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post(route('login'), {
      onFinish: () => form.reset('password'),
    });
  }

  return (
    <AuthenticationCard>
      <Head title="Login" />

      {status && (
        <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
      )}

      <form onSubmit={onSubmit}>
        <div>
          <InputLabel htmlFor="email">Email</InputLabel>
          <TextInput
            id="email"
            type="email"
            className="mt-1 block w-[300px] md:w-[400px]"
            value={form.data.email}
            onChange={e => form.setData('email', e.currentTarget.value)}
            required
            autoFocus
          />
          <InputError className="mt-2" message={form.errors.email} />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password">Password</InputLabel>
          <TextInput
            id="password"
            type="password"
            className="mt-1 block w-[300px] md:w-[400px]"
            value={form.data.password}
            onChange={e => form.setData('password', e.currentTarget.value)}
            required
            autoComplete="current-password"
          />
          <InputError className="mt-2" message={form.errors.password} />
        </div>

        <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0 mt-4">
          {/* {canResetPassword && (
            <div>
              <InertiaLink
                href={route('password.request')}
                className="underline text-sm text-gray-600 hover:text-gray-900"
              >
                Forgot your password?
              </InertiaLink>
            </div>
          )} */}

          <div className="flex items-center">
            {/* <InertiaLink
              href={route('register')}
              className="underline text-sm text-gray-600 hover:text-gray-900"
            >
              Need an account?
            </InertiaLink> */}

            {/* <PrimaryButton
              className={classNames('ml-4 md:ml-[100px]', { 'opacity-10': form.processing })}
              disabled={form.processing} type='submit'
            >
             <p className='font-sans text-putih font-bold'>Login</p>
            </PrimaryButton> */}
            <Button className='ml-[100px] md:ml-[100px] w-[100px] h-[35px] rounded-md bg-mainblue text-putih font-semibold md:mt-[20px]'
              disabled={form.processing} type='submit'>
                Login
            </Button>
          </div>
        </div>
      </form>
    </AuthenticationCard>
  );
}
