/**
 * Site-wide Arabic copy: brand, navigation, footer and interface microcopy.
 * Mirrors data/en/site.ts.
 */
import { SITE } from '../site';
import { routes } from '../routes';
import type { Cta, NavItem } from '../types';
import type { BRAND as EN_BRAND, FOOTER as EN_FOOTER, UI as EN_UI } from '../en/site';

const R = routes('ar');

export const BRAND: typeof EN_BRAND = {
  name: 'شركة تحالف الخليج للحلول',
  shortName: 'Gulf ASCO',
  tagline: 'حلول متكاملة. إمكانات لا محدودة.',
  /** Footer description. */
  description:
    'نقدّم حلولًا في المجالات الطبية، والتيار المنخفض، والإضاءة، والمصاعد الكهربائية، والتجارة الإلكترونية، وتقنية المعلومات، إلى جانب جسوركم، منصة التعليم الإلكتروني الموجّهة للطلاب.',
  address: 'المملكة العربية السعودية - الخبر، حي العليا، شارع الفضل بن إسماعيل، ص.ب 34448 - 6816',
  /** Short location line (hero, map caption). */
  city: 'الخبر، المملكة العربية السعودية',
};

export const NAV: NavItem[] = [
  { label: 'الرئيسية', href: R.home },
  { label: 'من نحن', href: R.about },
  { label: 'الحلول', href: R.solutions, megaMenu: true },
  { label: 'تواصل معنا', href: R.contact },
];

export const HEADER_CTA: Cta = { label: 'ناقش متطلباتك', href: R.enquiry() };

export const FOOTER: typeof EN_FOOTER = {
  quickLinksTitle: 'روابط سريعة',
  solutionsTitle: 'حلولنا',
  contactTitle: 'التواصل',
  legal: [
    { label: 'سياسة الخصوصية', href: R.privacy },
    { label: 'الشروط والأحكام', href: R.terms },
  ],
  copyright: `© ${new Date().getFullYear()} شركة تحالف الخليج للحلول. جميع الحقوق محفوظة.`,
};

/** Interface text that is not part of the content document. */
export const UI: typeof EN_UI = {
  skipLink: 'تخطَّ إلى المحتوى',
  logoHome: 'الرئيسية',
  mainNav: 'القائمة الرئيسية',
  mobileNav: 'قائمة الجوال',
  menuOpen: 'فتح القائمة',
  menuClose: 'إغلاق القائمة',
  close: 'إغلاق',
  solutionsMenu: 'عرض قائمة الحلول',
  language: 'اللغة',
  breadcrumb: 'مسار التنقل',
  breadcrumbHome: 'الرئيسية',
  newTab: '(يُفتح في علامة تبويب جديدة)',
  openMaps: 'فتح في الخرائط',
  contactUs: 'تواصل معنا',
  followUs: 'تابعنا',
  whatsapp: {
    label: 'تحدّث معنا عبر واتساب',
    message: 'مرحبًا، أرغب في مناقشة متطلباتي مع شركة تحالف الخليج للحلول.',
  },
  hero: {
    orbitLabel: 'مجالات حلولنا',
    pause: 'إيقاف الحركة',
    play: 'تشغيل الحركة',
  },
  flip: {
    show: 'عرض الخدمات',
    hide: 'رجوع',
  },
  form: {
    mandatory: '*إلزامي',
    required: 'يرجى تعبئة هذا الحقل.',
    email: 'يرجى إدخال بريد إلكتروني صحيح.',
    phone: 'يرجى إدخال رقم هاتف صحيح.',
    checkFields: 'يرجى مراجعة الحقول المميّزة.',
    sending: 'جارٍ الإرسال…',
    success: 'شكرًا لك — تم إرسال استفسارك، وسيتواصل معك فريقنا.',
    /** {email} is replaced with the company email. */
    error: 'عذرًا، حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا عبر البريد الإلكتروني {email}.',
    mailto: 'من المفترض أن يُفتح تطبيق البريد الإلكتروني لديك مع استفسارك جاهزًا للإرسال إلى {email}.',
    subject: 'استفسار عبر الموقع الإلكتروني',
  },
  josoorkom: {
    title: 'المتابعة إلى جسوركم',
    text: 'شاركنا بعض التفاصيل، وسننقلك مباشرةً إلى منصة جسوركم.',
    firstName: 'الاسم',
    lastName: 'اسم العائلة',
    mobile: 'رقم الجوال',
    email: 'البريد الإلكتروني',
    submit: 'المتابعة إلى جسوركم',
    close: 'إغلاق',
    redirecting: 'جارٍ نقلك إلى جسوركم…',
    note: `سيتم تحويلك إلى ${new URL(SITE.josoorkomUrl).hostname.replace(/^www\./, '')}`,
  },
  notFound: {
    seoTitle: 'الصفحة غير موجودة',
    seoDescription: 'تعذّر العثور على الصفحة التي تبحث عنها في موقع شركة تحالف الخليج للحلول.',
    title: 'الصفحة غير موجودة',
    text: 'ربما نُقلت الصفحة التي تبحث عنها.',
    home: 'الرئيسية',
  },
  legal: {
    privacy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
    /** {title} is replaced with the page title. */
    seoDescription: '{title} لشركة تحالف الخليج للحلول.',
    pending: 'يجري حاليًا إعداد {title} الخاصة بشركة تحالف الخليج للحلول. ولأي استفسارات في هذه الأثناء، يرجى التواصل معنا عبر',
  },
};
