import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ACCESS() {
  return (
<>
  <Header />
  <main className="bg-amber-50 py-20 text-black">

    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">

      {/* 左側 */}
      <div className="flex flex-col justify-center">
        <h1 className="mb-8 text-4xl font-bold">
          アクセス
        </h1>

        <div className="space-y-5 text-lg">

          <p>
            <span className="font-bold">📍住所</span><br />
            東京都町田市木曽西〇丁目〇-〇
          </p>

          <p>
            <span className="font-bold">🚃アクセス</span><br />
            JR横浜線 町田駅から徒歩10分
          </p>

          <p>
            <span className="font-bold">🚗駐車場</span><br />
            5台完備
          </p>

          <p>
            <span className="font-bold">☎電話番号</span><br />
            042-123-4567
          </p>

          <p>
            <span>町田街道からすぐ近く！</span>
          </p>
        </div>
      </div>

      {/* 右側 */}
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d788.1857877646274!2d139.41718514273558!3d35.575292738365704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018fc5a6279e355%3A0x2aa53fccec63fbc9!2z44GK5a6d44GC44Gj44Go44Oe44O844Kx44OD44OI55S655Sw5bqX!5e0!3m2!1sja!2sjp!4v1783173182186!5m2!1sja!2sjp"
          className="h-[400px] w-full"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

    </div>

  </main>
  <Footer />
</>
  );
}