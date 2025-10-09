import { unstable_noStore } from "next/cache";

import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";

// Змінні - це налаштування для всього файлу ( наприклад якщо в файді є декілька компонентів з запитами)
// export const revalidate = 5; reserved name

// export const dynamic = 'force-dynamic' --- теж саме що no-store
// export const dynamic = "force-dynamic"; - автоматично вимикаю повний кеш маршруту для цієї сторінки !
// export const dynamic = "force-dynamic";

export default async function MessagesPage() {
  //   unstable_noStore(); в Next.js використовується для запобігання кешуванню даних на стороні сервера під час рендерингу компонентів.
  //   const response = await fetch("http://localhost:8080/messages", {
  //     next: {
  //       tags: ["msg"],
  //     },
  //   });
  //   const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }
  //   console.log("Fetch Done!!!");
  return <Messages messages={messages} />;
}

//  const response = await fetch("http://localhost:8080/messages", {
//     next: {
//       revalidate: 5, // Вказуэмо скільки секунд для повторної перевірки (скільки секунд треба використовувати данні кешу до тих пір поки не перепровірить і не викине кеш! ) після цього викидує новий запит !

//     },
//   });
//  const response = await fetch("http://localhost:8080/messages", {
//    cache: 'none store' Якщо ви не хочете кешувати відповідь від fetch, ви можете зробити наступне:
//   });

// 1- cache: "force-cache" (дефолтне значення)
// Це означає: бери тільки з кешу, не роби новий запит.

// Дані "заморожуються" на час білду (як статичні).

// Використовуй, коли дані ніколи не змінюються (наприклад, сторінка з умовами використання, довідкова стаття).

// 2 - cache: "no-store"
// Це означає: ніколи не кешуй, завжди роби свіжий запит.

// Використовуй для даних, що змінюються миттєво і завжди мають бути актуальними (наприклад, повідомлення, біржові котирування, live-чати).

//  Full cache route
//  ○ /messages - "force-cache" (дефолтне значення)
//  ƒ /messages  при білді цей значок означає що це динмічна сторінка яка рендиреться сервером за вимогою.

// ○  (Static)   prerendered as static content
// ƒ  (Dynamic)  server-rendered on demand
