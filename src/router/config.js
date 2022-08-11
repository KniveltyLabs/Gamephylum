const menus = {
  menus: [
    {
      key: "/home",
      component: "Home",
    },
    {
      key: "/news",
      component: "News",
    },
    {
      key: "/dao",
      component: "Dao",
    },
    {
      key: "/details/:type/:ids",
      component: "Details",
    },
  ],
  lists: [
    {
      key: "/data/gameassetscreener",
      component: "GameAssetScreener",
    },
    {
      key: "/data/assetscreenerdetails/:id",
      component: "AssetsCreenerDetails",
    },
    {
      key: "/data/gamewatchlist",
      component: "GameWatchList",
    },
    {
      key: "/data/gamechartexplore",
      component: "GameChartExplore",
    },
    {
      key: "/research/gamefiprojectreserch",
      component: "GameFiProjectReserch",
    },
    {
      key: "/research/gamefimacroresearch",
      component: "GameFiMacroResearch",
    },
  ],
};

export default menus;
