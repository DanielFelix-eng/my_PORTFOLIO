export const projects = [
  {
    title: 'AI Customer Support SaaS',
    slug: 'ai-customer-support-saas',
    shortDescription: 'Real-time customer support platform with AI-powered responses',
    longDescription:
      'A customer support SaaS built with the MERN stack and Socket.IO for real-time messaging. Support agents answer questions from internal documentation using retrieval-augmented generation (RAG), with vector embeddings from Voyage AI and response generation via OpenAI. Payments are processed through M-Pesa and Paystack, with transactional email via Brevo. Deployed on Cloudflare Pages with MongoDB Atlas.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.IO', 'Vite', 'Tailwind CSS', 'OpenAI', 'Voyage AI', 'M-Pesa', 'Paystack', 'Brevo', 'Cloudflare Pages', 'MongoDB Atlas'],
    screenshots: [{ src: '/ai-customer-support-saas-01.webp.png', id: 'main', alt: 'AI Customer Support SaaS dashboard' }],
    liveUrl: 'https://ai-chat-widget-q6gx.onrender.com',
    githubUrl: 'https://github.com/DanielFelix-eng/AI-Chat-widget',
    featured: true,
    order: 1,
    videoUrl: '/videos/ai-customer-support-saas.mp4',
  },
  {
    title: 'API Rate Limiter',
    slug: 'api-rate-limiter',
    shortDescription: 'API rate limiting service',
    longDescription:
      'An API rate limiter built with Node.js, Express, and MongoDB, using Upstash Redis and the token bucket algorithm to throttle incoming requests. The frontend is built with React, Tailwind CSS, and Zustand for state management.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Upstash Redis', 'React', 'Tailwind CSS', 'Zustand'],
    screenshots: [{ src: '/api-ratelimiter.png', id: 'main', alt: 'API Rate Limiter dashboard' }],
    liveUrl: '',
    githubUrl: 'https://github.com/DanielFelix-eng/API--Rate-Limiter',
    featured: true,
    order: 2,
    videoUrl: '/videos/api-rate-limiter.mp4',
  },
  {
    title: 'Mini DataDog',
    slug: 'mini-datadog',
    shortDescription: 'Uptime monitoring dashboard',
    longDescription:
      'An uptime monitoring tool built on the MERN stack with Zustand for state management. It uses react-leaflet and Nominatim for location tracking, with Appwrite and Firebase as backend services, and Brevo for notifications. Deployed on Render.',
    stack: ['MERN stack', 'Zustand', 'react-leaflet', 'Nominatim', 'Appwrite', 'Firebase', 'Brevo', 'Render'],
    screenshots: [{ src: '/mini-data-dog.png', id: 'main', alt: 'Mini DataDog monitoring dashboard' }],
    liveUrl: '',
    githubUrl: 'https://github.com/DanielFelix-eng/mini-data-dog',
    featured: true,
    order: 3,
    videoUrl: '/videos/minidatadog.mp4',
  },
  {
    title: 'JardiniHomes',
    slug: 'jardinihomes',
    shortDescription: 'Real estate marketplace',
    longDescription:
      'A real estate marketplace featuring a RAG document chatbot, powered by MongoDB Atlas Vector Search and Voyage AI embeddings with the Anthropic API.',
    stack: ['MongoDB Atlas Vector Search', 'Voyage AI', 'Anthropic API'],
    screenshots: [{ src: '/realHomes.png', id: 'main', alt: 'JardiniHomes marketplace' }],
    liveUrl: '',
    githubUrl: 'https://github.com/DanielFelix-eng/Real-estate-Market-Place',
    featured: true,
    order: 4,
    videoUrl: '/videos/real-estate.mp4',
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
