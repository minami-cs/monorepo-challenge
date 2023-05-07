/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@wanted/ui'], // 추가 - typescript를 javascript로 트랜스파일해주는 옵션
};

module.exports = nextConfig;
