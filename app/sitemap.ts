import { MetadataRoute } from 'next';
import { SERVICES, PROJECTS, BLOG_POSTS, LOCATIONS } from '../constants';

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
    const serviceUrls = SERVICES.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Dynamic Project routes
    const projectUrls = PROJECTS.map((project) => ({
        url: `${baseUrl}/work/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic Blog routes
    const blogUrls = BLOG_POSTS.map((post) => ({
        url: `${baseUrl}/insights/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const locationUrls = LOCATIONS.map((loc) => ({
        url: `${baseUrl}/locations/${loc.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [
        ...staticRoutes,
        ...serviceUrls,
        ...projectUrls,
        ...blogUrls,
        ...locationUrls,
    ];
}
