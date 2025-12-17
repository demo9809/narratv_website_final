import { ServiceCategory, Service, Project, TeamMember, BlogPost, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Work', path: '/work' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    slug: 'branding-identity',
    title: 'Branding & Identity',
    category: ServiceCategory.BRANDING,
    seoTitle: 'Brand Identity Design Agency Kerala | Logo Design Calicut',
    seoDescription: 'Leading branding agency in Calicut, Kerala. We define global brand identities, logo systems, and strategies for businesses expanding to Dubai and Europe.',
    keywords: ['Brand Identity', 'Logo Design Calicut', 'Rebranding Kerala', 'Visual Identity', 'Corporate Branding India'],
    description: 'We define the core DNA of your brand. From Calicut to Dubai, we build identities that command respect and drive revenue.',
    includes: ['Brand Strategy', 'Visual Identity Systems', 'Logo Design', 'Tone of Voice', 'Rebranding', 'Brand Guidelines'],
    details: {
      heroImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
      tagline: 'Define Your Essence',
      introHeadline: 'A Logo is Not a Brand. A Brand is a Reputation.',
      introContent: `
        <p class="lead"><strong>In a crowded marketplace like Kerala, generic businesses are invisible.</strong> As a premier branding agency in Calicut serving global clients, Narratv Space builds comprehensive brand ecosystems, not just logos.</p> 
        <p>Whether you are a startup in Kochi, a builder in Calicut, or an exporter targeting the GCC, your brand needs to tell a compelling story. We bridge the gap between Kerala's rich business heritage and modern global design standards, ensuring you look like a market leader from Day 1.</p>
      `,
      problemTitle: 'The "Local" Trap',
      problemContent: `
        <p>Many Kerala businesses suffer from the "Local Trap." They offer world-class products but look like small-town shops. They rely on generic logos, inconsistent colors, and poor messaging. This forces them to compete solely on price, shrinking their margins.</p>
        <p class="mt-4">If your brand looks cheap, customers assume your product is cheap. Without a strategic visual identity, you are leaving money on the table every single day.</p>
      `,
      solutionTitle: 'Global Stature',
      solutionContent: `
        <p>We build distinct visual and verbal systems designed to help you charge a premium. We analyze your market position and create a "White Space" where you have no competition.</p>
        <p class="mt-4">From construction conglomerates to D2C food brands, we craft identities that feel international yet culturally rooted. We ensure that every touchpoint—from your visiting card to your hoarding—reinforces your authority.</p>
      `,
      subServices: [
        { title: 'Brand Strategy', description: 'Defining your Mission, Vision, and Value Proposition to ensure long-term business growth.' },
        { title: 'Visual Identity', description: 'Complete design systems—logos, typography, color palettes, and patterns—that scale across digital and print.' },
        { title: 'Tone of Voice', description: 'Crafting a unique verbal personality for your brand, ensuring consistent messaging across all channels.' },
        { title: 'Rebranding', description: 'Strategic makeovers for legacy businesses looking to modernize without losing their heritage.' },
        { title: 'Brand Guidelines', description: 'Detailed rulebooks ensuring your brand consistency is maintained by any vendor or team member.' },
        { title: 'Packaging Design', description: 'Premium packaging design that stands out on the shelf and communicates value instantly.' }
      ],
      deliverables: [
        'Brand Strategy Deck',
        'Primary & Secondary Logos',
        'Typography & Color Palette',
        'Tone of Voice Guide',
        'Brand Book (PDF)',
        'Stationery Kit'
      ],
      benefits: [
        'Command higher prices with premium positioning',
        'Stand out in saturated Kerala markets',
        'Consistent look across all branches/franchises',
        'Increased trust from international partners',
        'Scalable identity for future expansion'
      ],
      processSteps: [
        { title: 'Discovery', description: 'We interview stakeholders and audit your competitors to find the gap in the market.' },
        { title: 'Strategy', description: 'We define the "Big Idea" that will drive your brand forward.' },
        { title: 'Design', description: 'We create visual concepts that bring the strategy to life.' },
        { title: 'Delivery', description: 'We hand over a comprehensive toolkit enabling you to launch with confidence.' }
      ],
      faq: [
        { question: "Do you just design logos?", answer: "No. We design complete Brand Identities. A logo is just one part of the system." },
        { question: "What is the cost of branding?", answer: "It depends on the scope. We work with both startups and large corporations, tailoring packages to your business stage." },
        { question: "Can you help rename our business?", answer: "Yes, our strategy team specializes in Naming exercises to find trademarkable, meaningful brand names." }
      ]
    }
  },
  {
    id: 's2',
    slug: 'creative-strategy',
    title: 'Creative Strategy',
    category: ServiceCategory.STRATEGY,
    seoTitle: 'Business & Brand Strategy Consulting Kerala | Narratv Space',
    seoDescription: 'Data-driven brand strategy and consulting for businesses in Kerala and Middle East. Market research, competitor analysis, and go-to-market roadmaps.',
    keywords: ['Brand Strategy', 'Business Consulting Kerala', 'Market Research Calicut', 'Go-to-market Strategy', 'Strategic Planning India'],
    description: 'We don’t guess; we map. We turn business objectives into actionable creative roadmaps that minimize risk.',
    includes: ['Market Research', 'Competitor Analysis', 'Customer Personas', 'Go-to-Market Roadmaps', 'Brand Architecture'],
    details: {
      heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
      tagline: 'Precision Before Execution',
      introHeadline: 'Hope is not a strategy. Data is.',
      introContent: `
        <p class="lead"><strong>Too many Kerala businesses launch with a "product-first" mindset, ignoring the "people-first" reality.</strong> At Narratv Space, we believe that creative work without strategic underpinning is just decoration.</p>
        <p>Our strategy team acts as your external CMO office. We analyze market trends in Kerala, consumer behavior in the GCC, and global shifts to chart a course for your brand that ensures long-term ROI, not just short-term hype.</p>
      `,
      problemTitle: 'The Directionless Sprint',
      problemContent: `
        <p>Many companies spend lakhs on marketing budgets without a clear definition of <em>who</em> they are talking to. They chase trends—jumping on every Instagram audio trend—without asking if it aligns with their core business goals.</p>
        <p class="mt-4">This leads to brands that feel confused and disjointed. If you try to speak to everyone, you end up speaking to no one.</p>
      `,
      solutionTitle: 'The North Star',
      solutionContent: `
        <p>We build a "North Star" framework for your business. This document defines your non-negotiables: your unique value proposition, your primary audience, and your positioning statement.</p>
        <p class="mt-4">Every creative decision—from your logo color to your ad script—must pass through this strategic filter. This ensures consistency, efficiency, and measurable business growth.</p>
      `,
      subServices: [
        { title: 'Market Research', description: 'Deep-dive analysis into your industry landscape in Kerala and beyond.' },
        { title: 'Competitor Analysis', description: 'Forensic deconstruction of your top 3 competitors to find their weaknesses.' },
        { title: 'Customer Personas', description: 'Creating detailed profiles of your ideal customers—what they fear, what they desire.' },
        { title: 'Brand Architecture', description: 'Organizing complex portfolios of sub-brands or products into a logical hierarchy.' },
        { title: 'Go-to-Market Strategy', description: 'A detailed launch plan for new products, ensuring maximum impact on Day 1.' },
        { title: 'Messaging Framework', description: 'Defining key talking points for your sales and marketing teams.' }
      ],
      deliverables: [
        'Market Audit Report',
        'Competitor Matrix',
        'Audience Persona Decks',
        'Strategic Roadmap',
        'Launch Timeline',
        'Key Messaging Docs'
      ],
      benefits: [
        'Reduced marketing waste',
        'Clear internal alignment',
        'Data-backed decision making',
        'Identified market gaps',
        'Long-term brand resilience'
      ],
      processSteps: [
        { title: 'Audit', description: 'We assess your current position and business health.' },
        { title: 'Analyze', description: 'We study the external market and cultural forces.' },
        { title: 'Synthesize', description: 'We combine data to form a unique strategic angle.' },
        { title: 'Roadmap', description: 'We give you a step-by-step plan for execution.' }
      ],
      faq: [
        { question: "Is strategy expensive?", answer: "Strategy saves you money by preventing wasted ad spend. It is an investment in efficiency." },
        { question: "Do you offer retainers?", answer: "Yes, we offer ongoing strategic consulting to help you navigate market changes." },
        { question: "How long does it take?", answer: "A typical strategy phase lasts 2-4 weeks, depending on the research required." }
      ]
    }
  },
  {
    id: 's3',
    slug: 'ad-campaigns',
    title: 'Ad Campaigns',
    category: ServiceCategory.ADVERTISING,
    seoTitle: 'Advertising Agency Kerala | Creative Ad Campaigns Calicut',
    seoDescription: 'High-impact advertising campaigns for TV, Print, and Digital. We create disruptive ad creatives that drive sales in Kerala and UAE.',
    keywords: ['Advertising Agency', 'Ad Filmmaking Kerala', 'Hoarding Design Calicut', 'Creative Campaigns', 'Social Media Ads'],
    description: 'We create disruptive campaigns that break through the noise. From billboards in Calicut to digital ads in Dubai.',
    includes: ['Campaign Concepts', 'TVC Scripts', 'Hoarding / Print Ads', 'Social Ad Creatives', 'Media Planning', 'Copywriting'],
    details: {
      heroImage: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2000&auto=format&fit=crop',
      tagline: 'Captivate & Convert',
      introHeadline: 'We don\'t buy attention. We earn it.',
      introContent: `
        <p class="lead"><strong>The average Malayali consumer sees thousands of ads daily. They ignore almost all of them.</strong> Your problem isn't reach; it's indifference.</p>
        <p>Narratv Space creates "Stop-Scroll" advertising. Whether it's a huge hoarding on the Calicut Bypass or a 15-second Instagram Story, our campaigns use psychological hooks and striking visuals to command attention.</p>
      `,
      problemTitle: 'The "Invisible" Ad',
      problemContent: `
        <p>Most ads are invisible. They use the same stock photos, the same fonts, and the same generic claims ("Best Service," "Trusted Quality"). If your ad looks like an ad, it has already failed.</p>
        <p class="mt-4">Furthermore, disconnected campaigns—where the hoarding says one thing and the digital ad another—dilute your message and burn your cash.</p>
      `,
      solutionTitle: 'Disruptive Creativity',
      solutionContent: `
        <p>We build "360-Degree" campaigns centered around a "Big Idea." This concept is robust enough to work on a billboard and a mobile screen. We focus on emotional selling—tapping into desires for status, security, or belonging.</p>
        <p class="mt-4">We are experts in the Kerala market context, knowing exactly what triggers a response from the local audience while maintaining international aesthetic standards.</p>
      `,
      subServices: [
        { title: 'Campaign Ideation', description: 'Developing the core creative concept that drives the entire marketing push.' },
        { title: 'Scriptwriting', description: 'Writing compelling scripts for TV Commercials (TVCs) and digital films in Malayalam and English.' },
        { title: 'OOH & Print Design', description: 'Eye-catching designs for hoardings, newspapers, and magazines across Kerala.' },
        { title: 'Digital Ad Assets', description: 'High-performance creatives (static & video) optimized for Meta and Google Ads.' },
        { title: 'Copywriting', description: 'Persuasive headlines and captions that drive action.' },
        { title: 'Launch Strategy', description: 'Timing your campaign rollout for maximum impact (e.g., Onam, Vishu seasons).' }
      ],
      deliverables: [
        'Campaign Strategy Deck',
        'Key Visuals (KV)',
        'Video Scripts',
        'Social Media Ad Sets',
        'Print Ready Files',
        'Media Plan Implementation'
      ],
      benefits: [
        'Higher Click-Through Rates (CTR)',
        'Better Brand Recall',
        'Unified cross-channel messaging',
        'Increased ROI on ad spend',
        'Viral potential'
      ],
      processSteps: [
        { title: 'Brief', description: 'We identify the single key message and target audience.' },
        { title: 'Concept', description: 'We present 3 unique creative routes for the campaign.' },
        { title: 'Production', description: 'We shoot, design, and write all necessary assets.' },
        { title: 'Rollout', description: 'We deliver formatted files for all media channels.' }
      ],
      faq: [
        { question: "Do you handle media buying?", answer: "We focus on Creative and Strategy. We partner with specialized media buying teams or work with yours to place the ads." },
        { question: "Can you do vernacular ads?", answer: "Yes, we specialize in high-quality Malayalam copywriting that connects emotionally without sounding old-fashioned." },
        { question: "What is a 360 campaign?", answer: "It means your message is everywhere your customer is—Outdoors, Online, in Print, and on Screen." }
      ]
    }
  },
  {
    id: 's4',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    category: ServiceCategory.DIGITAL,
    seoTitle: 'Digital Marketing Agency Calicut | SEO & SMM Services Kerala',
    seoDescription: 'Performance-driven digital marketing. SEO, Social Media Management, and Paid Ads for brands in Kerala looking to scale online.',
    keywords: ['Digital Marketing', 'SEO Company Kerala', 'Social Media Marketing Calicut', 'Google Ads Agency', 'Lead Generation'],
    description: 'We move beyond vanity metrics to drive real business growth. SEO, Social Media, and Performance Marketing that delivers ROI.',
    includes: ['SEO', 'Social Media Mgmt', 'Google/Meta Ads', 'Email Marketing', 'Conversion Optimization', 'Analytics'],
    details: {
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      tagline: 'Growth on Autopilot',
      introHeadline: 'Performance meets Perception.',
      introContent: `
        <p class="lead"><strong>Traffic is vanity. Conversion is sanity.</strong> Many agencies in Kerala promise "likes" and "reach." We promise revenue and leads. Narratv Space combines high-end branding with hard-nosed performance marketing.</p>
        <p>Your beautiful brand is useless if no one finds it. Our digital team ensures that your brand dominates search results, social feeds, and inboxes, turning passive scrollers into active customers.</p>
      `,
      problemTitle: 'The "Leaky Bucket"',
      problemContent: `
        <p>Many businesses pour money into ads but send traffic to a confusing website. This is the "Leaky Bucket" syndrome. You are paying for customers who arrive, get confused, and leave.</p>
        <p class="mt-4">Boosting posts without a strategy is gambling. Without proper tracking and retargeting, you are wasting 70% of your budget.</p>
      `,
      solutionTitle: 'The Growth Ecosystem',
      solutionContent: `
        <p>We build a full digital ecosystem. We start with <strong>SEO</strong> to ensure long-term free traffic. We use <strong>PPC (Ads)</strong> for immediate leads. We use <strong>Social Media</strong> to build trust.</p>
        <p class="mt-4">We track everything. From the first click to the final sale, we know exactly which rupee is working for you. If it doesn't make money, we stop doing it.</p>
      `,
      subServices: [
        { title: 'SEO', description: 'Ranking your website on Page 1 of Google for high-intent keywords like "Best Builders in Calicut".' },
        { title: 'Social Media Management', description: 'Curating your Instagram & LinkedIn with premium content that builds authority.' },
        { title: 'Performance Ads', description: 'Running highly targeted campaigns on Meta and Google to generate instant leads.' },
        { title: 'Email Marketing', description: 'Automated flows (Welcome, Abandoned Cart) to nurture leads while you sleep.' },
        { title: 'Conversion Rate Optimization', description: 'Tweaking your landing pages to ensure more visitors turn into buyers.' },
        { title: 'Analytics', description: 'Transparent monthly reports showing exactly where your budget went.' }
      ],
      deliverables: [
        'SEO Audit & Fixes',
        'Monthly Content Calendar',
        'Ad Campaign Setup',
        'Email Automation',
        'Performance Reports',
        'Landing Page Optimization'
      ],
      benefits: [
        'Predictable lead generation',
        'Lower Cost Per Lead (CPL)',
        'Dominant Google Rankings',
        'Direct customer engagement',
        'Measurable ROI'
      ],
      processSteps: [
        { title: 'Setup', description: 'Fixing technical errors and setting up tracking pixels.' },
        { title: 'Strategy', description: 'Defining keywords and audience targeting.' },
        { title: 'Execution', description: 'Launching ads and posting content.' },
        { title: 'Optimization', description: 'Weekly testing to improve performance.' }
      ],
      faq: [
        { question: "How long does SEO take?", answer: "SEO is a long-term game, typically taking 3-6 months. But the traffic is free and recurring." },
        { question: "Which platform is best?", answer: "B2B wins on LinkedIn/Google. B2C Fashion/Food wins on Instagram/YouTube." },
        { question: "Do you guarantee leads?", answer: "We guarantee best practices and transparent reporting. We focus on lead quality over just quantity." }
      ]
    }
  },
  {
    id: 's5',
    slug: 'video-production',
    title: 'Video Production',
    category: ServiceCategory.PRODUCTION,
    seoTitle: 'Video Production House Kerala | Corporate Films & TVC',
    seoDescription: 'Premium video production services in Calicut. TV Commercials, Corporate Films, Product Videos, and Social Reels. Cinematic quality for modern brands.',
    keywords: ['Video Production Kerala', 'Corporate Film Makers', 'TVC Production Calicut', 'Product Videography', 'Drone Shoots'],
    description: 'Cinematic storytelling for the digital age. From TV commercials to YouTube series, we produce visuals that captivate.',
    includes: ['TV Commercials', 'Corporate Films', 'Product Videography', 'Social Media Reels', 'Drone Cinematography', 'Post-Production'],
    details: {
      heroImage: 'https://images.unsplash.com/photo-1579541591970-e3a896357916?q=80&w=2070&auto=format&fit=crop',
      tagline: 'Cinematic Storytelling',
      introHeadline: 'Every frame a painting. Every second counts.',
      introContent: `
        <p class="lead"><strong>Video is the default language of the internet.</strong> But in a sea of mediocre content, quality is the only differentiator.</p>
        <p>Narratv Space operates a top-tier production house in Kerala. We don't just "shoot video"; we craft cinematic experiences. We bring the discipline of filmmaking—lighting, composition, sound design—to brand communication.</p>
      `,
      problemTitle: 'The "Amateur" Look',
      problemContent: `
        <p>Relying on shaky phone footage can damage a premium brand's reputation. If you are selling luxury apartments or high-end jewelry, low-quality video tells the customer your product is low-quality too.</p>
      `,
      solutionTitle: 'Broadcast Quality',
      solutionContent: `
        <p>We use cinema-grade cameras, professional lighting, and expert color grading. Whether it's a 30-second TVC or a 10-minute corporate documentary, we apply international standards.</p>
        <p class="mt-4">We also offer "Hybrid Production"—shooting high-gloss hero assets and social reels in the same schedule to maximize your content library.</p>
      `,
      subServices: [
        { title: 'TV Commercials', description: 'High-end scripted commercials for TV and OTT platforms.' },
        { title: 'Corporate Films', description: 'Brand story films and factory tours that build trust with investors.' },
        { title: 'Product Videography', description: 'Dynamic shots of your product in action (Food, Jewelry, Tech).' },
        { title: 'Social Media Reels', description: 'Vertical, fast-paced video content for Instagram and TikTok.' },
        { title: 'Drone Cinematography', description: 'Aerial footage for real estate, resorts, and events.' },
        { title: 'Post-Production', description: 'Editing, Color Grading, Sound Design, and VFX.' }
      ],
      deliverables: [
        'Script & Storyboard',
        '4K Master Files',
        'Social Media Cutdowns',
        'Color Graded Assets',
        'Licensed Music'
      ],
      benefits: [
        'Elevated brand perception',
        'Higher social engagement',
        'Clear communication of complex products',
        'Emotional connection',
        'Multi-platform assets'
      ],
      processSteps: [
        { title: 'Pre-Production', description: 'Scripting, casting, and location scouting.' },
        { title: 'Production', description: 'The shoot. Directing talent and capturing visuals.' },
        { title: 'Post-Production', description: 'Editing, grading, and sound mixing.' },
        { title: 'Delivery', description: 'Exporting for Web, TV, and Social.' }
      ],
      faq: [
        { question: "How much does a video cost?", answer: "It depends on crew size and equipment. We offer packages from social shoots to full TVCs." },
        { question: "Do you handle casting?", answer: "Yes, we have a network of actors and models in Kerala." },
        { question: "Can you edit existing footage?", answer: "Yes, if the source footage is good, we can repackage it." }
      ]
    }
  },
  {
    id: 's6',
    slug: 'content-creation',
    title: 'Content Creation',
    category: ServiceCategory.CONTENT,
    seoTitle: 'Social Media Content Creation Kerala | Photography & Reels',
    seoDescription: 'Always-on content creation services in Calicut. Photography, Copywriting, and Graphic Design to keep your social feeds active.',
    keywords: ['Content Creation', 'Social Media Management', 'Product Photography Kerala', 'Copywriting', 'Graphic Design'],
    description: 'Feed the beast, beautifully. We provide a steady stream of high-fidelity assets to keep your brand top-of-mind.',
    includes: ['Photography', 'Graphic Design', 'Blog Writing', 'Social Media Posts', 'UGC Campaigns', 'Newsletters'],
    details: {
      heroImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
      tagline: 'Always-On Relevance',
      introHeadline: 'The feed eats first.',
      introContent: `
        <p class="lead"><strong>In the algorithmic era, silence is death.</strong> Brands need to be publishing constantly to stay relevant.</p>
        <p>Narratv Space solves the content paradox: High Quantity meets High Quality. We operate as your extended newsroom, producing a stream of on-brand photography, graphics, and copy that keeps your audience engaged.</p>
      `,
      problemTitle: 'The Content Treadmill',
      problemContent: `
        <p>Posting every day is exhausting. Business owners start with enthusiasm then burn out. Inconsistency kills your reach. Generic Canva templates only add to the noise.</p>
      `,
      solutionTitle: 'Scalable Content Engines',
      solutionContent: `
        <p>We build "Content Pillars" and batch-produce assets. We shoot a month's worth of photos and videos in one day. We design flexible systems so you are always "on" without the stress.</p>
      `,
      subServices: [
        { title: 'Brand Photography', description: 'Lifestyle and product photography in Calicut.' },
        { title: 'Graphic Design', description: 'Social media carousels and posters.' },
        { title: 'Blog Writing', description: 'SEO-optimized articles to drive traffic.' },
        { title: 'UGC Strategies', description: 'Curating user-generated content for social proof.' },
        { title: 'Newsletters', description: 'Email copy that nurtures customers.' },
        { title: 'LinkedIn Growth', description: 'Ghostwriting for founders and CEOs.' }
      ],
      deliverables: [
        'Content Calendar',
        'Photo Library',
        'Graphic Assets',
        'Blog Posts',
        'Captions',
        'Hashtag Sets'
      ],
      benefits: [
        'Consistent presence',
        'No daily stress',
        'Professional look',
        'Increased reach',
        'Community growth'
      ],
      processSteps: [
        { title: 'Plan', description: 'Monthly editorial meetings.' },
        { title: 'Create', description: 'Batch shooting and designing.' },
        { title: 'Review', description: 'Approval of all assets.' },
        { title: 'Publish', description: 'Scheduling and posting.' }
      ],
      faq: [
        { question: "Do I need to be in photos?", answer: "No, we can focus on product or use models." },
        { question: "Who owns the content?", answer: "You own full rights to all created assets." },
        { question: "Do you write in Malayalam?", answer: "Yes, we have expert Malayalam copywriters." }
      ]
    }
  },
  {
    id: 's7',
    slug: 'ai-video-production',
    title: 'AI Video Production',
    category: ServiceCategory.PRODUCTION,
    seoTitle: 'AI Video Production Kerala | Generative AI Ads & content',
    seoDescription: 'Cutting-edge AI video production services in Kerala. We use Generative AI to create impossible visuals and scalable video content for brands.',
    keywords: ['AI Video', 'Generative AI', 'Sora Video', 'AI Commercials', 'Tech Advertising'],
    description: 'The future is here. We leverage cutting-edge Generative AI to create impossible visuals and scalable video campaigns.',
    includes: ['AI Commercials', 'Generative Visuals', 'Synthetic Voiceovers', 'AI VFX', 'Rapid Versioning', 'Concept Visualization'],
    details: {
      heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
      tagline: 'Infinite Imagination',
      introHeadline: 'Create the Impossible.',
      introContent: `
        <p class="lead"><strong>Traditional production has limits. AI does not.</strong> Narratv Space is pioneering AI-assisted video production in Kerala.</p>
        <p>Using tools like Midjourney, Runway Gen-2, and specialized AI workflows, we create commercials and visualizers that would cost crores to shoot physically. This is the perfect solution for tech brands, futuristic concepts, or rapid social content.</p>
      `,
      problemTitle: 'Budget vs Vision',
      problemContent: `
        <p>Sometimes your idea is bigger than your budget. Shooting in space, underwater, or in a cyberpunk city is expensive. Traditional CGI takes weeks. You need high-end visuals, fast.</p>
      `,
      solutionTitle: 'Generative Speed',
      solutionContent: `
        <p>AI allows us to iterate at the speed of thought. We can generate storyboards, animatics, and final video assets in a fraction of the time. We combine AI generation with traditional compositing for a polished look.</p>
      `,
      subServices: [
        { title: 'AI Commercials', description: 'Full advert films generated using AI video tools.' },
        { title: 'Generative Visuals', description: 'Abstract, high-tech background loops for events and screens.' },
        { title: 'Synthetic Voice', description: 'Professional AI voiceovers in multiple languages and accents.' },
        { title: 'Concept Art', description: 'Rapid visualization of ideas for pitch decks.' },
        { title: 'Style Transfer', description: 'Turning ordinary footage into anime, painting, or claymation styles.' },
        { title: 'Localization', description: 'AI lip-syncing to translate videos into multiple languages.' }
      ],
      deliverables: [
        'AI Video Files',
        'Voiceover Files',
        'Concept Boards',
        'Source Prompts'
      ],
      benefits: [
        'Lower production costs',
        'Impossible visuals made real',
        'Rapid turnaround',
        'Infinite style variations',
        'Scalable content'
      ],
      processSteps: [
        { title: 'Concept', description: 'Defining the style and prompt strategy.' },
        { title: 'Generate', description: 'Iterative AI generation of clips.' },
        { title: 'Composite', description: 'Editing and fixing artifacts.' },
        { title: 'Finalize', description: 'Upscaling and color grading.' }
      ],
      faq: [
        { question: "Is it real video?", answer: "It is synthesizing new pixels based on your vision. It looks hyper-stylized." },
        { question: "Is it cheaper?", answer: "Generally yes, as it skips crew, location, and travel costs." },
        { question: "Can you use our product?", answer: "We use a hybrid approach to composites your real product into AI worlds." }
      ]
    }
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    slug: 'nebula-fintech',
    title: 'Nebula FinTech',
    client: 'Nebula',
    category: ServiceCategory.BRANDING,
    tags: ['Branding', 'Identity', 'Strategy'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop',
    overview: 'Nebula approached us to redefine the visual language of modern banking for Gen Z. They needed a brand that felt secure yet revolutionary.',
    results: 'We delivered a complete rebrand that led to a 40% increase in signups post-launch and a featured spot in FinTech Weekly.',
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1470&auto=format&fit=crop'
    ]
  },
  {
    id: 'p2',
    slug: 'velocity-motion',
    title: 'Velocity Motion',
    client: 'Velocity Motors',
    category: ServiceCategory.PRODUCTION,
    tags: ['Video', 'Campaign', 'CGI'],
    imageUrl: 'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1470&auto=format&fit=crop',
    overview: 'To launch their new EV series, Velocity Motors needed a high-octane film that showcased speed without compromising on the eco-friendly message.',
    results: 'The launch film garnered 2M+ views across social platforms and drove pre-orders to record highs.',
  },
  {
    id: 'p3',
    slug: 'ecolife-global',
    title: 'EcoLife Global',
    client: 'EcoLife',
    category: ServiceCategory.DIGITAL,
    tags: ['Marketing', 'Interactive', 'Growth'],
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?q=80&w=1413&auto=format&fit=crop',
    overview: 'EcoLife required an immersive campaign to educate users on sustainability practices. The goal was to make learning addictive through digital channels.',
    results: 'The campaign reached 500k users in Kerala and the UAE, with a 300% increase in engagement.',
  },
  {
    id: 'p4',
    slug: 'urban-wear-social',
    title: 'Urban Wear Social',
    client: 'Urban Wear',
    category: ServiceCategory.CONTENT,
    tags: ['Content', 'Social', 'Photography'],
    imageUrl: 'https://images.unsplash.com/photo-1523398002882-0d3793443836?q=80&w=1383&auto=format&fit=crop',
    overview: 'A street-style focused content series for Instagram and TikTok to reinvigorate the brand\'s presence among urban youth in Calicut and Kochi.',
    results: '15% engagement rate increase and a viral hashtag campaign that generated 10k+ UGC posts.',
  },
  {
    id: 'p5',
    slug: 'lumina-architecture',
    title: 'Lumina Architecture',
    client: 'Lumina',
    category: ServiceCategory.STRATEGY,
    tags: ['Strategy', 'Identity', 'Print'],
    imageUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop',
    overview: 'Consolidating 5 sub-brands into a cohesive master brand architecture to simplify their global offering.',
    results: 'Unified brand voice established globally, reducing marketing overhead by 20% while increasing brand recall.',
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'Elena Rostova',
    role: 'Founder & Chief Strategist',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop',
    bio: '15 years shaping narratives for Fortune 500 brands. Elena specializes in cross-cultural brand strategy and has led rebrands for major telcos and fintechs in Dubai and London.',
  },
  {
    id: 't2',
    name: 'Marcus Chen',
    role: 'Executive Creative Director',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop',
    bio: 'Award-winning filmmaker and visual storyteller. Marcus brings a cinematic eye to every project, ensuring that our output isn\'t just seen, but felt. Previously at Ogilvy.',
  },
  {
    id: 't3',
    name: 'Sarah Jenkins',
    role: 'Head of Digital Growth',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop',
    bio: 'Expert in performance marketing and conversion psychology. Sarah believes that beautiful design is useless if it doesn\'t convert. She leads our growth teams with precision.',
  },
  {
    id: 't4',
    name: 'David Okafor',
    role: 'Production Director',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop',
    bio: 'Bridging the gap between creative vision and technical reality. David ensures our video productions are executed flawlessly, from logistics to final delivery.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    slug: 'death-of-traditional-campaign',
    title: 'The Death of the Traditional Campaign',
    seoTitle: 'Why Campaigns are Dead: The Shift to Always-On Marketing | Narratv',
    seoDescription: 'Why "always-on" storytelling is replacing the quarterly launch model in Kerala\'s marketing landscape. Learn how to adapt your brand strategy for 2024.',
    excerpt: 'Why "always-on" storytelling is replacing the quarterly launch model in Kerala\'s marketing landscape.',
    introHeadline: 'The "Big Bang" launch is over. Welcome to the era of the stream.',
    introContent: `
      <p class="lead">The era of the "big bang" campaign launch is fading. In a world where attention spans are measured in milliseconds and algorithms prioritize consistency, brands in Kerala can no longer afford to go dark between quarterly activations. The old model of "TVC during Onam + Silence" is dead.</p>
      <p>For decades, the advertising model in Calicut and Kochi was simple: save up your budget, blast the airwaves for six weeks during festival seasons (Onam, Vishu, Christmas), and then retreat to the boardroom to count sales. But the digital landscape has fundamentally broken this model. Consumers don't experience brands in isolated bursts. They experience them as a continuous presence in their feeds, their inboxes, and their daily lives.</p>
    `,
    keyTakeaways: [
      'The "Onam-Only" advertising model leads to massive drops in brand recall during off-seasons.',
      'Algorithms punish inconsistency; going dark means paying more to re-acquire your audience later.',
      'Micro-content streams (reels/shorts) build stronger community bonds than sporadic TV commercials.',
      'Narrative streams allow brands to react to cultural moments in real-time.'
    ],
    articleSections: [
      {
        heading: 'The Cost of Silence',
        content: `
          <p>When you go dark, you lose more than just visibility; you lose algorithmic favor. Social platforms like Instagram and LinkedIn penalize accounts that are inconsistent. Re-starting a cold engine is expensive. It costs significantly more to re-acquire attention than to maintain it.</p>
          <p>Think of it like a friendship. You don't just speak to your friends once a year at a party; you text, you share memes, you meet for coffee. Brands need to mimic this behavior. The brands winning in Kerala today—from local cafes to fashion retailers—are the ones treating their customers like a community, not a target.</p>
        `
      },
      {
        heading: 'Adapting to the "Always-On" Model',
        content: `
          <p>Transitioning from campaign thinking to always-on thinking requires a shift in production. You cannot spend ₹5 Lakhs on every piece of content. You need a mix of "Hero" content (high budget) and "Hub" content (consistent, lower budget).</p>
          <ul class="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Micro-Content:</strong> Break down your 60-second ad film into 20 different 5-second reels. Distribute them over a month.</li>
            <li><strong>Community Management:</strong> Treat your comments section as a customer service channel. Reply, engage, and build a tribe.</li>
            <li><strong>Cultural Relevance:</strong> Don't just post about your product. Post about what your audience cares about—local football, movies, rain, food. Be part of the Kerala zeitgeist.</li>
          </ul>
        `
      }
    ],
    category: 'Strategy',
    date: 'Oct 12, 2023',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    author: 'Elena Rostova',
    authorRole: 'Chief Strategist',
    tags: ['Marketing Strategy', 'Kerala Business', 'Digital Trends', 'Branding']
  },
  {
    id: 'b2',
    slug: 'future-advertising-ai-identity',
    title: 'The Future of Advertising: AI & Identity',
    seoTitle: 'AI in Advertising Kerala | Generative AI for Brands',
    seoDescription: 'How Generative AI is reshaping the advertising landscape in Kerala and beyond. Balancing automation with human creativity.',
    excerpt: 'How Generative AI is reshaping the advertising landscape in Kerala and beyond. Balancing automation with human creativity.',
    introHeadline: 'AI isn\'t coming to take your job. It\'s coming to take your mediocrity.',
    introContent: `
      <p class="lead">The conversation around AI in advertising is often polarized: it's either the apocalypse or the savior. At Narratv Space, we see it as a force multiplier.</p>
      <p>For brands in Kerala, AI offers a unique opportunity to leapfrog traditional production constraints. Suddenly, a startup in Calicut can produce visuals that rival a multinational in New York. But with great power comes the need for great taste.</p>
    `,
    keyTakeaways: [
      'Democratization of Visuals: High-end production is now accessible to smaller brands.',
      'The "Taste Gap": Why human curation matters more than ever when generation is easy.',
      'Hyper-Personalization: Using AI to create thousands of unique ad variations.',
      'Ethical Branding: Transparency in the age of synthetic media.'
    ],
    articleSections: [
      {
        heading: 'The End of "Good Enough"',
        content: `
          <p>When anyone can generate a "decent" image in seconds, "decent" is no longer a competitive advantage. The baseline has been raised. Brands that rely on generic stock imagery will look increasingly obsolete.</p>
          <p>The winners will be the brands that use AI to execute <em>distinct</em> ideas—surrealist visuals, impossible camera angles, and hyper-specific cultural references that stock libraries can't provide.</p>
        `
      },
      {
        heading: 'Scale vs Soul',
        content: `
          <p>AI scales content, but it cannot scale soul. The role of the agency shifts from "maker" to "conductor." We are here to guide the AI to produce work that aligns with your brand's emotional core.</p>
          <p>In a world of synthetic perfection, human flaws and specific local nuances (like the specific shade of green in a Kerala monsoon) become premium indicators of authenticity.</p>
        `
      }
    ],
    category: 'Innovation',
    date: 'Sep 28, 2023',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    author: 'Marcus Chen',
    authorRole: 'Executive Creative Director',
    tags: ['AI Advertising', 'Future Trends', 'Generative AI', 'Brand Identity']
  },
  {
    id: 'b3',
    slug: 'video-trends-2024',
    title: 'Video Trends for 2024: Cinematic Social',
    seoTitle: 'Video Production Trends 2024 Kerala | Cinematic Social Media',
    seoDescription: 'Short-form, vertical, and the return of cinematic pacing. Why premium brands in Kerala are moving away from lo-fi content.',
    excerpt: 'Short-form, vertical, and the return of cinematic pacing.',
    introHeadline: 'The lo-fi era is ending. Premium brands are returning to craft.',
    introContent: `
      <p class="lead">Video content is king, but the kingdom is changing. While TikTok and Reels have driven a trend toward raw, lo-fi authenticity, we are seeing a counter-movement toward "Cinematic Social".</p>
      <p>The "UGC look" is becoming saturated. To stand out, premium brands in Kerala—luxury resorts in Wayanad, jewellery brands in Calicut, builders in Kochi—are returning to high production values. They are realizing that shaky phone footage doesn't sell luxury.</p>
    `,
    keyTakeaways: [
      'Saturation of UGC (User Generated Content) is driving a return to high-production value.',
      'Silent Storytelling: Visuals must work without audio.',
      'The "Malayalam Cinema" influence: Kerala audiences respect good cinematography.',
      'Hybrid Production: Shooting TVCs and Social Reels simultaneously.'
    ],
    articleSections: [
      {
        heading: 'Silent Storytelling',
        content: `
          <p>With 80% of mobile video viewed without sound, visual storytelling is more critical than script. Kinetic typography, strong visual metaphors, and clear action are essential. If your video doesn't make sense on mute, it doesn't work. We focus on "Visual Hooks" within the first 3 seconds.</p>
        `
      },
      {
        heading: 'The Kerala Context',
        content: `
          <p>Kerala has one of the most sophisticated film audiences in the world. We appreciate cinematography. Brands here should leverage that. Ads that look like short films (think of the work done by some top jewellers) perform exceptionally well because they respect the audience's visual literacy.</p>
          <p>At Narratv Space, we are investing heavily in hybrid productions—shoots that yield both a cinematic TVC and 50+ assets for social, all from the same set. This is the only way to maintain quality at scale.</p>
        `
      }
    ],
    category: 'Production',
    date: 'Sep 15, 2023',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop',
    author: 'Marcus Chen',
    authorRole: 'Executive Creative Director',
    tags: ['Video Production', 'Social Media', 'Trends', 'Cinematography']
  },
];