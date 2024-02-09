export type ThemeMode = "lp" | "ct";
export type ThemeDirection = "rtl" | "ltr";
export type ThemeContrast = "default" | "bold";
export type ThemeLayout = "vertical" | "horizontal";
export type ThemeColorPresets =
  | "default"
  | "purple"
  | "cyan"
  | "blue"
  | "orange"
  | "red";
export type ThemeStretch = boolean;

export type SettingsValueProps = {
  themeMode: ThemeMode;
  themeLayout: ThemeLayout;
  themeStretch: ThemeStretch;
  themeContrast: ThemeContrast;
  themeDirection: ThemeDirection;
  themeColorPresets: ThemeColorPresets;
};
