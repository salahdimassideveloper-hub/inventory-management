import { db } from "@/lib/db";
import { createUser } from "@/lib/auth";

async function main() {
  console.log("🌱 Seeding database...");

  // Create admin user
  const adminUser = await createUser(
    "admin@example.com",
    "Password123!",
    "Administrateur",
    "ADMIN"
  );
  console.log("✅ Admin user created:", adminUser.email);

  // Create manager user
  const managerUser = await createUser(
    "manager@example.com",
    "Password123!",
    "Gérant",
    "MANAGER"
  );
  console.log("✅ Manager user created:", managerUser.email);

  // Create vendor user
  const vendorUser = await createUser(
    "vendor@example.com",
    "Password123!",
    "Vendeur",
    "VENDOR"
  );
  console.log("✅ Vendor user created:", vendorUser.email);

  // Create categories
  const categories = await Promise.all([
    db.category.create({ data: { name: "Livres" } }),
    db.category.create({ data: { name: "Fournitures Scolaires" } }),
    db.category.create({ data: { name: "Papeterie" } }),
    db.category.create({ data: { name: "Électronique" } }),
  ]);
  console.log("✅", categories.length, "categories created");

  // Create suppliers
  const suppliers = await Promise.all([
    db.supplier.create({
      data: {
        name: "Éditions Dupont",
        email: "contact@editionsdupont.fr",
        phone: "+33 1 23 45 67 89",
        address: "123 Rue de Paris, Lyon 69000",
      },
    }),
    db.supplier.create({
      data: {
        name: "Fournitures Martin",
        email: "hello@martin-supplies.com",
        phone: "+33 4 56 78 90 12",
        address: "456 Avenue des Alpes, Marseille 13000",
      },
    }),
  ]);
  console.log("✅", suppliers.length, "suppliers created");

  // Create sample products
  const products = await Promise.all([
    db.product.create({
      data: {
        name: "Le Seigneur des Anneaux - Tome 1",
        barcode: "9782253049609",
        description: "Roman fantasy classique",
        purchasePrice: 15.0,
        sellingPrice: 24.99,
        quantity: 50,
        minQuantity: 5,
        categoryId: categories[0].id,
        supplierId: suppliers[0].id,
      },
    }),
    db.product.create({
      data: {
        name: "Stylo Bleu BIC",
        barcode: "3086123456789",
        description: "Stylo à bille classique",
        purchasePrice: 0.5,
        sellingPrice: 1.49,
        quantity: 200,
        minQuantity: 50,
        categoryId: categories[1].id,
        supplierId: suppliers[1].id,
      },
    }),
    db.product.create({
      data: {
        name: "Cahier A4 100 Pages",
        barcode: "3090456789012",
        description: "Cahier scolaire standard",
        purchasePrice: 2.0,
        sellingPrice: 4.99,
        quantity: 80,
        minQuantity: 20,
        categoryId: categories[2].id,
        supplierId: suppliers[1].id,
      },
    }),
    db.product.create({
      data: {
        name: "Calculatrice Scientifique",
        barcode: "4007885109743",
        description: "Calculatrice pour étudiants",
        purchasePrice: 25.0,
        sellingPrice: 49.99,
        quantity: 15,
        minQuantity: 5,
        categoryId: categories[3].id,
        supplierId: suppliers[0].id,
      },
    }),
  ]);
  console.log("✅", products.length, "products created");

  // Settings configuration (optional feature)
  console.log("✅ Database seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
