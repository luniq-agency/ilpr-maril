'use client';

import { Link } from '@/src/i18n/routing';
import { useState } from 'react';
import { LocaleSwitcher } from './LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { Sidebar } from 'primereact/sidebar';
import { ButtonPrimary } from './Button';
import { Accordion, AccordionTab } from 'primereact/accordion';
import SocialMediaIcon from './SocialMediaIcon';
import { MenuItemSingle, MenuItemTripple } from './MenuItem';
import Image from 'next/image';

interface NavbarProps {
  classname: string;
}

export default function Navbar(props: NavbarProps) {
  const [visible, setVisible] = useState(false);
  const t = useTranslations('Nav');

  const itemsClientsBusiness = [
    {
      label: t('travel-agencies'),
      destination: '/clients/business/travel-agencies',
    },
    {
      label: t('booking-portals'),
      destination: '/clients/business/booking-portals',
    },
    {
      label: t('elderly-care'),
      destination: '/clients/business/elderly-care',
    },
    {
      label: t('medical-care'),
      destination: '/clients/business/medical-care',
    },
  ];
  const itemsClientsFinancial = [
    {
      label: t('real-estate-agents'),
      destination: '/clients/financial/real-estate-agents',
    },
    {
      label: t('real-estate-buyers'),
      destination: '/clients/financial/real-estate-buyers',
    },
    {
      label: t('investors'),
      destination: '/clients/financial/investors',
    },
    {
      label: t('banks'),
      destination: '/clients/financial/banks',
    },
  ];
  const itemsClientsRetail = [
    {
      label: t('tourists'),
      destination: '/clients/retail/tourists',
    },
    {
      label: t('groups'),
      destination: '/clients/retail/groups',
    },
    {
      label: t('patients'),
      destination: '/clients/retail/patients',
    },
    {
      label: t('longterm'),
      destination: '/clients/retail/longterm',
    },
  ];
  const itemsCompany = [
    {
      label: t('about-us'),
      destination: '/company',
    },
    {
      label: t('history'),
      destination: '/company/history',
    },
    {
      label: t('model'),
      destination: '/company/business-model',
    },
    {
      label: t('locations'),
      destination: '/company/locations',
    },
    {
      label: t('faq'),
      destination: '/company/faq',
    },
  ];
  const itemsPress = [
    {
      label: t('press'),
      destination: '/press',
    },
    {
      label: t('press-contact'),
      destination: '/press/contact',
    },
    {
      label: t('press-kit'),
      destination: '/press/press-kit',
    },
    {
      label: t('press-faq'),
      destination: '/press/faq',
    },
  ];
  const itemsTeam = [
    {
      label: t('team'),
      destination: '/team',
    },
    {
      label: t('vision'),
      destination: '/team/vision',
    },
    {
      label: t('csr'),
      destination: '/team/csr',
    },
    {
      label: t('jobs'),
      destination: '/team/jobs',
    },
  ];

  return (
    <nav className={props.classname}>
      <Sidebar visible={visible} onHide={() => setVisible(false)} position="right">
        <div className="column gap-s align-center justify-center" id="menu-mobile">
          <Accordion>
            <AccordionTab headerClassName="navlink-header" header={t('company')}>
              <Link
                href="/company/history"
                className="navlink-mobile"
                onClick={() => setVisible(false)}
              >
                {t('history')}
              </Link>
            </AccordionTab>
            <AccordionTab headerClassName="navlink-header" header={t('team')}>
              <Link href="/team" className="navlink-mobile" onClick={() => setVisible(false)}>
                {t('team')}
              </Link>
              <Link
                href="/team/vision"
                className="navlink-mobile"
                onClick={() => setVisible(false)}
              >
                {t('vision')}
              </Link>
              <Link href="/team/csr" className="navlink-mobile" onClick={() => setVisible(false)}>
                {t('csr')}
              </Link>
            </AccordionTab>
            <AccordionTab headerClassName="navlink-header" header={t('clients')}>
              <Accordion className="accordion-inner">
                <AccordionTab header="Retail" headerClassName="accordion-inner-header">
                  <Link
                    href="/clients/retail/tourists"
                    className="navlink-mobile"
                    onClick={() => setVisible(false)}
                  >
                    {t('tourists')}
                  </Link>
                  <Link
                    href="/clients/retail/groups"
                    className="navlink-mobile"
                    onClick={() => setVisible(false)}
                  >
                    {t('groups')}
                  </Link>
                  <Link
                    href="/clients/retail/patients"
                    className="navlink-mobile"
                    onClick={() => setVisible(false)}
                  >
                    {t('patients')}
                  </Link>
                  <Link
                    href="/clients/retail/longterm"
                    className="navlink-mobile"
                    onClick={() => setVisible(false)}
                  >
                    {t('longterm')}
                  </Link>
                </AccordionTab>
                <AccordionTab header="Financial" headerClassName="accordion-inner-header">
                  <Link
                    href="/clients/financial/banks"
                    className="navlink-mobile"
                    onClick={() => setVisible(false)}
                  >
                    {t('banks')}
                  </Link>
                  <Link
                    href="/clients/financial/investors"
                    className="navlink-mobile"
                    onClick={() => setVisible(false)}
                  >
                    {t('investors')}
                  </Link>
                  <Link
                    href="/clients/financial/real-estate-agents"
                    className="navlink-mobile"
                    onClick={() => setVisible(false)}
                  >
                    {t('real-estate-agents')}
                  </Link>
                  <Link
                    href="/clients/financial/real-estate-buyers"
                    className="navlink-mobile"
                    onClick={() => setVisible(false)}
                  >
                    {t('real-estate-buyers')}
                  </Link>
                </AccordionTab>
                <AccordionTab header="Business" headerClassName="accordion-inner-header">
                  <Link
                    href="/clients/business/booking-portals"
                    className="navlink-mobile"
                    onClick={() => setVisible(false)}
                  >
                    {t('booking-portals')}
                  </Link>
                  <Link
                    href="/clients/business/elderly-care"
                    className="navlink-mobile"
                    onClick={() => setVisible(false)}
                  >
                    {t('elderly-care')}
                  </Link>
                  <Link
                    href="/clients/business/medical-care"
                    className="navlink-mobile"
                    onClick={() => setVisible(false)}
                  >
                    {t('medical-care')}
                  </Link>
                  <Link
                    href="/clients/business/travel-agencies"
                    className="navlink-mobile"
                    onClick={() => setVisible(false)}
                  >
                    {t('travel-agencies')}
                  </Link>
                </AccordionTab>
                <AccordionTab header={t('press')} headerClassName="accordion-inner-header">
                  <Link
                    href="/clients/business/booking-portals"
                    className="navlink-mobile"
                    onClick={() => setVisible(false)}
                  >
                    {t('booking-portals')}
                  </Link>
                  <Link
                    href="/clients/business/elderly-care"
                    className="navlink-mobile"
                    onClick={() => setVisible(false)}
                  >
                    {t('elderly-care')}
                  </Link>
                  <Link
                    href="/clients/business/medical-care"
                    className="navlink-mobile"
                    onClick={() => setVisible(false)}
                  >
                    {t('medical-care')}
                  </Link>
                  <Link
                    href="/clients/business/travel-agencies"
                    className="navlink-mobile"
                    onClick={() => setVisible(false)}
                  >
                    {t('travel-agencies')}
                  </Link>
                </AccordionTab>
              </Accordion>
            </AccordionTab>
            <AccordionTab headerClassName="navlink-header" header={t('press')}>
              <Link href="/press" className="navlink-mobile" onClick={() => setVisible(false)}>
                {t('press')}
              </Link>
              <Link
                href="/press/contact"
                className="navlink-mobile"
                onClick={() => setVisible(false)}
              >
                {t('press-contact')}
              </Link>
              <Link
                href="/press/press-kit"
                className="navlink-mobile"
                onClick={() => setVisible(false)}
              >
                {t('press-kit')}
              </Link>
              <Link href="/press/faq" className="navlink-mobile" onClick={() => setVisible(false)}>
                {t('press-faq')}
              </Link>
            </AccordionTab>
          </Accordion>
        </div>
        <div
          className="column"
          style={{ padding: '2rem', alignItems: 'center', flexGrow: 1, justifyContent: 'center' }}
        >
          <Image src="/ilpr-maril-logo-gold.svg" alt="ILPR Maril" width={120} height={27} />
          <div style={{ height: '2rem' }} />
          <span
            className="navlink"
            style={{
              marginBottom: 16,
              fontSize: 14,
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            Get in Touch
          </span>
          <div className="row gap-s">
            <SocialMediaIcon
              image="/instagram.svg"
              target={`https://instagram.com/${process.env.INSTAGRAM}`}
            />
            <SocialMediaIcon
              image="/linkedin.svg"
              target={`https://linkedin.com/${process.env.LINKEDIN}`}
            />
            <SocialMediaIcon
              image="/youtube.svg"
              target={`https://youtube.com/${process.env.YOUTUBE}`}
            />
          </div>
        </div>
      </Sidebar>
      <div className="row align-center justify-start" id="navbar-logo-wrapper">
        <Link href="/" aria-label="Link zur Homepage." className="logo-navbar">
          <Image
            src="/ilpr-maril-logo-gold.svg"
            alt="ILPR Maril"
            width={120}
            height={27}
            className="logo-navbar"
          />
        </Link>
      </div>

      <div className="row full-width align-center gap-l" id="navmenu-desktop">
        <MenuItemSingle label={t('company')} links={itemsCompany} />
        <MenuItemSingle label={t('team')} links={itemsTeam} />
        <MenuItemTripple
          label={t('clients')}
          links={itemsClientsRetail}
          links2={itemsClientsBusiness}
          links3={itemsClientsFinancial}
          linksLabel={t('clients-retail')}
          linksLabel2={t('clients-business')}
          linksLabel3={t('clients-financial')}
        />
        <Link href="/network" className="navlink">
          {t('network')}{' '}
        </Link>
        <MenuItemSingle label={t('press')} links={itemsPress} />
      </div>
      <div
        className="width-40 row gap-s align-center justify-end"
        id="navbar-menu-opener"
        style={{ width: '100%' }}
      >
        <div id="navmenu-actions-desktop">
          <LocaleSwitcher />
          <ButtonPrimary text={t('cta-2')} size="small" target="/contact" />
        </div>
        <div className="menu-button-wrapper" onClick={() => setVisible(true)}>
          <Image src="/icons/menu.svg" className="menu-button-icon" alt="" height={24} width={24} />
        </div>
      </div>
    </nav>
  );
}
