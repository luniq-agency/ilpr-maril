import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['de'],

  defaultLocale: 'de',

  localePrefix: 'always',

  pathnames: {
    '/': {
      en: '/',
      de: '/',
    },
    '/company': {
      en: '/company',
      de: '/unternehmen',
    },
    '/job/[slug]': {
      en: '/job/[slug]',
      de: '/job/[slug]',
    },
    '/company/history': {
      en: '/company/history',
      de: '/unternehmen/historie',
    },
    '/company/business-model': {
      en: '/company/business-model',
      de: '/unternehmen/geschaeftsmodell',
    },
    '/company/locations': {
      en: '/company/locations',
      de: '/unternehmen/standorte',
    },
    '/team': {
      en: '/team',
      de: '/team',
    },
    '/team/vision': {
      en: '/team/vision',
      de: '/team/vision',
    },
    '/team/csr': {
      en: '/team/csr',
      de: '/team/verantwortung-csr',
    },
    '/team/jobs': {
      en: '/team/jobs',
      de: '/team/jobs',
    },
    '/activities': {
      en: '/activities',
      de: '/aktivitaeten',
    },
    '/network': {
      en: '/network',
      de: '/netzwerk',
    },
    '/clients': {
      en: '/clients',
      de: '/kunden',
    },
    '/clients/retail/tourists': {
      en: '/clients/retail/tourists',
      de: '/kunden/retail/touristen',
    },
    '/clients/retail/groups': {
      en: '/clients/retail/groups',
      de: '/kunden/retail/reisegruppen',
    },
    '/clients/retail/patients': {
      en: '/clients/retail/patiens',
      de: '/kunden/retail/kurgaeste',
    },
    '/clients/retail/longterm': {
      en: '/clients/retail/longterm',
      de: '/kunden/retail/langzeit-besucher',
    },
    '/clients/financial/real-estate-agents': {
      en: '/clients/financial/real-estate-agents',
      de: '/kunden/finance/immobilenmakler',
    },
    '/clients/financial/real-estate-buyers': {
      en: '/clients/financial/real-estate-buyers',
      de: '/kunden/finance/immobilienkaeufer',
    },
    '/clients/financial/investors': {
      en: '/clients/financial/investors',
      de: '/kunden/finance/investoren',
    },
    '/clients/financial/banks': {
      en: '/clients/financial/banks',
      de: '/kunden/finance/banken',
    },
    '/clients/business/travel-agencies': {
      en: '/clients/business/travel-agencies',
      de: '/kunden/business/reiseveranstalter',
    },
    '/clients/business/booking-portals': {
      en: '/clients/business/booking-portals',
      de: '/kunden/business/buchungsportal',
    },
    '/clients/business/elderly-care': {
      en: '/clients/business/elderly-care',
      de: '/kunden/business/altenpflege',
    },
    '/clients/business/medical-care': {
      en: '/clients/business/medical-care',
      de: '/kunden/business/aerzte-kliniken',
    },
    '/press': {
      en: '/press',
      de: '/presse',
    },
    '/press/contact': {
      en: '/press/contact',
      de: '/presse/kontakt',
    },
    '/press/press-kit': {
      en: '/press/press-kit',
      de: '/presse/pressekit',
    },
    '/press/faq': {
      en: '/press/faq',
      de: '/presse/faq',
    },
    '/contact': {
      en: '/contact',
      de: '/kontakt',
    },
    '/legal/privacy-policy': {
      en: '/legal/privacy-policy',
      de: '/rechtliches/datenschutzerklaerung',
    },
    '/legal/imprint': {
      en: '/legal/imprint',
      de: '/rechtliches/impressum',
    },
    '/legal/whistleblower': {
      en: '/legal/whistleblower',
      de: '/rechtliches/hinweisgeber',
    },
    '/legal/disclaimer': {
      en: '/legal/disclaimer',
      de: '/rechtliches/rechtliche-hinweise',
    },
  },
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
