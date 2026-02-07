import Product from "./Product";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="px-10 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Shop Smarter. <span className="text-indigo-500">Live Better.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-10">
          Discover premium products crafted to elevate your everyday life.
          Curated quality. Honest pricing.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-8 py-4 rounded-xl bg-indigo-600 font-bold tracking-wide hover:bg-indigo-500 transition">
            Shop Now
          </button>
          <button className="px-8 py-4 rounded-xl border border-white/20 text-gray-200 hover:bg-white/10 transition">
            Browse Categories
          </button>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="px-10 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          🔥 Featured Products
        </h2>

        {/* EXISTING PRODUCT GRID */}
        <Product />
      </section>

      {/* CATEGORIES */}
      <section className="px-10 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Electronics", "Fashion", "Home", "Furniture"].map((cat) => (
            <div
              key={cat}
              className="h-32 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center text-lg font-semibold hover:bg-indigo-500/20 transition cursor-pointer"
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="px-10 py-20 bg-white/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">🚚 Fast Delivery</h3>
            <p className="text-sm text-gray-400">
              Quick and reliable shipping nationwide.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">🔒 Secure Payment</h3>
            <p className="text-sm text-gray-400">
              100% secure checkout process.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">⭐ Top Quality</h3>
            <p className="text-sm text-gray-400">
              Hand-picked premium products.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">💬 Support</h3>
            <p className="text-sm text-gray-400">
              Friendly customer service anytime.
            </p>
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="px-10 py-16 text-center">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-14">
          <h2 className="text-3xl font-extrabold mb-4">
            Free Shipping on Orders Over ₱2,999
          </h2>
          <p className="text-indigo-100 mb-6">
            Limited time offer. Don’t miss out.
          </p>
          <button className="px-10 py-4 rounded-xl bg-black/30 font-bold hover:bg-black/50 transition">
            Start Shopping
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-10 py-10 border-t border-white/10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ShopX. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
