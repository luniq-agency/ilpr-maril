'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '../i18n/navigation';

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, { locale: e.target.value });
  };

  return (
    <select className="language-switcher" defaultValue={locale} onChange={handleChange}>
      <option value="en">EN</option>
      <option value="de">DE</option>
      {/*
      <option value="el">EL</option>
      */}
    </select>
  );
}
