# Muscle Worrior — B2C E-commerce Website

A standalone Next.js + React + TypeScript sports-nutrition e-commerce website for **Muscle Worrior**.

## Important project boundaries

- This is a completely new project.
- Create a **new GitHub repository** and a **new Vercel Project** for it.
- Do not connect this repository to any existing website/project.
- Version 1 uses WhatsApp for product enquiries and cart order enquiries; it does not require online payment.
- The Contact Us form is deliberately a demo frontend form. It does not send email until a backend/email service is connected.

## Included catalog

The project contains **53 product variants**, each with:
- SKU
- Product name
- Size
- MRP
- Sale price
- SKU-based placeholder image

All placeholder product files are under `public/products/`.

## 1. Extract the ZIP

Extract `muscleworrior-b2c-vercel.zip` to a normal folder on your computer.

Open the extracted folder. You should see `package.json`, `app/`, `components/`, `data/`, `public/`, and `README.md` directly inside it.

**Do not upload the ZIP file itself to GitHub. Upload the extracted project contents.**

## 2. Install Node.js

Install a current Node.js LTS release from the official Node.js website.

After installation, open Command Prompt / PowerShell and verify:

```bash
node -v
npm -v
```

## 3. Install project dependencies

In the extracted project folder:

```bash
npm install
```

## 4. Run locally

```bash
npm run dev
```

Open the local URL shown by Next.js, normally:

```text
http://localhost:3000
```

## 5. Create the GitHub repository

1. Sign in to GitHub.
2. Click **New repository**.
3. Give it a new name such as `muscleworrior-b2c`.
4. Keep it separate from all existing projects.
5. Create the repository.
6. Upload the **extracted project contents**.
7. Confirm that `package.json` is visible at the repository root.

### Critical GitHub rule

Correct:

```text
repository/
  package.json
  app/
  components/
  data/
  public/
  README.md
```

Incorrect:

```text
repository/
  muscleworrior-b2c-vercel.zip
```

Also avoid this accidental nesting:

```text
repository/
  muscleworrior-project/
    package.json
```

`package.json` must be at the repository root.

## 6. Create a NEW Vercel Project

1. Sign in to Vercel.
2. Select **Add New → Project**.
3. Import the new GitHub repository.
4. Make sure you selected the new Muscle Worrior repository.
5. Do not select or replace any existing project.
6. Vercel should detect **Next.js** automatically.
7. Build command can remain the default.
8. Install command can remain the default (`npm install`).
9. Output settings can remain the default for Next.js.
10. Click **Deploy**.

No environment variables are required for Version 1.

## 7. Add the domain

After the deployment succeeds:

1. Open the new Vercel project.
2. Go to **Settings → Domains**.
3. Add:

```text
muscleworrior.co.in
```

4. Also add:

```text
www.muscleworrior.co.in
```

5. Vercel will show the DNS records required by your domain registrar.
6. Add those records at the registrar.
7. Wait for DNS propagation.
8. Vercel will verify the domain and enable HTTPS.

Keep the root domain and `www` domain attached to this new Vercel Project.

## 8. Replace the logo

Current placeholder:

```text
public/logo-placeholder.svg
```

The header currently displays this file.

To use the real logo later:
1. Put the new logo in `public/`.
2. Update the image source in `components/Header.tsx`.
3. Keep the final logo optimized for web.
4. Commit and push the change to GitHub.

You can also simply replace the contents of `public/logo-placeholder.svg` if the supplied real logo is an SVG and you want to keep the existing path.

## 9. Replace product images

All product placeholders are in:

```text
public/products/
```

Every file uses its SKU as the filename, for example:

```text
public/products/HM-AMZ-022.svg
public/products/HM-AMZ-007.svg
public/products/HM-AMZ-017.svg
```

Replace a placeholder with the real product image while keeping the same SKU-based filename.

The product catalog is defined in:

```text
data/products.ts
```

If you use JPG or PNG instead of SVG:
1. Put the image in `public/products/`.
2. Change that product's `image` value in `data/products.ts`, for example:
   `/products/HM-AMZ-022.jpg`
3. Commit and push.

Do not rename the SKU values unless the business SKU itself changes.

## 10. How GitHub changes reach Vercel

Once the GitHub repository is connected to the new Vercel Project:

1. Make a change locally.
2. Commit the change.
3. Push it to the connected GitHub branch.
4. Vercel automatically creates a new deployment.
5. After the production deployment completes, the live website updates.

## WhatsApp behavior

The WhatsApp number used by the site is:

`+91 959-9466-470`

Product enquiries include:
- Product name
- Size
- SKU
- Sale price

Cart order enquiries include:
- Product name
- Size
- SKU
- Quantity
- Estimated total

The Version 1 WhatsApp destination is:

`https://wa.me/919599466470`

## Contact form

The Contact Us form is explicitly marked as a demo.

It does **not** send email from the browser.

Before using it as a real lead form, connect a suitable backend or email service and add server-side validation/spam protection.

## SEO

Basic site title, description, and canonical site metadata are included in `app/layout.tsx`.

Before launch, you can later add:
- Open Graph images
- Twitter/X card metadata
- Product structured data
- sitemap
- robots.txt
- Search Console verification

## Future upgrades

This project intentionally keeps Version 1 simple. Future versions can add:

- Payment gateway
- Order database
- Customer accounts
- Admin panel
- Inventory management
- Shipping integration
- Coupons
- Order confirmation emails
- Customer notifications
- Real contact-form email delivery
- Product reviews
- Analytics
- Advanced SEO/product schema

Those upgrades can be added without turning the Version 1 WhatsApp checkout into a mandatory payment flow.

## Main project structure

```text
app/
  cart/
  contact/
  products/
  about/
  globals.css
  layout.tsx
  page.tsx

components/
  Footer.tsx
  Header.tsx
  ProductCard.tsx
  Store.tsx

data/
  products.ts

public/
  logo-placeholder.svg
  products/
    <53 SKU-based placeholder images>

.env.example
.gitignore
README.md
next-env.d.ts
package.json
tsconfig.json
```
