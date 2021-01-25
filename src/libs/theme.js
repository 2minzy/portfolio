const deviceSizes = {
  mobileSm: "320px",
  mobile: "600px",
  tabletSm: "834px",
  tablet: "1024px",
}

const device = {
  mobileSm: `screen and (max-width: ${deviceSizes.mobileSm})`,
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tabletSm: `screen and (max-width: ${deviceSizes.tabletSm})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
}

const theme = {
  device,
}

export default theme
