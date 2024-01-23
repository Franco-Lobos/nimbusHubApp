/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  tailwind: true,
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
  // routes:{
  //   '*': require.resolve('./app/routes/dashboard.tsx'),
  // },

  browserNodeBuiltinsPolyfill: {
    modules: {
      path: true,
      os: true,
      crypto: true,
    },
  },
};
