/** Contact Us page Arabic copy — mirrors data/en/contact.ts. */
import { SITE, mapsUrl } from '../site';
import type { CONTACT as EN_CONTACT } from '../en/contact';
import { BRAND } from './site';

export const CONTACT: typeof EN_CONTACT = {
  seo: {
    title: 'تواصل معنا',
    description:
      'تواصل مع شركة تحالف الخليج للحلول لمناقشة متطلباتك، واستكشاف مجالات الحلول المناسبة، ومعرفة المزيد عن الخدمات المتاحة.',
  },

  hero: {
    eyebrow: 'تواصل معنا',
    title: 'لنناقش متطلباتك',
    text: 'هل تبحث عن حل لأعمالك، أو مبناك، أو منشأتك الصحية، أو احتياجاتك التقنية؟ تواصل مع شركة تحالف الخليج للحلول لمناقشة متطلباتك، واستكشاف مجالات الحلول المناسبة، ومعرفة المزيد عن الخدمات المتاحة.',
  },

  info: {
    eyebrow: 'معلومات التواصل',
    title: 'تواصل مع فريقنا',
    text: 'سواء كان لديك استفسار عن مشروع، أو تحتاج إلى مزيد من المعلومات حول أحد الحلول، أو ترغب في مناقشة فرصة عمل محتملة، يرحّب فريقنا باستفسارك.',
    items: [
      { key: 'phone', label: 'الهاتف', value: SITE.contact.phoneDisplay, href: SITE.contact.phoneHref, icon: 'phone' },
      { key: 'email', label: 'البريد الإلكتروني', value: SITE.contact.email, href: SITE.contact.emailHref, icon: 'mail' },
      { key: 'address', label: 'العنوان', value: BRAND.address, href: mapsUrl, icon: 'map-pin' },
    ],
  },

  form: {
    eyebrow: 'نموذج الاستفسار',
    title: 'أخبرنا عن متطلباتك',
    text: 'شاركنا بعض التفاصيل حول احتياجاتك لنتمكن من فهم استفسارك بشكل أفضل وتوجيهه إلى مجال العمل المعني.',
    fields: {
      fullName: 'الاسم الكامل',
      company: 'اسم الشركة',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      solution: 'الحل المطلوب',
      message: 'الرسالة',
    },
    submit: 'إرسال الاستفسار',
  },

  map: {
    eyebrow: 'موقع المكتب',
  },

  finalCta: {
    title: 'ابدأ المحادثة معنا',
    text: 'يبدأ كل مشروع بفهم متطلباته. أخبرنا بما تبحث عنه، وسيساعدك فريقنا على استكشاف مجالات الحلول المناسبة والخدمات المتاحة.',
    cta: { label: 'تواصل معنا', href: SITE.contact.emailHref },
  },
};
