# Marcus Liljehammar's Portfolio Web
![Portfolio Website Preview](https://marcusliljehammar.se/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ff8yoduqd%2Fproduction%2Fc135892054f69a58d3eaa66c374cd8b4333e03bc-1200x500.webp&w=1920&q=50)

A sleek and modern personal portfolio website built with [Next.js](https://nextjs.org/), showcasing projects, skills, contact information and an up to date blog about all tech, web and... stuff.

[![Netlify Status](https://api.netlify.com/api/v1/badges/46648482-644c-4c80-bafb-872057e51b6b/deploy-status)](https://app.netlify.com/sites/next-dev-starter/deploys)

## 🚀 Features

- **Fast & SEO-Friendly:** Optimized for performance and search engines with Next.js' static generation.
- **Responsive Design:** Fully responsive and accessible on all devices.
- **Dynamic Projects Section:** Easily add and edit projects through a configuration file.
- **Contact Form Integration:** Powered by a serverless function using Next.js API routes.
- **Customizable Theme:** Change colors, fonts, and layout easily.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **CMS:** [Sanity](https://sanity.io/)
- **Components:** [NextUI](https://nextui.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Heroicons](https://heroicons.com/)
- **Hosting:** [Netlify](https://www.netlify.com/)

## 📂 Project Structure

```
portfolio-nextjs-netlify/
├── public/             # Static files
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Next.js pages
│   ├── styles/         # Global and component styles
│   ├── data/           # Projects and configuration data
│   └── utils/          # Helper functions
├── .env.local          # Environment variables (local only)
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Dependencies and scripts
```

## 🖥️ Demo

Check out the live demo: [Your Portfolio](https://www.marcusliljehammar.se)

## 🔧 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 14.x)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:

   ```bash
   yarn install
   # or
   npm install
   ```

3. Start the development server:

   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Building for Production

To create a production build:

```bash
yarn build
# or
npm run build
```

### Deploying to Netlify

1. Install the Netlify CLI (optional):

   ```bash
   npm install -g netlify-cli
   ```

2. Build the project:

   ```bash
   yarn build
   # or
   npm run build
   ```

3. Deploy to Netlify:

   ```bash
   netlify deploy
   ```

   Follow the CLI prompts to configure the deployment or use the Netlify web interface to connect your GitHub repository for continuous deployment.

   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-netlify-starter&utm_source=github&utm_medium=nextstarter-cs&utm_campaign=devex-cs)

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Marcus Liljehammar](https://www.marcusliljehammar.se).