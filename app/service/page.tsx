import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SERVICE() {
  return (
<>
  <Header />

  <main className="bg-amber-50 text-black">
    <div className="mx-auto max-w-5xl px-6 py-20 text-center">
      <h1 className="mb-6 text-4xl font-bold">
        サービス内容
      </h1>

      <p className="text-lg">
        特別ダヨ
        <br />
        なにもないケド
      </p>
    </div>
  </main>

  <Footer />
</>
  );
}