import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ACCESS() {
  return (
<>
  <Header />

  <main className="bg-amber-50 text-black">
    <div className="mx-auto max-w-5xl px-6 py-20 text-center">
      <h1 className="mb-6 text-4xl font-bold">
        場所はここ！
      </h1>

      <p className="text-lg">
        町田氏
        <br />
        サイタマケン！！！！
      </p>
    </div>
  </main>

  <Footer />
</>
  );
}