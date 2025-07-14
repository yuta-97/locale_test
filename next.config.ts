import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  // 다른 설정들...
};

export default withNextIntl(nextConfig);
