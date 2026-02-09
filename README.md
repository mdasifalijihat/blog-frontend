# 🧠 Social Blog Platform (Next.js App Router)

A modern **Facebook-style blog & social platform** built with **Next.js App Router**, where users can create posts, comment, reply, and interact — with full **role-based access control** for users and admins.

---

## 🚀 Tech Stack

### Frontend
- **Next.js 14+ (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Sonner Toast** (notifications)
- **Better Auth** (authentication & session handling)

### Backend
- REST API (already integrated)
- JWT-based authentication
- Role-based authorization (USER / ADMIN)

---

## ✨ Features

### 👤 User Features
- User authentication (Login / Register)
- Create, edit, delete own posts (CRUD)
- View all public posts
- Comment on others’ posts
- Reply to comments (nested replies)
- Edit profile (name, email, profile image)
- View own posts & activity
- Toast notifications on actions (success / error)

---

### 🛠 Admin Features
- Admin dashboard
- View all users’ posts
- Delete any post or comment
- Moderate platform content
- Full control over posts & comments

---

## 🧭 Routing Structure (App Router)

```txt
app/
│── (auth)/
│   ├── login/
│   └── signup/
│
│── (user)/
│   ├── profile/
│   ├── posts/
│   └── settings/
│
│── (admin)/
│   ├── dashboard/
│   └── posts/
│
│── blog/
│── post/[id]/
│── layout.tsx
│── page.tsx
````

---

## 🔐 Authentication & Authorization

* Authentication handled via **Better Auth**
* JWT stored securely
* Role-based access:

  * `USER` → can manage own content
  * `ADMIN` → can manage all content
* Protected routes using App Router guards

---

## 🔔 Notifications

* **Sonner Toast** used for:

  * Login / Logout success
  * Post creation / deletion
  * Error handling
  * Permission warnings

---

## 📦 Installation & Setup

```bash
git clone https://github.com/mdasifalijihat/blog-frontend
cd your-repo-name
npm install
npm run dev
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_BASE_URL=your_backend_url
```

---

## 🧪 Scripts

```bash
npm run dev      # Development
npm run build    # Production build
npm run start    # Start production server
```

---

## 📌 Future Improvements

* Post likes & reactions
* Follow / unfollow users
* Real-time comments
* Image upload optimization
* Search & filter posts

---

## 👑 Author

Developed with ❤️ by **Asif**

If you like this project, don’t forget to ⭐ the repository!
