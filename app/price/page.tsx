import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicePage() {
  return (
<>
  <Header />

  <main className="bg-amber-50 text-black">
    <div className="mx-auto max-w-5xl px-6 py-20 text-center">
      <h1 className="mb-6 text-4xl font-bold">
        料金設定
      </h1>

      <p className="text-lg">
        トリミング　100,000,000円
        <br />
        爪切り　150,000,000円
      </p>
    </div>
  </main>

  <Footer />
</>
  );
}