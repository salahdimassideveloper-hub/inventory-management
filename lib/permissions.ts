// Définitions des rôles et permissions
export const ROLES = {
  ADMIN: "ADMIN",
  MANAGER: "MANAGER",
  VENDOR: "VENDOR",
} as const;

export type Role = typeof ROLES[keyof typeof ROLES];

// Permissions par rôle
export const PERMISSIONS = {
  ADMIN: {
    dashboard: true,
    products: { view: true, create: true, edit: true, delete: true },
    sales: { view: true, create: true, edit: true, delete: true },
    stock: { view: true, create: true, edit: true, delete: true },
    suppliers: { view: true, create: true, edit: true, delete: true },
    reports: true,
    settings: true,
    users: true,
    audit: true,
  },
  MANAGER: {
    dashboard: true,
    products: { view: true, create: true, edit: true, delete: false },
    sales: { view: true, create: true, edit: true, delete: false },
    stock: { view: true, create: true, edit: true, delete: false },
    suppliers: { view: true, create: true, edit: true, delete: false },
    reports: true,
    settings: { view: true, edit: false },
    users: false,
    audit: true,
  },
  VENDOR: {
    dashboard: true,
    products: { view: true, create: false, edit: false, delete: false },
    sales: { view: true, create: true, edit: false, delete: false },
    stock: { view: true, create: false, edit: false, delete: false },
    suppliers: { view: true, create: false, edit: false, delete: false },
    reports: { view: true },
    settings: false,
    users: false,
    audit: false,
  },
} as const;

export function hasPermission(
  role: Role,
  resource: string,
  action: string = "view"
): boolean {
  const permissions = PERMISSIONS[role] as any;
  if (!permissions) return false;

  const resourcePerms = permissions[resource];
  if (typeof resourcePerms === "boolean") return resourcePerms;
  if (typeof resourcePerms === "object") {
    return resourcePerms[action] || false;
  }

  return false;
}
