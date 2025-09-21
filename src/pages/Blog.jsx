import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { sendNewsletterSubscription } from '../utils/emailService';

const { FiCalendar, FiUser, FiTag, FiArrowRight, FiSearch, FiCheck, FiX } = FiIcons;

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await sendNewsletterSubscription(email);
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Successfully subscribed to our newsletter!'
        });
        setEmail('');
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Failed to subscribe. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const blogPosts = [
    {
      id: '1',
      title: 'Best Practices for Microsoft Intune Deployment in Enterprise Environments',
      excerpt: 'Learn the key strategies and best practices for successful Microsoft Intune deployment across large enterprise environments.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'May 15, 2024',
      author: 'Sarah Johnson',
      category: 'Intune Management',
      tags: ['Intune', 'Enterprise', 'Deployment']
    },
    {
      id: '2',
      title: 'Securing Your Remote Workforce with Microsoft Purview',
      excerpt: 'Discover how Microsoft Purview helps organizations maintain security and compliance with a distributed workforce.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'April 28, 2024',
      author: 'Michael Chen',
      category: 'Security',
      tags: ['Purview', 'Remote Work', 'Compliance']
    },
    {
      id: '3',
      title: 'The Future of Endpoint Management: Trends to Watch',
      excerpt: 'Stay ahead of the curve with these emerging trends in endpoint management and security that will shape the industry.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'April 10, 2024',
      author: 'Alicia Martinez',
      category: 'Trends',
      tags: ['Endpoint Management', 'Security', 'Future Tech']
    },
    {
      id: '4',
      title: 'Automating Compliance Reporting with Microsoft Intune',
      excerpt: 'Learn how to set up automated compliance reporting in Microsoft Intune to streamline your regulatory requirements.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'March 22, 2024',
      author: 'David Wilson',
      category: 'Compliance',
      tags: ['Automation', 'Reporting', 'Compliance']
    },
    {
      id: '5',
      title: 'How to Implement Zero Trust Security with Microsoft Technologies',
      excerpt: 'A comprehensive guide to implementing zero trust security architecture using Microsoft\'s integrated security solutions.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'March 5, 2024',
      author: 'Jennifer Lee',
      category: 'Security',
      tags: ['Zero Trust', 'Security', 'Implementation']
    },
    {
      id: '6',
      title: 'Microsoft Intune vs. Traditional MDM: A Comparative Analysis',
      excerpt: 'Compare Microsoft Intune with traditional MDM solutions to understand which approach best suits your organization.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'February 18, 2024',
      author: 'Robert Thompson',
      category: 'Intune Management',
      tags: ['Intune', 'MDM', 'Comparison']
    }
  ];

  const categories = [
    { name: 'Intune Management', count: 12 },
    { name: 'Security', count: 8 },
    { name: 'Compliance', count: 6 },
    { name: 'Endpoint Management', count: 5 },
    { name: 'Trends', count: 4 },
    { name: 'Best Practices', count: 7 }
  ];

  const popularTags = [
    'Intune', 'Security', 'Compliance', 'MDM', 'Zero Trust', 'Remote Work', 'Endpoint Management', 'Microsoft 365'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Expert insights, best practices, and industry trends in Microsoft Intune, endpoint security, and compliance management.
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 p-2">
                <SafeIcon icon={FiSearch} className="w-5 h-5 ml-3 text-white" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-white/70 px-3 py-2"
                />
                <button className="bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Featured Article"
              className="w-full h-full object-cover lg:h-auto lg:max-h-96"
            />
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className="text-gray-500 text-sm flex items-center">
                  <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                  May 15, 2024
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Best Practices for Microsoft Intune Deployment in Enterprise Environments
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Learn the key strategies and best practices for successful Microsoft Intune deployment across large enterprise environments. This comprehensive guide covers planning, implementation, and optimization techniques that ensure smooth adoption and maximum security.
              </p>
              <div className="mt-auto">
                <Link
                  to="/blog/1"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Read Full Article
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
            <Link
              to="/blog/archive"
              className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center"
            >
              View All Articles
              <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link to={`/blog/${post.id}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs flex items-center">
                      <SafeIcon icon={FiCalendar} className="w-3 h-3 mr-1" />
                      {post.date}
                    </span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiUser} className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-500 text-sm">{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary-600 font-medium hover:text-primary-700 transition-colors text-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Tags */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex justify-between items-center group"
                    >
                      <span className="text-gray-700 group-hover:text-primary-600 transition-colors">
                        {category.name}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                        {category.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <Link
                    key={index}
                    to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Stay Updated with Our Newsletter</h2>
            <p className="text-primary-100 mb-8">
              Subscribe to our newsletter for the latest insights, best practices, and updates on Microsoft Intune, security, and compliance management.
            </p>

            {/* Status Messages */}
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg flex items-center justify-center space-x-3 max-w-md mx-auto ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 border border-green-300 text-green-800' 
                  : 'bg-red-100 border border-red-300 text-red-800'
              }`}>
                <SafeIcon 
                  icon={submitStatus.type === 'success' ? FiCheck : FiX} 
                  className="w-5 h-5 flex-shrink-0" 
                />
                <span className="text-sm">{submitStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                disabled={isSubmitting}
                className="flex-1 px-4 py-3 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white/70 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-600"></div>
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <span>Subscribe</span>
                )}
              </button>
            </form>
            <p className="text-sm text-primary-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;