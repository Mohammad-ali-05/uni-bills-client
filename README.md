# Utility Bill Management System

## What this website is for

The **Utility Bill Management System** is a web app that helps individuals keep track of monthly utility bills — for example **Electricity, Gas, Water, and Internet** — and lets them securely view, pay, and manage those bills from a single place.

This site is aimed at regular users who want a simple, safe way to:

* See recent and past bills
* Pay only the current month's bills
* Save and manage their paid-bill records
* Download a PDF report of their payment history

## What it offers (features explained for users)

### Public features (no login required)

* **Browse Bills:** View a catalog of bills grouped into categories (Electricity, Gas, Water, Internet).
* **Search & Filter:** Narrow bills by category so you can find relevant events or providers quickly.

### Private features (requires login)

* **Bill Details & Pay:** See full details of a bill (description, image, amount, date). The **Pay** button is enabled only for bills dated in the current month — this keeps payments accurate and prevents paying old bills by mistake.
* **Pay Form:** When paying you’ll get an auto-filled form (email, bill ID, amount, current date). You add your name, address, and phone. After payment the record is saved to your personal payment history.
* **My Paid Bills:** A private page that lists only the bills you’ve paid. You can update or delete each entry and download a PDF report of your payment history.

### Extra user-friendly touches

* **Downloadable PDF Reports:** One-click export of your paid-bill history (PDF) so you can keep offline records or print receipts.
* **Friendly Notifications:** All operations (login, pay, update, delete) show clear visual notifications instead of browser alerts.

## How users can use the website — step-by-step

1. **Open the site** and read the home page carousel to see recent announcements.
2. **Browse categories** or click *Bills* to see recent bills.
3. If you want to **pay a bill**, click *See Details* on a bill card. If the bill belongs to the current month, the Pay button will be enabled.
4. **Log in** (email/password or Google) or **register** (name, email, photo URL, password). After successful login you’ll be redirected back to the page you wanted to view.
5. When you **pay**, fill the small form and submit. You’ll see confirmation and the record will appear on **My Pay Bills**.
6. On **My Pay Bills**, you can update or remove a record and download your payment history PDF.

## Notes on safety and convenience

* The site prevents paying bills from other months to reduce errors.
* Your paid bills are private — only you can view your payment history after logging in.
* Notifications and modals are used for confirmations and errors.


## Developer quick-start (short)

1. Clone the client and server repos.
2. Create `.env` files for client and server (Firebase keys, MongoDB URI, JWT secret).
3. `npm install` in both client and server folders.
4. `npm run dev` (or follow scripts in the repo README) to start both apps locally.