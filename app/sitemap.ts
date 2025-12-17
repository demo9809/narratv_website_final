import { MetadataRoute } from 'next';
import { SERVICES, PROJECTS, BLOG_POSTS } from '../constants';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://narratv.co';

    // Static routes
    const staticRoutes = [
        '',
        '/about',
        '/services',
        '/work',
        '/insights',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Service routes (High priority)
    const serviceRoutes = SERVICES.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Dynamic Project routes
    const projectRoutes = PROJECTS.map((project) => ({
        url: `${baseUrl}/work/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic Blog routes
    const blogRoutes = BLOG_POSTS.map((post) => ({
        url: `${baseUrl}/insights/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes];
}
