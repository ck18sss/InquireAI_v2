type PlanMaxFileSizes = '4MB' | '16MB'

export const freePlan = {
  name: 'Free',
  slug: 'free',
  quota: 0,
  pagesPerPdf: 5,
  mostPopular: false,
  description: 'Try it out!',
  maxFileSize: '4MB' as PlanMaxFileSizes,
  price: {
    amount: 0,
    priceIds: {
      test: '',
      production: '',
    },
  },
  features: ['4MB upload limit', 'limited to 5 pages per file'],
}

export const proPlan = {
  name: 'Pro',
  slug: 'pro',
  quota: 10,
  pagesPerPdf: 600,
  maxFileSize: '16MB' as PlanMaxFileSizes,
  mostPopular: true,
  description: 'Unlimited knowledge retriaval from books and files',
  price: {
    amount: 19,
    priceIds: {
      test: 'price_1OQv4IF9tXeUrLDatAYyYEWP',
      production: 'pprice_1OQuTZF9tXeUrLDawj4nLjrb',
    },
  },
  features: ['up to 16MB file size', 'up to 600 pages per file'],
}

export const PLANS = [freePlan, proPlan]