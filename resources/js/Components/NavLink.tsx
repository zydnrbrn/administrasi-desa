import { InertiaLink } from '@inertiajs/inertia-react';
import React, { PropsWithChildren } from 'react';

interface Props {
  href: string;
  active?: boolean;
}

export default function NavLink({
  active,
  href,
  children,
}: PropsWithChildren<Props>) {
  const classes = active
    ? 'inline-flex items-center px-1 pt-1 duration-500 ease-in-out rounded-[10px] font-medium bg-putih mb-[10px] bg-opacity-25 transition'
    : 'inline-flex items-center px-1 pt-1 duration-500 ease-in-out rounded-[10px] font-medium hover:bg-putih/30 mb-[10px] transition';

  return (
    <InertiaLink href={href} className={classes}>
      {children}
    </InertiaLink>
  );
}
