import { redirect } from "next/navigation";

import { addMessage } from "@/lib/messages";
import { revalidatePath, revalidateTag } from "next/cache";

export default function NewMessagePage() {
  async function createMessage(formData) {
    "use server";

    const message = formData.get("message");
    addMessage(message);
    //  revalidatePath("/messages");
    //  revalidatePath("/messages"); // - цей метод для повторної перевірки кешу .
    revalidateTag("msg");
    redirect("/messages");
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows="5" />
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}

//  revalidatePath('/messages'); // - цей метод для повторної перевірки кешу . Іноді цей метод може бути ефективнішим за перевірку вручну (встановлення властивостей в Fetch, або глобальні зарезервовані змінні ) чи за перевірку через окремий часовий період
// revalidatePath('/messages', 'layout') - якщо вказуємо другий параметр лайоут - то це говорить про те що він повинен повторно перевірити кеш всіх вкладених сторінок.
// // revalidatePath('/messages', 'page') - якщо page  то перевірка для конкретно цієї сторінки ( значення по дефолту)

//  revalidatePath("/", 'layout'); - очистить кеш всіх данних і кеш маршрутів , всіх маршрутів!

// revalidateTag("msg"); - Ми встановлюємо теги в самому запиті next: {tags: ['msg']} для того що б очистити кеш певних сторінок і не викликати декілька разів  revalidatePath('/messages') ...
