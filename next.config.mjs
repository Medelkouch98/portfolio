import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/resume.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="public/resume.pdf"',
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
