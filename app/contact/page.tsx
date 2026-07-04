"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CONTACT() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (
      e: React.FormEvent<HTMLFormElement>
    ) => {
      e.preventDefault();

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

        if (response.ok) {
          alert("お問い合わせを送信しました！");
          console.log(data);
        } else {
          alert("送信に失敗しました。");
          console.error(data);
        }
      };
  return (
<>
  <Header />

  <main className="bg-amber-50 text-black">
    <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
      <h1 className="mb-6 text-4xl font-bold">
        お問い合わせはこちら！
      </h1>
      
      <form onSubmit={handleSubmit}>
      <div className="mx-auto mt-10 max-w-xl">
        <div className="mb-6">
          <label className="mb-2 block text-left font-bold">
            お名前
          </label>

          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="例）山田 太郎"
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-xl">
        <div className="mb-6">
          <label className="mb-2 block text-left font-bold">
            メールアドレス
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="例）~~~~@gmail.com"
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-xl">
        <div className="mb-6">
          <label className="mb-2 block text-left font-bold">
            お問い合わせ内容
          </label>

          <textarea
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>
      </div>

        <button type="submit" className="mt-8 w-full rounded-xl bg-green-600 py-4 font-bold text-white transition hover:bg-green-700">
          送信する
        </button>
      </form>
    </div>
  </main>

  <Footer />
</>
  );
}