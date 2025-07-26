// Material Design 3 color tokens for First Bites app
// Using medium contrast for light mode, standard contrast for dark mode

module.exports = {
  // Primary Color Roles
  primary: {
    DEFAULT: '#003C4B', // light medium contrast primary
    foreground: '#FFFFFF', // onPrimary
    container: '#B8EAFF', // primaryContainer
    'container-foreground': '#004D61', // onPrimaryContainer
  },

  // Secondary Color Roles
  secondary: {
    DEFAULT: '#003C4B', // light medium contrast secondary
    foreground: '#FFFFFF', // onSecondary
    container: '#B7EAFF', // secondaryContainer
    'container-foreground': '#004E61', // onSecondaryContainer
  },

  // Tertiary Color Roles
  tertiary: {
    DEFAULT: '#2E3066', // light medium contrast tertiary
    foreground: '#FFFFFF', // onTertiary
    container: '#E1E0FF', // tertiaryContainer
    'container-foreground': '#3F4178', // onTertiaryContainer
  },

  // Surface Color Roles
  surface: {
    DEFAULT: '#F5FAFC', // surface
    foreground: '#0C1214', // onSurface (medium contrast)
    variant: '#DCE4E8', // surfaceVariant
    'variant-foreground': '#2F373B', // onSurfaceVariant (medium contrast)
    dim: '#C2C7C9', // surfaceDim (medium contrast)
    bright: '#F5FAFC', // surfaceBright
    'container-lowest': '#FFFFFF', // surfaceContainerLowest
    'container-low': '#EFF4F7', // surfaceContainerLow
    container: '#E4E9EB', // surfaceContainer (medium contrast)
    'container-high': '#D8DEE0', // surfaceContainerHigh (medium contrast)
    'container-highest': '#CDD2D5', // surfaceContainerHighest (medium contrast)
  },

  // Background
  background: {
    DEFAULT: '#F5FAFD', // background
    foreground: '#171C1F', // onBackground
  },

  // Outline & Border
  outline: {
    DEFAULT: '#4C5458', // outline (medium contrast)
    variant: '#666E72', // outlineVariant (medium contrast)
  },

  // Error Color Roles
  error: {
    DEFAULT: '#740006', // error (medium contrast)
    foreground: '#FFFFFF', // onError
    container: '#CF2C27', // errorContainer (medium contrast)
    'container-foreground': '#FFFFFF', // onErrorContainer
  },

  // Inverse Color Roles
  inverse: {
    surface: '#2C3133', // inverseSurface
    'surface-foreground': '#ECF2F4', // inverseOnSurface
    primary: '#88D0EC', // inversePrimary
  },

  // Shadow & Scrim
  shadow: '#000000',
  scrim: '#000000',

  // Surface Tint
  'surface-tint': '#003C4B', // surfaceTint (medium contrast primary)

  // Dark Mode Colors (standard contrast)
  dark: {
    primary: {
      DEFAULT: '#88D0EC', // dark primary
      foreground: '#003544', // dark onPrimary
      container: '#004D61', // dark primaryContainer
      'container-foreground': '#B8EAFF', // dark onPrimaryContainer
    },
    secondary: {
      DEFAULT: '#88D1EC', // dark secondary
      foreground: '#003543', // dark onSecondary
      container: '#004E61', // dark secondaryContainer
      'container-foreground': '#B7EAFF', // dark onSecondaryContainer
    },
    tertiary: {
      DEFAULT: '#C0C1FF', // dark tertiary
      foreground: '#292A60', // dark onTertiary
      container: '#3F4178', // dark tertiaryContainer
      'container-foreground': '#E1E0FF', // dark onTertiaryContainer
    },
    surface: {
      DEFAULT: '#0F1416', // dark surface
      foreground: '#DEE3E5', // dark onSurface
      variant: '#40484C', // dark surfaceVariant
      'variant-foreground': '#BFC8CC', // dark onSurfaceVariant
      dim: '#0F1416', // dark surfaceDim
      bright: '#343A3C', // dark surfaceBright
      'container-lowest': '#090F11', // dark surfaceContainerLowest
      'container-low': '#171C1E', // dark surfaceContainerLow
      container: '#1B2022', // dark surfaceContainer
      'container-high': '#252B2D', // dark surfaceContainerHigh
      'container-highest': '#303638', // dark surfaceContainerHighest
    },
    background: {
      DEFAULT: '#0F1416', // dark background
      foreground: '#DEE3E6', // dark onBackground
    },
    outline: {
      DEFAULT: '#8A9296', // dark outline
      variant: '#40484C', // dark outlineVariant
    },
    error: {
      DEFAULT: '#FFB4AB', // dark error
      foreground: '#690005', // dark onError
      container: '#93000A', // dark errorContainer
      'container-foreground': '#FFDAD6', // dark onErrorContainer
    },
    inverse: {
      surface: '#DEE3E5', // dark inverseSurface
      'surface-foreground': '#2C3133', // dark inverseOnSurface
      primary: '#09677F', // dark inversePrimary
    },
    'surface-tint': '#88D0EC', // dark surfaceTint
  },

  // Legacy support for existing components (can be gradually migrated)
  // These map to Material Design equivalents for easier transition
  card: '#FFFFFF', // maps to surface-container-lowest
  textPrimary: '#0C1214', // maps to surface-foreground (medium contrast)
  textSecondary: '#2F373B', // maps to surface-variant-foreground (medium contrast)
  border: '#666E72', // maps to outline-variant (medium contrast)
  success: {
    DEFAULT: '#4ADE80', // keeping existing for now
    light: '#DCFCE7',
  },
  warning: {
    DEFAULT: '#E1E0FF', // maps to tertiary-container
    light: '#F3F4F6',
  },
  info: '#F5FAFD', // maps to background
  muted: '#4C5458', // maps to outline (medium contrast)
  tagBg: '#E4E9EB', // maps to surface-container (medium contrast)
};
