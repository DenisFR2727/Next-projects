// Обробник маршрутів - це файл в який ми можему єкспортувати різні функції які повинні мати назви функцій GET POST PATCH PUT DELETE

export function GET(request) {
    console.log(request);

    // return new Response.json();

    return new Response('Hello!');
}
// export function POST(request) {}
