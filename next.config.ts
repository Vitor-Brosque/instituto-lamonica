import type { NextConfig } from "next";

// Publicado como GitHub Pages de projeto (vitor-brosque.github.io/instituto-lamonica),
// não na raiz do domínio — por isso precisa de basePath/assetPrefix.
// Ao migrar para o domínio próprio, remover output/basePath/assetPrefix e voltar a hospedar em Vercel.
const repoBasePath = "/instituto-lamonica";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  assetPrefix: `${repoBasePath}/`,
  images: { unoptimized: true },
};

export default nextConfig;
