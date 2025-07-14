import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* SUBSCRIBE SECTION */}
      <section className="relative bg-red-800 text-white px-6 py-10 overflow-hidden">
        <div className="relative z-10 max-w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Ready to furnish your space with Roccia?
            </h2>
            <p className="text-sm text-white/90">
              Subscribe, and be the first to know about new collections and exclusive offers.
            </p>
          </div>

          <form className="flex w-full md:w-auto rounded-full overflow-hidden shadow-md border-gray-400 border-2">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 text-white outline-none w-full md:w-64 placeholder-white bg-white bg-opacity-20"
            />
            <button
              type="submit"
              className="bg-white bg-opacity-20 px-4 py-2 text-white flex items-center justify-center transition hover:bg-opacity-30"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* BAWAH SECTION */}
<section className="relative h-[250px] w-full">
  <div className="absolute inset-0 bg-[url(https://res.cloudinary.com/dpswqafiq/image/upload/v1752243452/Bawah_xwf6kc.png)] bg-cover bg-center bg-no-repeat z-0" />
  <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-900/50 to-transparent z-10" />
  <div className="relative z-20 h-full flex items-start px-6 pt-6">
    <img
      src="/Roccia White.png"
      alt="Logo Roccia"
      className="h-[45%] w-auto"
    />
  </div>
  <div className="absolute bottom-4 w-full px-6 z-20">
    <div className="flex items-center justify-center space-x-4">
      <div className="flex-grow h-px bg-white/50" />
      <span className="text-white text-sm whitespace-nowrap">
        © 2025, Roccia
      </span>
      <div className="flex-grow h-px bg-white/50" />
    </div>
  </div>
</section>
    </>
  );
}
