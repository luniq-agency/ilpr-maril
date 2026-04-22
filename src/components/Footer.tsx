import { Link } from '@/src/i18n/routing';
import { useTranslations } from 'next-intl';
import SocialMediaIcon from './SocialMediaIcon';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('Footer');

  const email = `mailto:${t('email')}`;
  return (
    <footer>
      <div className="content grid columns-four" id="footer-top-row">
        <div className="column">
          <Image
            src="/ilpr-maril-logo-gold.svg"
            width={120}
            alt="Das Maril Logo"
            style={{ marginBottom: 24 }}
          />
          <a className="navlink" href={email} target="_blank">
            {t('email')}
          </a>
        </div>
        <div className="column" style={{ gap: 16 }}>
          <span className="navlink" style={{ fontWeight: 600 }}>
            {t('company')}
          </span>
          <div className="column" style={{ gap: 12 }}>
            <Link className="navlink" href="/company/history">
              {t('company')}
            </Link>
            <Link className="navlink" href="/company/history">
              {t('business')}
            </Link>
            <Link className="navlink" href="/company/business-model">
              {t('model')}
            </Link>
            <Link className="navlink" href="/company/locations">
              {t('locations')}
            </Link>
          </div>
        </div>
        <div className="column" style={{ gap: 16 }}>
          <span className="navlink" style={{ fontWeight: 600 }}>
            {t('legal')}
          </span>
          <div className="column" style={{ gap: 12 }}>
            <Link className="navlink" href="/legal/privacy-policy">
              {t('privacy')}
            </Link>
            <Link className="navlink" href="/legal/imprint">
              {t('imprint')}
            </Link>
            <Link className="navlink" href="/legal/disclaimer">
              {t('disclaimer')}
            </Link>
            <Link className="navlink" href="/legal/whistleblower">
              {t('whistleblower')}
            </Link>
          </div>
        </div>
        <div className="column" style={{ gap: 16 }}>
          <span className="navlink" style={{ fontWeight: 600 }}>
            {t('press')}
          </span>
          <div className="column" style={{ gap: 12 }}>
            <Link className="navlink" href="/press">
              {t('press-general')}
            </Link>
            <Link className="navlink" href="/press/contact">
              {t('press-contact')}
            </Link>
            <Link className="navlink" href="/press/press-kit">
              {t('press-kit')}
            </Link>
            <Link className="navlink" href="/press/faq">
              {t('press-faq')}
            </Link>
          </div>
        </div>
      </div>
      <div className="content">
        <span
          className="navlink"
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
