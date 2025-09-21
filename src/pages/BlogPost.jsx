import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiCalendar, 
  FiUser, 
  FiTag, 
  FiArrowLeft, 
  FiShare2, 
  FiLinkedin, 
  FiTwitter, 
  FiFacebook,
  FiArrowRight 
} = FiIcons;

const BlogPost = () => {
  const { id } = useParams();

  // This would typically come from an API or CMS
  const blogPost = {
    id: id,
    title: 'Best Practices for Microsoft Intune Deployment in Enterprise Environments',
    content: `
      <p>Microsoft Intune has become a cornerstone for modern device management in enterprise environments. As organizations continue to adopt cloud-based solutions and support remote work, implementing Intune effectively has become increasingly important.</p>
      
      <h2>Planning Your Intune Deployment</h2>
      
      <p>A successful Intune deployment begins with thorough planning. Before diving into implementation, consider these key factors:</p>
      
      <ul>
        <li><strong>Assess your current environment:</strong> Understand your existing device management infrastructure, including any MDM solutions already in place.</li>
        <li><strong>Define clear objectives:</strong> Establish specific goals for your Intune deployment, such as enhancing security, simplifying management, or supporting remote work.</li>
        <li><strong>Identify device types and platforms:</strong> Catalog all device types and operating systems that need to be managed.</li>
        <li><strong>Create a phased approach:</strong> Plan a gradual rollout starting with a pilot group before expanding to the entire organization.</li>
      </ul>
      
      <h2>Key Components of an Effective Intune Implementation</h2>
      
      <p>When implementing Microsoft Intune in enterprise environments, focus on these critical areas:</p>
      
      <h3>1. Device Enrollment Strategy</h3>
      
      <p>Choose the right enrollment method based on your organizational needs:</p>
      
      <ul>
        <li><strong>Autopilot:</strong> Streamlines the deployment of new Windows devices with minimal IT intervention.</li>
        <li><strong>Bulk enrollment:</strong> Efficiently registers large numbers of corporate-owned devices.</li>
        <li><strong>User-driven enrollment:</strong> Allows users to register their devices through a self-service portal.</li>
        <li><strong>Co-management:</strong> Enables a gradual transition from Configuration Manager to Intune.</li>
      </ul>
      
      <h3>2. Comprehensive Security Policies</h3>
      
      <p>Develop robust security policies that balance protection with usability:</p>
      
      <ul>
        <li><strong>Conditional Access:</strong> Implement policies that verify device compliance before allowing access to corporate resources.</li>
        <li><strong>Application Protection Policies:</strong> Protect corporate data in mobile applications without requiring device enrollment.</li>
        <li><strong>Device Compliance Policies:</strong> Enforce security requirements such as encryption, password complexity, and threat protection.</li>
      </ul>
      
      <h3>3. Application Management</h3>
      
      <p>Establish a systematic approach to application deployment and management:</p>
      
      <ul>
        <li><strong>Application packaging:</strong> Properly prepare applications for deployment through Intune.</li>
        <li><strong>Assignment methods:</strong> Determine whether applications should be required, available for installation, or uninstalled.</li>
        <li><strong>Update management:</strong> Create a strategy for keeping applications current across all devices.</li>
      </ul>
      
      <h2>Best Practices for Enterprise Deployments</h2>
      
      <h3>1. Implement a Robust Testing Process</h3>
      
      <p>Before deploying policies and applications to your production environment:</p>
      
      <ul>
        <li>Create a dedicated test tenant or group</li>
        <li>Test all policies on representative devices from each platform</li>
        <li>Validate application deployments and updates</li>
        <li>Document and address any issues before wider deployment</li>
      </ul>
      
      <h3>2. Adopt a Zero Trust Security Model</h3>
      
      <p>Enhance your security posture with these principles:</p>
      
      <ul>
        <li>Verify explicitly: Always authenticate and authorize based on all available data points</li>
        <li>Use least privilege access: Limit user access with Just-In-Time and Just-Enough-Access</li>
        <li>Assume breach: Minimize blast radius and segment access, verify end-to-end encryption</li>
      </ul>
      
      <h3>3. Establish Clear Documentation and Training</h3>
      
      <p>Support your deployment with comprehensive resources:</p>
      
      <ul>
        <li>Document all policies and configurations</li>
        <li>Create user-friendly guides for common tasks</li>
        <li>Train IT staff on Intune administration</li>
        <li>Provide end-user training on enrollment and self-service options</li>
      </ul>
      
      <h2>Common Challenges and Solutions</h2>
      
      <p>Even with careful planning, you may encounter these challenges:</p>
      
      <h3>1. Network and Infrastructure Issues</h3>
      
      <p><strong>Challenge:</strong> Slow enrollment or policy application due to network constraints.</p>
      <p><strong>Solution:</strong> Optimize network configuration, implement bandwidth management, and consider cloud connectivity requirements during planning.</p>
      
      <h3>2. User Adoption Resistance</h3>
      
      <p><strong>Challenge:</strong> Users reluctant to enroll devices or follow new procedures.</p>
      <p><strong>Solution:</strong> Create clear communication about benefits, provide comprehensive training, and establish a support channel for questions.</p>
      
      <h3>3. Application Compatibility</h3>
      
      <p><strong>Challenge:</strong> Legacy applications that don't work well with modern management.</p>
      <p><strong>Solution:</strong> Conduct thorough application testing, consider application virtualization, and develop remediation plans for problematic applications.</p>
      
      <h2>Conclusion</h2>
      
      <p>A successful Microsoft Intune deployment in enterprise environments requires careful planning, phased implementation, and ongoing optimization. By following these best practices, organizations can enhance their device management capabilities, improve security posture, and support modern work scenarios effectively.</p>
      
      <p>Remember that Intune deployment is not a one-time project but an ongoing process. Regularly review your policies, stay current with new Intune features, and continuously refine your approach based on feedback and changing requirements.</p>
    `,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'May 15, 2024',
    author: 'Sarah Johnson',
    authorTitle: 'Senior Intune Specialist',
    authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Intune Management',
    tags: ['Intune', 'Enterprise', 'Deployment', 'Best Practices', 'Security']
  };

  const relatedPosts = [
    {
      id: '2',
      title: 'Securing Your Remote Workforce with Microsoft Purview',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'April 28, 2024',
      category: 'Security'
    },
    {
      id: '3',
      title: 'The Future of Endpoint Management: Trends to Watch',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'April 10, 2024',
      category: 'Trends'
    },
    {
      id: '6',
      title: 'Microsoft Intune vs. Traditional MDM: A Comparative Analysis',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'February 18, 2024',
      category: 'Intune Management'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-primary-200 hover:text-white mb-6 transition-colors"
            >
              <SafeIcon icon={FiArrowLeft} className="mr-2 w-4 h-4" />
              Back to Blog
            </Link>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6">{blogPost.title}</h1>
            <div className="flex flex-wrap justify-center items-center space-x-6 text-sm text-primary-100">
              <div className="flex items-center space-x-2 my-2">
                <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center space-x-2 my-2">
                <SafeIcon icon={FiUser} className="w-4 h-4" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center space-x-2 my-2">
                <SafeIcon icon={FiTag} className="w-4 h-4" />
                <span>{blogPost.category}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <img 
            src={blogPost.image} 
            alt={blogPost.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <div className="bg-white rounded-xl shadow-md p-8">
                  <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
                  
                  {/* Tags */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center flex-wrap gap-2">
                      <span className="text-gray-700 font-medium">Tags:</span>
                      {blogPost.tags.map((tag, index) => (
                        <Link
                          key={index}
                          to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Social Share */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Share this article:</span>
                      <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                          <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                          <SafeIcon icon={FiTwitter} className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-800 transition-colors">
                          <SafeIcon icon={FiFacebook} className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors">
                          <SafeIcon icon={FiShare2} className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Author Bio */}
                <div className="bg-white rounded-xl shadow-md p-8 mt-8">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <img
                      src={blogPost.authorImage}
                      alt={blogPost.author}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{blogPost.author}</h3>
                      <p className="text-primary-600 mb-4">{blogPost.authorTitle}</p>
                      <p className="text-gray-600">
                        Sarah is a Microsoft-certified Intune specialist with over 10 years of experience 
                        implementing device management solutions for enterprise organizations. She specializes 
                        in secure deployment strategies and zero-trust architecture.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-1"
              >
                {/* Related Posts */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedPosts.map((post) => (
                      <div key={post.id} className="group">
                        <Link to={`/blog/${post.id}`} className="block">
                          <div className="mb-2 overflow-hidden rounded-lg">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                            {post.title}
                          </h4>
                          <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                            <SafeIcon icon={FiCalendar} className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Newsletter */}
                <div className="bg-primary-50 rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest updates and insights delivered directly to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    />
                    <button
                      type="submit"
                      className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
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
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center mt-4"
                  >
                    Read Article
                    <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;