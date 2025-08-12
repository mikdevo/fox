window.PROFILE_CONFIG = {
  site: {
    backgroundImage: "./assets/background.png",
    animatedBackground: {
      enabled: true,
      type: "blobs",
      blobs: 5,
      speed: 28
    },
    theme: {
      primary: "#6c5ce7",
      accent: "#00d1ff",
      text: "#f6f7fb",
      muted: "#cfd3e3",
    },
  },
  user: {
    displayName: "Wick",
    avatar: "./assets/avatar.png",
    banner: "./assets/banner.png",
    roles: [
      "Content Creator",
      "Social Media",
      "Influencer",
    ],
  },
  roles: {
    "Content Creator": '<i class="fas fa-video"></i>',
    "Social Media": '<i class="fas fa-share-alt"></i>',
    Influencer: '<i class="fas fa-star"></i>',
  },
  dynamic: {
    discord: {
      enabled: true,
      userId: "289420947960889345",
      sourcePriority: ["japi", "lanyard"],
      refreshMs: 10000,
      overrideDisplayName: true,
      imageSizes: { avatar: 512, banner: 2048 },
    },
  },
  socials: [
    { name: "Snapchat", url: "https://t.snapchat.com/YUqR5nCs", icon: "fab fa-snapchat" },
    { name: "Instagram", url: "https://www.instagram.com/r6_w9", icon: "fab fa-instagram" },
    { name: "TikTok", url: "https://www.tiktok.com/@lll99f", icon: "fab fa-tiktok" },
  ],
};