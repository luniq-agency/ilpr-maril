import { Link } from '@/src/i18n/routing';
import { useTranslations } from 'next-intl';
import SocialMediaIcon from './SocialMediaIcon';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('Footer');

  const email = `mailto:${t('email')}`;
  const phone = `tel:${t('phone')}`;

  return (
    <footer>
      <div className="content grid columns-four" id="footer-top-row">
        <div className="column">
          <Image
            src="/ilpr-maril-logo-gold.svg"
            width={120}
            height={32}
            alt="Das Maril Logo"
            style={{ marginBottom: 24 }}
          />
          <div className="column" style={{ gap: 12 }}>
            <a className="navlink" href={email} target="_blank" style={{ width: 'fit-content' }}>
              {t('email')}
            </a>
            <a className="navlink" href={phone} target="_blank" style={{ width: 'fit-content' }}>
              {t('phone')}
            </a>
          </div>
        </div>
        <div className="column" style={{ gap: 16 }}>
          <span className="navlink no-hover" style={{ fontWeight: 600, width: 'fit-content' }}>
            {t('company')}
          </span>
          <div className="column" style={{ gap: 12 }}>
            <Link className="navlink" href="/company" style={{ width: 'fit-content' }}>
              {t('business')}
            </Link>
            <Link className="navlink" href="/company/history" style={{ width: 'fit-content' }}>
              {t('history')}
            </Link>
            <Link
              className="navlink"
              href="/company/business-model"
              style={{ width: 'fit-content' }}
            >
              {t('model')}
            </Link>
            <Link className="navlink" href="/company/locations" style={{ width: 'fit-content' }}>
              {t('locations')}
            </Link>
          </div>
        </div>
        <div className="column" style={{ gap: 16 }}>
          <span className="navlink no-hover" style={{ fontWeight: 600, width: 'fit-content' }}>
            {t('legal')}
          </span>
          <div className="column" style={{ gap: 12 }}>
            <Link className="navlink" href="/legal/privacy-policy" style={{ width: 'fit-content' }}>
              {t('privacy')}
            </Link>
            <Link className="navlink" href="/legal/imprint" style={{ width: 'fit-content' }}>
              {t('imprint')}
            </Link>
            <Link className="navlink" href="/legal/disclaimer" style={{ width: 'fit-content' }}>
              {t('disclaimer')}
            </Link>
            <Link className="navlink" href="/legal/whistleblower" style={{ width: 'fit-content' }}>
              {t('whistleblower')}
            </Link>
          </div>
        </div>
        <div className="column" style={{ gap: 16 }}>
          <span className="navlink no-hover" style={{ fontWeight: 600, width: 'fit-content' }}>
            {t('press')}
          </span>
          <div className="column" style={{ gap: 12 }}>
            <Link className="navlink" href="/press" style={{ width: 'fit-content' }}>
              {t('press-general')}
            </Link>
            <Link className="navlink" href="/press/contact" style={{ width: 'fit-content' }}>
              {t('press-contact')}
            </Link>
            <Link className="navlink" href="/press/press-kit" style={{ width: 'fit-content' }}>
              {t('press-kit')}
            </Link>
            <Link className="navlink" href="/press/faq" style={{ width: 'fit-content' }}>
              {t('press-faq')}
            </Link>
          </div>
        </div>
      </div>
      <div className="content">
        <span
          className="navlink no-hover"
          style={{ marginBottom: 16, fontSize: 14, fontWeight: 600, textTransform: 'uppercase' }}
        >
          {t('get-in-touch')}
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
    </footer>
  );
}
