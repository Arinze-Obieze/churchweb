// import AppFooter from "../components/AppFooter";

const Blog = () => {
  return (
    <div>
      <div>
        <div>
          <h1 className="mt-12 mb-6 text-2xl text-center text-gray-700">
            David's Blog
          </h1>
          <h3 className="text-center text-xl font-light mb-3 px-6">
            his weekly blog features David's anointed writing on topics like The
            Holy Spirit, Healing, Prayer, Spiritual Warfare, Miracles, God's
            Presence, and more.
          </h3>
        </div>
        <hr class="border-t border-gray-400 mt-6 mb-4 mx-auto w-[85%]" />

        <div className="px-8">
          <h1 className="mt-12 mb-6 text-2xl text-center text-gray-700">
            Latest Post
          </h1>
          <img src="/assets/blog.jpg" alt="" />
          <h1 className="mt-6 mb-12 text-3xl text-center text-gray-700">
            SOME GOOD NEWS AND SOME BAD NEWS
          </h1>
        </div>
        <hr className="border-t border-gray-400 mt-4 mb-4 mx-auto w-[85%]" />

        <div>
          <h1 className="text-center font-bold text-gray-700 text-xl mt-6 mb-3">
            RECEIVE DAVID'S BLOG VIA EMAIL
          </h1>
          <h4 className="px-6 text-center text-[18px] font-light">
            To receive David’s Blog weekly via your email inbox, sign up to
            David’s emailing list and select “Weekly Blog Posts.” In addition to
            the blog posts, you’ll receive other content and updates.
          </h4>
        </div>

        <form className="px-3 mx-8 text-gray-700 text-[16px] ">
          <div>
            <h1 className="mb-1 mt-8">Email Address *</h1>
            <input type="text" className="border-2 h-[30px] w-[90%]" />
          </div>
          <div>
            <h1 className="mb-1 mt-8">First Name</h1>
            <input type="text" className="border-2 h-[30px] w-[90%]" />
          </div>
          <div>
            <h1 className="mb-1 mt-8">Last Name</h1>
            <input type="text" className="border-2 h-[30px] w-[90%]" />
          </div>

          <h1 className="font-bold text-gray-600 mt-6">
            I would like to receive...
          </h1>
          <div>
            <div className="flex space-x-2 mt-1 text-sm">
              <input type="checkbox" />
              <h1> Sunday Morning Sermons</h1>
            </div>
            <div className="flex space-x-2 mt-2 text-sm">
              <input type="checkbox" />
              <h1>Livestream Alerts</h1>
            </div>

            <div className="flex space-x-2 mt-2 text-sm">
              <input type="checkbox" />
              <h1> Weekly Podcast Episodes</h1>
            </div>
            <div className="flex space-x-2 mt-2 text-sm">
              <input type="checkbox" />
              <h1> Weekly Blog Posts</h1>
            </div>

            <div className="flex space-x-2 mt-2 text-sm">
              <input type="checkbox" />
              <h1> Merch Drop Alerts</h1>
            </div>
          </div>

          <button className="bg-gray-400 hover:bg-blue-600 mt-6 mb-12 px-6 py-3">
            Subscribe
          </button>
        </form>
      </div>
      <hr className="border-t border-gray-400 mt-4 mb-4 mx-auto w-[85%]" />

      {/* <AppFooter /> */}
    </div>
  );
};

export default Blog;
